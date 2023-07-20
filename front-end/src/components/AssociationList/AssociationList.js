import React from 'react';
import './AssociationList.css'
import AssociationItem from '../AssociationItem/AssociationItem'; 
import {assoList} from '../../data/AssoList'

const AssociationList = ({shouldSlice}) => { // ajout d'une props au composant AssociationList
  const renderedList= shouldSlice ? assoList.slice(0,4) : assoList;// besoin d'utiliser la list d'association de deux façons, une dans son entierté et une autre en affichant seulement les 4 premiers éléments. Ici la const sliceAssoList stocke une condition ternaire: si c'est true ( shouldSlice = true) alors c'est assoList.slice(0,4) qui s'exécute, sinon (shouldSlice = false)c'est la liste complète qui s'affiche.

  return (
    <ul className='smf-asso-list'>
      {renderedList.map(({id,name, cover}) =>(
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
