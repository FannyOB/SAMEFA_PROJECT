import React from 'react';
import './AssociationList.css'
import Ngo from '../../pages/Ngo/Ngo'; 
import {assoList} from '../../data/AssoList'

const AssociationList = () => {
  return (
    <ul className='smf-asso-list'>
      {assoList.map(({id,name, cover}) =>(
        <Ngo
        id={id}
        name={name}
        cover={cover}
        />
      ))}
    </ul>
  );
};

export default AssociationList;
