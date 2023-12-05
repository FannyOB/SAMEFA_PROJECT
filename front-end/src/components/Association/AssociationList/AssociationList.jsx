import React from 'react';
import './AssociationList.scss'
import AssociationItem from '../AssociationItem/AssociationItem';
import HeartButton from '../../HeartButton/HeartButton';
import DetailsProfile from '../../../pages/DetailsProfile/DetailsProfile';
import {assoList} from '../../../data/AssoList';
import { Link } from 'react-router-dom';

const AssociationList = ({shouldSlice},{item}) => { // ajout d'une props au composant AssociationList
  const renderedList= shouldSlice ? assoList.slice(0,4) : assoList;// besoin d'utiliser la list d'association de deux façons, une dans son entiereté et une autre en affichant seulement les 4 premiers éléments. Ici la const sliceAssoList stocke une condition ternaire: si c'est true ( shouldSlice = true) alors c'est assoList.slice(0,4) qui s'exécute, sinon (shouldSlice = false)c'est la liste complète qui s'affiche.
  return (
    <>
      <ul className='asso-list'>
        {renderedList.map(({id,name, cover}) =>(
          <div className='asso-item-wrapper'>
              <span>NEW</span>
              <Link to={`/DetailsProfile/${id}`} key={id} className='link-no-underline'>
                <AssociationItem
                  key={id}
                  name={name} 
                  cover={cover}
                />
          </Link>
              {/* <HeartButton/> */}
            </div>
        ))}
      </ul>
    </>
  );
};

export default AssociationList;
