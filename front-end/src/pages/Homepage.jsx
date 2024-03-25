// composant Homepage
import { React, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import AssociationList from '../components/AssociationList.jsx';
import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import HomepageImg from '../assets/img/homepage_img.png';
import '../styles/pages/Homepage.scss';
import ButtonAction from '../components/ButtonAction.jsx';
import Modal from '../components/Modal.jsx';

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Header />
      <Banner title="Your Values, Your Impact" image={HomepageImg}></Banner>
      <div className="add-button">
        <ButtonAction
          type="secondary"
          style={{ width: '100px' }}
          onClick={toggleModal}
        >
          <IoIosAddCircleOutline />
          Add ngos
        </ButtonAction>
      </div>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal} />
      <AssociationList shouldSlice={false} className="asso-list" />
      <Footer />
    </>
  );
};

export default Homepage;
