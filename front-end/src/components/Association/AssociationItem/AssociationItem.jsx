import React from 'react';
import './AssociationItem.scss'

const AssociationItem = ({id, name, cover}) => {
    return (
        <ul>
            <li key={id} className='smf-asso-item'>
            <img className='smf-asso-item-cover' src={cover} alt={`${name} cover`} />
            {name}
        </li> 
    </ul>
    );
};

export default AssociationItem;