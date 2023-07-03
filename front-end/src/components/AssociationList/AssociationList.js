import React from 'react';
import './AssociationList.css'
import AssociationItem from '../AssociationItem/AssociationItem'; 
import {assoList} from '../../data/AssoList'

const AssociationList = () => {
  return (
    <ul className='smf-asso-list'>
      {assoList.map(({id,name, cover}) =>(
        <AssociationItem
        id={id}
        name={name}
        cover={cover}
        />
      ))}
    </ul>
  );
};

export default AssociationList;
