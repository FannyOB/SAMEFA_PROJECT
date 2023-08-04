import React from 'react';
import Header from '../../components/Header/Header'
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import aboutUs from '../../assets/img/aboutus_img.png';

const AboutUs = () => {
    return (
        <div>
            <Header/>
            <ComponentBanner 
            title="About us"
            image={aboutUs}
            />
            <h1>About us in progress</h1>
        </div>
    );
};

export default AboutUs;