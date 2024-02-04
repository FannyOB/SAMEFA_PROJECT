import React from 'react';
import '../styles/components/AssociationItem.scss'

const   AssociationItem = ({id, name, cover}) => {
    return (
            <ul>
                <li key={id} className='smf-asso-item' >
                <img className='smf-asso-item-cover' src={cover} alt={`${name} cover`} />
                <h2>{name}</h2>
                </li> 
            </ul>
    );
};

export default AssociationItem;