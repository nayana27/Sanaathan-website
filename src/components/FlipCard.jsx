import React from 'react';
import '../styles/main.css';

const FlipCard = ({ title, content, image }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img 
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            alt={title}
            onError={(e) => {
              e.target.src = `${process.env.PUBLIC_URL}/images/default.jpg`;
            }}
          />
          <h3>{title}</h3>
        </div>
        <div className="flip-card-back">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;