//composant qui va permettre d'afficher la bannière selon ses propriètées. Il sera repris dans les pages Homepage et AboutUs
import React from 'react';
import "../styles/components/Banner.scss";

const Banner = ({title,image}) => {
    return (
        <div className='component-banner-wrapper'>
            <div className='component-banner-title'>
                <h1>{title}</h1>
            </div>
            <img src={image} alt="bannerImage"></img> 
        </div>
    );
};

export default Banner;