import React, { useState } from 'react';
import '../styles/components/Modal.scss';
import FormInput from '../components/FormInput';
import logo from '../assets/img/Logo.png'


const Modal = ({modalOpen, toggleModal})=> {

    if(modalOpen){
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

     return (
        <>
        {modalOpen && (
               <div className='modal'>
            <div className="overlay"></div>
            <div className="modal-content">
                <form>
                    <img src={logo} alt="samefalogo" />
                        <h3>It's time to add new friends</h3>
                        <FormInput label='Title'
                         placeholder='title'
                        />
                        <FormInput label='Description'
                        placeholder='description'
                        />
                        <FormInput label='Creation date'
                            placeholder='creation date'
                        />
                        <FormInput
                        label='Image'
                        type='file'
                        accept="image/png, image/jpeg"/>
                </form>
              
                <button className='close-modal' onClick={toggleModal}>CLOSE</button>
            </div>
        </div>
        )}
        </>
    );
};

export default Modal;