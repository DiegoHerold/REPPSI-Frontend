import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import ProtectedRoutes from './Routes/ProtectedRoutes'
import PrivateRoute from './components/RotaPrivada/RotaPrivada'
//Caminhos da Pages
import Home from './Pages/Home';
import Consultas from './Pages/Consultas';
import Feed from './Pages/Feed';
import PerfilCliente from './Pages/PerfilCliente';
import PerfilPsicologo from './Pages/PerfilPsicologo';
import SettingPage from './Pages/Configuracao';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import { getTheme } from './theme';


const App= () => {
  const [theme, setTheme] = useState(getTheme('violet'));

  const handleThemeChange = (newTheme) => {
    setTheme(getTheme(newTheme));
  };

  return (
      <Router>
        <Routes>
          {/* Rotas públicas*/}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          
          {/* Rotas protegidas */}
         
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <Home />
                </PrivateRoute>
            } 
          />
          <Route 
            path="/perfil/cliente" 
            element={
              <PrivateRoute>
                    <PerfilCliente />
                </PrivateRoute>
            } 
          />
          
          <Route 
            path="/perfil/psicologo" 
            element={
              <PrivateRoute>
                    <PerfilPsicologo />
                </PrivateRoute>
            } 
          />
          <Route 
            path="/consultas" 
            element={
              <PrivateRoute>
                  <Consultas />
                  </PrivateRoute>
            } 
          />
          <Route 
            path="/feed" 
            element={
              <PrivateRoute>
                    <Feed />
                </PrivateRoute>
            } 
          />
          <Route 
            path="/configuracao" 
            element={
                <PrivateRoute>
                    <SettingPage onChangeTheme={handleThemeChange} />
                  </PrivateRoute>
            } 
          />
          
          {/* Página inicial pública */}
          {/* <Route path="/" element={<Home />} /> */}
        
        </Routes>
      </Router>
  );
};

export default App;
