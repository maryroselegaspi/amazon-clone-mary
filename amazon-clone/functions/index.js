const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require ('express');
const cors = require('cors');
const stripe = require ('stripe')('sk_test_51HcTwABA8zqER3fxpzMBRcZeJBwXS7dZvltwdtcb6mBaj1js0UaxpK9gVmXnQjxleCEkIreU4il6HA8Jf2PVDRR000cSSOZxcg') ;

// API

// App config
const app = express();
// Middleware
app.use(cors({origin:true}));
app.use(express.json());
// API routes
app.get('/',(request, response) => response.status(200).send('Hello There'))
// app.get('/mary',(request, response) => response.status(200).send('Hey Mary'))

app.post('/payments/create', async(request, response)=> {
    const total = request.query.total;
    console.log('payment request:', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, //subunit currency
        currency:'aud',
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// List of command
exports.api= functions.https.onRequest(app)

// Endpoints
// http://localhost:5001/clone-9cc5f/us-central1/api