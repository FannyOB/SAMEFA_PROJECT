// Composant AboutUs à faire. Il reprend le composant Banner
import React from 'react';
import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import aboutUs from '../assets/img/aboutus_img.png';

const AboutUs = () => (
  <div>
    <Header />
    <Banner title="About us" image={aboutUs} />
    <h1>About us in progress</h1>
  </div>
);

export default AboutUs;
