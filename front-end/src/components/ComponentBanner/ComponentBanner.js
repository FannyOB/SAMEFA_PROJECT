import React from 'react';
import "./ComponentBanner.scss";

const ComponentBanner = ({title,image}) => {
    return (
        <div className='componentBannerWrapper'>
            <div className='componentBannerTitle'>
                <h1>{title}</h1>
            </div>
            <img src={image} alt="bannerImage"></img> 
        </div>
    );
};

export default ComponentBanner;