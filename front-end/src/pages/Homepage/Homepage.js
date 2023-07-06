import React from 'react';
import AssociationList from '../../components/AssociationList/AssociationList';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <AssociationList />
    </div>
  );
};

export default Homepage;
