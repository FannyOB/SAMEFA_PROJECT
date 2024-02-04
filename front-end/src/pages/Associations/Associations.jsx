import React from 'react';
import Header from '../../components/Header';
import AssociationList from '../../components/AssociationList';
import './Associations.scss'
import ComponentBanner from '../../components/ComponentBanner';
import AssociationImg from '../../assets/img/associations_img.jpg';
import SearchBar from '../../components/SearchBar';

const Associations = () =>{
    return(
        <>
            <Header/>
                <ComponentBanner 
                    title="All Associations"
                    image={AssociationImg}
                />
                <SearchBar/>
                <h1>Assocations page in progress</h1> 
                <AssociationList />
        </>
    )  
}

export default Associations