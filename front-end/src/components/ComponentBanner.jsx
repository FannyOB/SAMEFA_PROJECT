import React from 'react';
import "../styles/components/ComponentBanner.scss";

const ComponentBanner = ({title,image}) => {
    return (
        <div className='component-banner-wrapper'>
            <div className='component-banner-title'>
                <h1>{title}</h1>
            </div>
            <img src={image} alt="bannerImage"></img> 
        </div>
    );
};

export default ComponentBanner;