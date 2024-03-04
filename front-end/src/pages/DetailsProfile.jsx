import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/pages/DetailsProfile.scss";
import Header from '../components/Header';
//import { assoList  } from '../../data/AssoList';
import { useParams } from 'react-router-dom';
import ButtonAction from '../components/ButtonAction';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const DetailsProfile = () => {
    const { id } = useParams();
    const [selectNgosId, setSelectNgosId] = useState(null);

    // Fonction pour récupérer les données d'une association pour son ID via la mock
    const getNgoId = async () =>{
        try{
            const response = await axios.get(`http://localhost:3001/ngos/${id}`);
            setSelectNgosId(response.data);
        } catch (error) {
            console.error ('Erreur lors de la récupération des données');
        }
    };
    
    useEffect(() => {
        getNgoId();
    });

    if (!selectNgosId) {//ici condition, pour gérer l'erreur
      return <div> Erreur : cette association n'existe pas</div>;
    }
  
    const { name, description, photo_url, categories,website,mapUrl } = selectNgosId; // déstructuration des props c-à-d que selectNgosId doit avec ses propriètés
    return (
        <>
        <Header/>
            <div className="product">
                <div className="left">
                    {/* <div className="image"> */}
                        <img src={photo_url} alt="photo_url"/>
                    {/* </div> */}
                    <fieldset className="social-links">
                        <legend>LIENS UTILES</legend>
                        <a 
                         href={website} 
                         target="_blank" 
                         rel="noopener noreferrer">
                            <MdOutlineWeb size="30px"/>
                        </a>
                    </fieldset>
                </div>
                <div className="right">
                    <div className="right-tags">
                        {categories.map((category, index) => (
                            <div key={index} className="right-tag">
                                {category}
                            </div>
                        ))}
                    </div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="donation">
                        <ButtonAction 
                        type="primary" 
                        style={{width:"45%", backgroundColor:"rgba(240,72,72, 70%)"}}
                        className="donate-button">
                            Faire un don
                        </ButtonAction>
                        <span>Ajouter aux favoris <FaRegHeart size="20px"/></span>
                    </div>
                    <div className="google-map">
                        <h2>Location</h2>
                        <iframe
                        src={mapUrl}
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation de l'association"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsProfile