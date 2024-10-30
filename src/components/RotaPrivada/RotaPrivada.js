import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');

  // Se não houver token, redirecionar para a página de login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Se houver token, renderiza a rota protegida
  return children;
};

export default PrivateRoute;