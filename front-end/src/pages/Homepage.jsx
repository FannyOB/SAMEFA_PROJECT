// composant Homepage
import {React, useState} from 'react';
import AssociationList from '../components/AssociationList';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import HomepageImg from '../assets/img/homepage_img.png';
import '../styles/pages/Homepage.scss'
import ButtonAction from '../components/ButtonAction';
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from '../components/Modal';

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () =>{
    setModalOpen(!modalOpen)
  }


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
      <Banner
        title='Your Values, Your Impact '
        image={HomepageImg}>
      </Banner>
      <div className='add-button'>
        <SearchBar/>
        <ButtonAction 
          type='secondary'  
          style={{width:"100px"}} 
          onClick={toggleModal}><IoIosAddCircleOutline/>
        Add ngos
        </ButtonAction>
      </div>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal}/>
      <AssociationList shouldSlice={false} className='asso-list' />
      <Footer/>
    </>
  );
};

export default Homepage;
