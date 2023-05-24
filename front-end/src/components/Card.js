import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="Card" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
