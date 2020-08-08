import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Signup(props) {
    const [numLbl, setNumLbl] = useState("");
    const [txtLbl, setTxtLbl] = useState("the name must contain minimum 4 characters. ");
    const [workerNumber, setWorkerNumber] = useState();
    const [workerName, setWorkerName] = useState("");
    const [forklift, setForklift] = useState("no");


    const newWorker = {
        name: workerName,
        number: workerNumber,
        forklift: forklift,
        products: '',
        counter: 0
    }


    function handleChange(e){
        const value = e.target.value;
        setWorkerNumber(value);
        if(value.length<5 || value.length>5){
            setNumLbl("the number must be with 5 digits.")
        } else {
            setNumLbl("")
        }
    }

    function handleNChange(e){
        const value = e.target.value;
        setWorkerName(value);
        let c=0;
        if(value.length>4){
            for(let i=0;i<value.length;i++){
                if(value[i]>='A' && value[i]<='z' || value[i]===' '){
                  if(value[i]===' '){
                      c++;
                  }
                } 
            }
            if(c>0){
                setTxtLbl("")
            } else {
                setTxtLbl("the name must contain minimum 4 characters. ");
            }
        } else {
            setTxtLbl("the name must contain minimum 4 characters. ");
        }
    }

    function handleCreate(){
        let c=0;
        if(numLbl==="" && txtLbl===""){
            for(let k=0;k<props.workers.length;k++){
                let newWorkersNumber = props.workers[k].number.toString();
                if(newWorkersNumber === workerNumber){
                    alert("This worker is already in the system");
                    c++; 
                } 
            }
            if(c === 0){
                props.pushNewWorker(newWorker);
            }
        } else {
            alert("You need to fix the details.")
        }
    }

    function radioChange(e){
        const value = e.target.value;
        if(value === "yes"){
            setForklift("yes")
        } else {
            setForklift("no")
        }
    }

    return (
        <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" id="box">
            <h2>Sign Up</h2>
            <Form>
                <Form.Group className="row">
                <Form.Label className="col-4 lbl">NO.</Form.Label>
                    <Form.Control className="input" type="number" placeholder="Worker Number" onChange={handleChange} />
                    <div className="col-5"></div>
                    <Form.Label className="errLbl">{numLbl}</Form.Label>
                </Form.Group>
                <Form.Group className="row">
                <Form.Label className="col-4 lbl">FullName</Form.Label>
                    <Form.Control className="input" type="text" placeholder="Worker Name" onChange={handleNChange} />
                    <div className="col-3"></div>
                    <Form.Label className="errLbl">{txtLbl}</Form.Label>
                </Form.Group>
                <div className="row">
                <Form.Label className="col-4">Forklift truck</Form.Label>
                <Form.Group className="row radio" onChange={radioChange}>
                    <div className="col-2"></div>
                <Form.Check
          type="radio"
          label="yes"
          name="formHorizontalRadios"
          value="yes"
          id="formHorizontalRadios1"
        />
        <div className="col-1"></div>
        <Form.Check
          type="radio"
          label="no"
          name="formHorizontalRadios"
          value="no"
          id="formHorizontalRadios2" defaultChecked
        />
                </Form.Group>
                </div>
                </Form>
            <Link to='/'><button className="btn2" onClick={handleCreate}>Create</button></Link>
          </div>
        </div>
      </div>
    );
}

export default Signup;