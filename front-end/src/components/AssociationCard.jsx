// composant qui va permettre d'afficher une garde selon ses propriètés. Il sera repris dans AssociationList
import React from 'react';
import '../styles/components/AssociationICard.scss';

const AssociationCard = ({ id, name, photo_url, categories }) => (
  <ul>
    <li key={id} className="smf-asso-item">
      <img
        className="smf-asso-item-img"
        src={photo_url}
        alt={`${name} photo_url`}
      />
      <h2>{name}</h2>
      <div className="smf-asso-tags">
        {categories.map((category, index) => (
          <div key={index} className="smf-asso-tag">
            {category}
          </div>
        ))}
      </div>
    </li>
  </ul>
);

export default AssociationCard;
