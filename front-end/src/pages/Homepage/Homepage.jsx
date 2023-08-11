import React from 'react';
import { Link } from 'react-router-dom';
import AssociationList from '../../components/AssociationList/AssociationList';
import Header from '../../components/Header/Header';
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import HomepageImg from '../../assets/img/homepage_img.png';
import {BsArrowRight} from 'react-icons/bs';
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
      <AssociationList shouldSlice={true} className='asso-list' /> 
        <Link 
        to="/associations"  
        className='homepage-link'> 
          <BsArrowRight/> 
          See more
        </Link>
      <Footer/>
    </>
  );
};

export default Homepage;
