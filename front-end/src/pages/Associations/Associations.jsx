import {React, useState} from 'react';
import Header from '../../components/Header/Header';
import {AssociationList} from '../../components/Association';
import './Associations.scss'
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import AssociationImg from '../../assets/img/associations_img.jpg';
import SearchBar from '../../components/SearchBar/SearchBar';
import ComponentProfile from '../../components/ComponentProfile/ComponentProfile';

const Associations = () =>{
    const [searchQuery, setSearchQuery] = useState("");
    
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
            <ComponentProfile 
            title="Alba"
            image={AssociationImg}/>
        </>
    )  
}

export default Associations