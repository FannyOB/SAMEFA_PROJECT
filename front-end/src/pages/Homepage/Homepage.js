import React from 'react';
import AssociationList from '../../components/AssociationList/AssociationList';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <AssociationList shouldSlice={true} /> 
      <Footer/>
    </div>
  );
};

export default Homepage;
