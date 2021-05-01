import React from 'react';
import './cardcss.css';


const Card = ({image, name, designation, location}) => {
    return (
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={name} />
        </div>
        <div className="ColDetail">
          <div className="Header">
            <div className="Bookname">{name}</div>
          </div>
          <div className="Description">{designation}</div>
          <div className="Description">{location}</div>
        </div>
      </div>
    );
  };

export default Card;