import React from 'react';
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
  // const [data, setData]=useState("");

  // // const getData=async()=>{
  // //   const response=await axios.get("http://localhost:3001/getData");
  // //   console.log(response.data);
  // //   setData(response.data)
  // // }

  // // useEffect(()=>{
  // //   getData()
  // // }, []);
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
      <Footer/>
    </>
  );
};

export default Homepage;
