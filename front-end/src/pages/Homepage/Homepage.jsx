import React from 'react';
import {AssociationList} from '../../components/Association';
import Header from '../../components/Header/Header';
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import HomepageImg from '../../assets/img/homepage_img.png';
import './Homepage.scss'

const Homepage = () => {
  return (
    <>
      <Header/>
      <ComponentBanner
      title='Boost Your Engagement'
      image={HomepageImg}>
      </ComponentBanner>
      <SearchBar/>
      <AssociationList shouldSlice={false} className='asso-list' /> 
      <Footer/>
    </>
  );
};

export default Homepage;
