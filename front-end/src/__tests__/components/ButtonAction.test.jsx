import React from 'react';
import { render, screen } from '@testing-library/react'; // Ces fonctions vous permettent de rendre vos composants React dans un environnement de test simulé et de rechercher des éléments dans le rendu pour effectuer des assertions.
import ButtonAction from '../../components/ButtonAction.jsx';

// premier test si ButtonAction rend correctement un bouton de type "primary"
test('renders primary button correctly', () => {
  render(<ButtonAction type="primary">Primary Button</ButtonAction>); // je rends ButtonAction avec des propriétés spécifiques, c'est le rendu de ce composant;
  const buttonElement = screen.getByText('Primary Button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('primary-btn');
});

// premier test si ButtonAction rend correctement un bouton de type "secondary"
test('renders secondary button correctly', () => {
  render(<ButtonAction type="secondary">Secondary Button</ButtonAction>);
  const buttonElement = screen.getByText('Secondary Button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('secondary-btn');
});
