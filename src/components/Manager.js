import React from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';

function Manager(props) {    

    return (
        <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" id="box">
            <h2>Manager</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>No.</th>
      <th>Full Name</th>
      <th>Counter</th>
      <th>Number Of Products</th>
    </tr>
  </thead>
  <tbody>
  {props.workers.map((element,i)=>{
      let c = 5-(element.products.length);
    if(i === 0){
        c = '';
    }
          return  <tr key={i}>
              <td>{element.number}</td>
              <td>{element.name}</td>
              <td>{element.counter}</td>
              <td>{c}</td>
          </tr>
        })}
  </tbody>
</Table>
<Link to='/'><button className="btn2">Log Out</button></Link>
          </div>
        </div>
      </div>
    );
}

export default Manager;