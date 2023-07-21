import React from 'react';
import Header from '../../components/Header/Header';
import AssociationList from '../../components/AssociationList/AssociationList';
import './Associations.css'

const Associations = ({id, name, cover}) =>{
    return(
        <div>
            <Header/>
            <h1>Assocations page in progress</h1> 
            <AssociationList/>
        </div>
    )  
}

export default Associations