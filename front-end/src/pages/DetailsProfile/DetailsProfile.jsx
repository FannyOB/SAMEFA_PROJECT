import React from 'react';
import "./DetailsProfile.scss";
import Header from '../../components/Header/Header';
import { assoList  } from '../../data/AssoList';
import { useParams } from 'react-router-dom';

const DetailsProfile = () => {

    const { id } = useParams();
    const selectedAssociation = assoList.find(association => association.id === parseInt(id));

    if (!selectedAssociation) {
      return <div>Cette association n'existe pas</div>;
    }
  
    const { name, description, cover } = selectedAssociation;
  
    
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