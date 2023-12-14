import React from 'react';
import ComponentProfile from '../../ComponentProfile/ComponentProfile';
import { assoList } from '../../../data/AssoList';

const AssociationProfile = () => {
    return (
        <>
        {assoList.map(({image,title, description}, index) => (
          <ComponentProfile
          image={Alba}
          title='Alba'
          description='Très belle association'
          />
        ))}
        </>
    );
};

export default AssociationProfile;