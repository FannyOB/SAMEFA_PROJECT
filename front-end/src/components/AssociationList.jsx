//composant qui va affiche la liste des associations
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
  //Fonction pour récupérer la liste des associations via le mock
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

  const renderedList= shouldSlice ? ngos.slice(0,4) : ngos;// besoin d'utiliser la liste d'association de deux façons, une dans son entiereté et une autre en affichant seulement les 4 premiers éléments. Ici la const renderedList stocke une condition ternaire: si c'est true ( shouldSlice = true) alors c'est ngos.slice(0,4) qui s'exécute, sinon (shouldSlice = false)c'est la liste complète qui s'affiche donc ngos
  return (
    <>
      <ul className='asso-list'>
        {renderedList.map(({id,name, photo_url, categories}) =>(// ici on va mapper sur la liste
          <div className='asso-item-wrapper'key={id}>
            <span><FaRegHeart /></span>
              <Link to={`/details/${id}`} className='link-no-underline'>
                <AssociationCard
                  key={id}
                  name={name} 
                  photo_url={photo_url}
                  categories={categories}
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
