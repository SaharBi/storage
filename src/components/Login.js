import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import '../App.css';

function Login(props) {
    const [num,setNum] = useState();
    const [name,setName] = useState("");
    const [forklift, setForklift] = useState("");
    const [welcome,setWelcome] = useState(false);
    const [redirect2, setRedirect2] = useState(false);
    const [counter, setCounter] = useState('');

    if (redirect2) {
        return <Redirect push to="/manager" />;
    }

    function logedOut(){
        props.logedOut(num, afterFilter, counter);
    }
    let afterFilter = props.products.filter(function(i){
        return i.inPlace === false;
    })

    function handleChange(e){
        const value = e.target.value;
        setNum(value);
    }
    function handleClick(){
        let c=0;
        if(num === '99999'){
            setRedirect2(true)
        } else {
        for(let i=0;i<props.workers.length;i++){
            if(num === props.workers[i].number){
                c++;
                setName(props.workers[i].name);
                setCounter(props.workers[i].counter + 1)
                setForklift(props.workers[i].forklift);
                console.log(props.workers[i].products)
                if(props.workers[i].products !== ''){
                    props.changedProducts(props.workers[i].products);
                }
                setWelcome(true);
            }
        }
        if(c===0){
            alert("This worker isn't excist.")
        }
    }
    }
    var isShow = <div className="col-4" id="box">
    <h2>Sign Up</h2>
    <Form>
        <Form.Group className="row">
        <Form.Label className="col-4 lbl">NO.</Form.Label>
            <Form.Control className="input" type="number" placeholder="Worker Number" onChange={handleChange} />
        </Form.Group>
        </Form>
    <button className="btn2" onClick={handleClick}>Enter</button>
  </div>;
    if(welcome === true){
        isShow = <div className="col-4" id="box">
            <h2>Welcome {name}</h2>
            <div className="row">
                <div className="col-2"></div>
            <h5>Details:</h5>
            </div><div className="row">
                <div className="col-2"></div>
            <p>Full Name: {name}</p>
            </div><div className="row">
                <div className="col-2"></div>
            <p>No.: {num}</p>
            </div><div className="row">
                <div className="col-2"></div>
            <p>forklift truck license: {forklift}</p>
            </div>
            <h5>List of products</h5>
            {afterFilter.map((element,i)=>{
          return  <div id="products" key ={i}>
              <div className="row">
                <div className="col-2"></div>
              <p>No. {element.number}</p></div>
              <div className="row">
                <div className="col-2"></div>
              <p>name: {element.color}</p></div>
              <div className="row">
                <div className="col-2"></div>
              <p>need forklift truck: {element.forklift}</p></div>
              <button className="btn2" onClick={()=> {
                  if(element.forklift === "no"){
                     element.inPlace = true;
                     props.changedProducts(afterFilter)
                  } else {
                      if(forklift === "yes"){
                        element.inPlace = true;
                        props.changedProducts(afterFilter)
                      } else {
                          alert('You need a forklift truck license');
                      }
                  }
              }}>Update</button>
          </div>
        })}
        <Link to='/'><button onClick={logedOut} className="btn2">Log Out</button></Link>
      </div>;
    }
    return (
        <div className="container">
        <div className="row">
          <div className="col-4"></div>
          {isShow}
        </div>
      </div>
    );
}

export default Login;