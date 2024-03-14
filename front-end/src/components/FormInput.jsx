// composant input repris dans les formulaires
import React from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import '../styles/components/FormInput.scss';

const FormInput = ({ label, placeholder, type, value, onChange, id, name }) => {
  // ici condition qui va permettre d'affiche une icone selon son label
  let icon = null;
  if (label === 'Email') {
    icon = <AiOutlineMail />;
  } else if (label === 'Password') {
    icon = <AiOutlineLock />;
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
