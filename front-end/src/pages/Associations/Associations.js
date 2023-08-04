import React from 'react';
import Header from '../../components/Header/Header';
import AssociationList from '../../components/AssociationList/AssociationList';
import './Associations.css'
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import AssociationImg from '../../assets/img/associations_img.jpg';

const Associations = () =>{
    return(
        <div>
            <Header/>
            <ComponentBanner 
            title="All Associations"
            image={AssociationImg}
            />
            <h1>Assocations page in progress</h1> 
            <AssociationList/>
        </div>
    )  
}

export default Associations