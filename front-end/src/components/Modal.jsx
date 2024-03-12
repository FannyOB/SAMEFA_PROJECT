// composant modal pour afficher le formulaire d'enregistrement d'une association
import React, { useState } from 'react';
import '../styles/components/Modal.scss';
import { IoClose } from 'react-icons/io5';
import FormInput from './FormInput.jsx';
import ButtonAction from './ButtonAction.jsx';

const Modal = ({ modalOpen, toggleModal }) => {
  // ici l'état initial du formulaire
  const [ngo, setNgo] = useState({
    name: '',
    description: '',
    categories: '',
    creationDate: '',
    coverImage: '',
    location: '',
  });
  // Fonction pour mettre à jour l'état du formulaire, elle permet de gérer dynamiquement les modifications des champs de saisie du formulaire et de maintenir à jour l'état du formulaire en fonction des actions de l'utilisateur.
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Name:', name, 'Value:', value);
    setNgo({ ...ngo, [name]: value });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ngo);
    // Pour réinitialiser le formulaire après soumission
    setNgo({
      name: '',
      description: '',
      categories: '',
      creationDate: '',
      coverImage: '',
      location: '',
    });

    // pour pouvoir fermer le modal après soumission
    toggleModal();
  };

  // ici condition qui gère l'ouverture et la fermeture du modal
  if (modalOpen) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {modalOpen && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>It's time to add new friends</h2>
              <FormInput
                label="Name"
                placeholder="Enter ngo's name"
                type="text"
                value={ngo.name}
                onChange={handleChange}
                name="name"
              />
              <FormInput
                label="Description"
                placeholder="Enter ngo's description"
                type="textarea"
                value={ngo.description}
                onChange={handleChange}
                name="description"
              />
              <FormInput
                label="Catégories"
                placeholder="Enter ngo's categories"
                type="text"
                list="categories list"
                value={ngo.categories}
                onChange={handleChange}
                name="categories"
              />
              <FormInput
                label="Creation date"
                type="date"
                value={ngo.creationDate}
                onChange={handleChange}
                name="creation date"
              />
              <FormInput
                label="Image cover"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChange}
                name="coverImage"
              />
              <FormInput
                label="Location"
                placeholder="Enter location"
                value={ngo.location}
                onChange={handleChange}
                name="location"
              />
              <ButtonAction
                type="primary"
                style={{ backgroundColor: 'rgb(6, 150, 135)' }}
              >
                Submit
              </ButtonAction>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
