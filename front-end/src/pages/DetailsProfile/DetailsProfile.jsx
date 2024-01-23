import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./DetailsProfile.scss";
import Header from '../../components/Header/Header';
//import { assoList  } from '../../data/AssoList';
import { useParams } from 'react-router-dom';

const DetailsProfile = () => {

    const { id } = useParams();
    const [selectNgosId, setSelectNgosId] = useState(null);
    // const selectedAssociation = assoList.find(association => association.id === parseInt(id));

    // Fonction pour récupérer les données d'une association pour son ID
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

    if (!selectNgosId) {
      return <div> Erreur : cette association n'existe pas</div>;
    }
  
    const { name, description, cover } = selectNgosId;
    return (
        <>
        <Header/>
            <div className="product">
                <div className="left">
                    <div className="image">
                        <img src={cover} alt=""/>
                    </div>
                </div>
                <div className="right">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default DetailsProfile