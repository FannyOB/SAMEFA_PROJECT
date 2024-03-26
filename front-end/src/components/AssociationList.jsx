// composant qui va affiche la liste des associations
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/components/AssociationList.scss';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import AssociationCard from './AssociationCard.jsx';
import { useAuth } from '../AuthContext.jsx';

const BACKEND_URL = 'http://192.168.7.135:3001';

const AssociationList = ({ shouldSlice, item }) => {
  const { isAdmin } = useAuth();
  // ajout d'une props au composant AssociationList
  const [ngos, setNgos] = useState([]);
  // Fonction pour récupérer la liste des associations via le mock
  const getAllNgos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/associations`);
      // console.log(response.data);
      setNgos(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données');
    }
  };

  useEffect(() => {
    getAllNgos();
  }, []);

  const renderedList = shouldSlice ? ngos.slice(0, 4) : ngos; // besoin d'utiliser la liste d'association de deux façons,
  // une dans son entiereté et une autre en affichant seulement les 4 premiers éléments.
  // Ici la const sliceAssoList stocke une condition ternaire: si c'est true ( shouldSlice = true)
  // alors c'est assoList.slice(0,4) qui s'exécute, sinon (shouldSlice = false)c'est la liste complète qui s'affiche.
  return (
    <ul className="asso-list">
      {Array.isArray(renderedList) &&
        renderedList.map(
          (
            association, // ici on va mapper sur la liste
          ) => (
            <div className="asso-item-wrapper" key={association.ngo_id}>
              <span>
                <FaRegHeart />
              </span>
              <Link
                to={`/details/${association.ngo_id}`}
                className="link-no-underline"
              >
                <AssociationCard
                  key={association.ngo_id}
                  name={association.ngo_name}
                  photo_url={association.photo_url}
                  categories={association.category
                    .split(',')
                    .map((category) => category.trim())}
                />
              </Link>
              <div className="icon-buttons">
                {isAdmin && (
                  <>
                    <button type="button" className="edit-button">
                      <MdEdit />
                    </button>
                    <button type="button" className="delete-button">
                      <RiDeleteBin6Fill />
                    </button>
                  </>
                )}
              </div>
            </div>
          ),
        )}
    </ul>
  );
};

export default AssociationList;
