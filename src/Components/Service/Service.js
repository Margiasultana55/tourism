import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, price, picture, description } = service;
    return (
        <div className="service pb-3 mb-5 mt-5 ">
            <img src={picture} alt="" />
            <h3 className='mt-3 text-primary fw-bold mb-3'>{name}</h3>
            <p className='mt-1 descrip px-4'>{description.slice(0, 40)}... </p>
            <h5>BDT, {price}</h5>

            <Link to={`/booking/${_id}`}>
                <button className="btn my-btnn mt-2">Book now</button>
            </Link>
        </div>
    );
};

export default Service;