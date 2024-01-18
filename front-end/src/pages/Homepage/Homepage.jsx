import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {AssociationList} from '../../components/Association';
import Header from '../../components/Header/Header';
import ComponentBanner from '../../components/ComponentBanner/ComponentBanner';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import HomepageImg from '../../assets/img/homepage_img.png';
import './Homepage.scss'
import Categories from '../../components/Categories/Categories';

const Homepage = () => {

  //connection front-end to back-end
  const [data, setData]=useState("");
  const [ngos, setNgos] = useState([]);

  const getData=async()=>{
    const response=await axios.get("http://localhost:3000/getData");
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  }, []);

  //-------------
  //Fonction pour récupérer la liste dans le front

  const getAllNgos = async () => {
    const response = await axios.get("http://localhost:3000/ngos");
    console.log(response.data);
  };

  useEffect(()=> {
    getAllNgos()
  }, []);

  return (
    <>
      <Header/>
      <ComponentBanner
      title='Boost Your Engagement'
      image={HomepageImg}>
      </ComponentBanner>
      <SearchBar/>
      <AssociationList shouldSlice={false} className='asso-list' />
      <Categories/>
      <div>{data}</div>
      <Footer/>
    </>
  );
};

export default Homepage;
