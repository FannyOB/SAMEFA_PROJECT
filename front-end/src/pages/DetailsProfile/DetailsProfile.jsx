import React from 'react';
import "./DetailsProfile.scss";
import { assoList  } from '../../data/AssoList';

const DetailsProfile = () => {
    
    return (
        <div className="product">
            <div className="left">
                <div className="image">
                    <img src={assoList.cover} alt=""/>
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <p>description</p>
            </div>
        </div>
    )
}

export default DetailsProfile