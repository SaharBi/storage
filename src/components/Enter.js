import React from 'react';
import {Link} from 'react-router-dom';

function Enter(props) {
    return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4" id="box">
          <h2>Logistics Management</h2>
          <Link to="/signup"><div><button className="btn">Sign Up</button></div></Link>
          <Link to="/login"><button className="btn">Log In</button></Link>
        </div>
      </div>
    </div>
    );
}

export default Enter;