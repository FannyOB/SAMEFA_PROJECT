import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';
import Ngo from '../../pages/Ngo';  

const Card = ({ title, description, image }) => {

  return (
    <div className="card">
      <Link to="/ngo">
      <div className="card-content"> 
        <h2 className="card-title">Card</h2>
        <p className="card-description">{description}</p>
      </div>
      </Link>
      
      <Link to="/ngo">
      <div className="card-content">
        <h2 className="card-title">Card</h2>
        <p className="card-description">{description}</p>
      </div>
      </Link>
    </div>

    
  );
};

export default Card;
