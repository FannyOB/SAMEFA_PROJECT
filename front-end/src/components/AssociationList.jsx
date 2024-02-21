import React, {useEffect,useState} from 'react';
import axios from 'axios';
import '../styles/components/AssociationList.scss'
import AssociationCard from './AssociationCard';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";


const AssociationList = ({shouldSlice},{item}) => { // ajout d'une props au composant AssociationList
  const [ngos, setNgos] = useState([]);

  //Fonction pour récupérer la liste des associations
  const getAllNgos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/ngos");
      // console.log(response.data);
      setNgos(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données')
    }
  };
  
  useEffect(()=> {
    getAllNgos()
  }, []);

  const renderedList= shouldSlice ? ngos.slice(0,4) : ngos;// besoin d'utiliser la liste d'association de deux façons, une dans son entiereté et une autre en affichant seulement les 4 premiers éléments. Ici la const sliceAssoList stocke une condition ternaire: si c'est true ( shouldSlice = true) alors c'est assoList.slice(0,4) qui s'exécute, sinon (shouldSlice = false)c'est la liste complète qui s'affiche.
  return (
    <>
      <ul className='asso-list'>
        {renderedList.map(({id,name, cover}) =>(
          <div className='asso-item-wrapper'>
            <span><FaRegHeart /></span>
              <Link to={`/details/${id}`} key={id} className='link-no-underline'>
                <AssociationCard
                  key={id}
                  name={name} 
                  cover={cover}
                />
              </Link>
              <div className="icon-buttons">
                <button className="edit-button"><MdEdit /></button>
                <button className="delete-button"><RiDeleteBin6Fill/></button>
              </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default AssociationList;
