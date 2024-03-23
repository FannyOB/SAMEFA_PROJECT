// composant input repris dans les formulaires
import React from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';
import { CiCalendarDate, CiLocationOn, CiImageOn } from 'react-icons/ci';
import '../styles/components/FormInput.scss';

const FormInput = ({ label, placeholder, type, value, onChange, id, name }) => {
  // ici condition qui va permettre d'affiche une icone selon son label
  let icon;
  switch (label) {
    case 'Email':
      icon = <AiOutlineMail />;
      break;
    case 'Password':
      icon = <AiOutlineLock />;
      break;
    case 'Name':
      icon = <AiOutlineUser />;
      break;
    case 'Description':
      icon = <IoDocumentTextOutline />;
      break;
    case 'Categories':
      icon = <BiCategory />;
      break;
    case 'Date':
      icon = <CiCalendarDate />;
      break;
    case 'Location':
      icon = <CiLocationOn />;
      break;
    case 'Image':
      icon = <CiImageOn />;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div className="form-group">
      {icon}
      <label className="label-with-icon" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-field"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
      />
    </div>
  );
};

export default FormInput;
