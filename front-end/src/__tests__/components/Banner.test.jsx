import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../../components/Banner.jsx';

test('renders banner with correct title and image', () => {
  const title = 'Test Banner';
  const image = 'test.jpg';

  render(<Banner title={title} image={image} />);

  // Je vérifie si le titre est rendu correctement
  const titleElement = screen.getByText('Test Banner');
  expect(titleElement).toBeInTheDocument();

  // je vérifie si l'image est rendue correctement avec l'attribut alt approprié
  const imageElement = screen.getByAltText('bannerImage');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'test.jpg');
});

test('renders banner with incorrect title and image', () => {
  const title = 'Incorrect Banner Title';
  const image = 'incorrect.jpg';

  render(<Banner title={title} image={image} />);

  // Je vérifie si le titre est rendu correctement
  const titleElement = screen.getByText('Test Banner');
  expect(titleElement).toBeInTheDocument(); // Cette assertion échouera car le titre attendu est différent

  // je vérifie si l'image est rendue correctement avec l'attribut alt approprié
  const imageElement = screen.getByAltText('bannerImage');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'test.jpg'); // Cette assertion échouera car l'image attendue est différente
});
