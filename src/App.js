import React, {useState} from 'react';
import {HashRouter as Router , Route , Switch} from 'react-router-dom';
import Enter from './components/Enter';
import Signup from './components/Signup';
import Login from './components/Login';
import Manager from './components/Manager';
import './App.css';

function App() {
  const [workers,setWorkers] = useState([
    {name: '', number: '', forklift: '', products: '', counter: ''}]);

  const [products, setProducts] = useState([
    {number: 11122 ,color: 'green',forklift: 'no', inPlace: false},
    {number: 22554 ,color: 'green',forklift: 'no', inPlace: false},
    {number: 66698 ,color: 'blue',forklift: 'yes', inPlace: false},
    {number: 78544 ,color: 'red',forklift: 'no', inPlace: false},
    {number: 69875 ,color: 'red',forklift: 'no', inPlace: false}
  ])

  const productsArray = [
    {number: 11122 ,color: 'green',forklift: 'no', inPlace: false},
    {number: 22554 ,color: 'green',forklift: 'no', inPlace: false},
    {number: 66698 ,color: 'blue',forklift: 'yes', inPlace: false},
    {number: 78544 ,color: 'red',forklift: 'no', inPlace: false},
    {number: 69875 ,color: 'red',forklift: 'no', inPlace: false}
  ]

  function pushNewWorker(newWorker){
    setWorkers([...workers,newWorker]);
  }

  function changedProducts(afterFilter){
setProducts(afterFilter);
  }

  function logedOut(num, afterFilter, counter){
    for(let i=0; i<workers.length; i++){
      if(workers[i].number === num){
        workers[i].products = afterFilter;
        workers[i].counter = counter;
      }
    }
    setProducts(productsArray)
  }
  return (

  <div className="App">
          <Router>
         <Switch>
            <Route exact path="/" render={() => (<Enter />)}/>
            <Route path="/signup" render={() => (<Signup workers={workers} pushNewWorker={pushNewWorker} />)}/>
            <Route path="/manager" render={() => (<Manager workers={workers} />)}/>
            <Route exact path="/login" render={() => (<Login logedOut={logedOut} changedProducts={changedProducts} workers={workers} products={products} />)}/>
            </Switch> 
            </Router>
  </div>
  );
}

export default App;
