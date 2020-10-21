import axios from 'axios';

const instance = axios.create({
    // baseURL:'http://localhost:5001/clone-9cc5f/us-central1/api' // Api (cloud function) URL
baseURL:'https://us-central1-clone-9cc5f.cloudfunctions.net/api'
});

export default instance;