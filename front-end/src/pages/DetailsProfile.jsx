import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/pages/DetailsProfile.scss';
import { useParams } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';
import Header from '../components/Header.jsx';
import ButtonAction from '../components/ButtonAction.jsx';

const DetailsProfile = () => {
  const { id } = useParams();
  const [associationId, setAssociationId] = useState(null);

  // Fonction pour récupérer les données d'une association pour son ID via la mock
  const getNgoId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/associations/${id}`,
      );
      setAssociationId(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données');
    }
  };

  useEffect(() => {
    getNgoId();
  }, [id]); // alerte concernant la dépendance mais n'empêche pas l'affichage (il permet d'arrêter de boucler)

  if (!associationId) {
    // ici condition, pour gérer l'erreur
    return <div> Erreur : cette association n'existe pas</div>;
  }

  const { photo_url, category, website, location } = associationId; // déstructuration des props c-à-d que associationId doit avec ses propriètés
  return (
    <>
      <Header />
      <div className="product">
        <div className="left">
          {/* <div className="image"> */}
          <img src={photo_url} alt="photo_url" />
          {/* </div> */}
          <fieldset className="social-links">
            <legend>LIENS UTILES</legend>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <MdOutlineWeb size="30px" />
            </a>
          </fieldset>
        </div>
        <div className="right">
          <div className="right-tags">
            {category.split(',').map((cat, index) => (
              <div key={index} className="right-tag">
                {cat}
              </div>
            ))}
          </div>
          <h1>{associationId.ngo_name}</h1>
          <p>{associationId.description_ong}</p>
          <div className="donation">
            <ButtonAction
              type="primary"
              style={{ width: '45%', backgroundColor: 'rgba(240,72,72, 70%)' }}
              className="donate-button"
            >
              Faire un don
            </ButtonAction>
            <span>
              Ajouter aux favoris <FaRegHeart size="20px" />
            </span>
          </div>
          <div className="google-map">
            <h2>Location</h2>
            <iframe
              src={location}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de l'association"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProfile;
