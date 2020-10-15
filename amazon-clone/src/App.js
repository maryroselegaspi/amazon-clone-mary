import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
// import Payment from './Payment';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  // a piece of code which runs base on a given condition
useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      // the user is logged in..
      dispatch({
        type:'SET_USER',
        user:authUser
      }) 
    }else{
      // the user is logged out...
      dispatch({
        type:'SET_USER',
        user:null
      });
    }
  });
  return () =>{
    // Clean up operation here
    unsubscribe();
  }
},[]);

console.log('The user is >>>', user); 
console.log(user)
  return (
    <Router>
      <div className="app">
        <Switch >
          <Route path='/checkout'>
            <Header />
            {/* <h1>checkout</h1> */}
            <Checkout />
          </Route>
          <Route path='/login'>
            <Header />
            {/* <h1>Login</h1> */}
            <Login />
          </Route>

          <Route path='/payment'>
            <Header />
            <h1>Payment</h1>
            {/* <Payment /> */}
          </Route>
          <Route path='/'>
            <Header />
            {/* <h1>Home Page</h1> */}         
            <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
