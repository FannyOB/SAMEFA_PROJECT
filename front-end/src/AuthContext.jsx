// Importation des hooks pour la création et l'utilisation d'un contexte d'authentification.
import React, { createContext, useContext, useState } from 'react';
// Création d'un nouveau contexte d'authentification. Ce contexte sera utilisé pour partager l'état d'authentification et les fonctions associées dans toute votre application.
const AuthContext = createContext();
// Création d'un hook personnalisé pour utiliser le contexte d'authentification. Il permet d'accéder facilement au contexte d'authentification depuis n'importe quel composant de votre application sans avoir à utiliser le Consumer du contexte directement.
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Utilisation du hook useState pour gérer l'état d'authentification. Par défaut, l'utilisateur n'est pas authentifié (false).
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fonction pour permettre la connexion de l'utilisateur. Elle met à jour l'état isAuthenticated à true, indiquant que l'utilisateur est désormais authentifié.
  const login = () => {
    setIsAuthenticated(true);
  };

  const signup = () => {
    setIsAuthenticated(true);
  };

  // Fonction pour gérer la déconnexion de l'utilisateur. Elle met à jour l'état isAuthenticated à false et supprime également le token stocké dans le localStorage, assurant ainsi que l'utilisateur est complètement déconnecté.
  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('token'); // Cette ligne supprime le token du localStorage
  };

  const loginAdmin = () => {
    setIsAuthenticated(true);
    setIsAdmin(true);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, login, signup, logout, loginAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
