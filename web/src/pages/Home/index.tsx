import React from 'react';

import LoginSignUp from '../../components/LoginSignUp';

import './styles.css';

function HomePage() {
  
  return (
    <div id="home-page">
      <LoginSignUp title="Fazer login" buttonText="Entrar" login={true} />
    </div>
  )
}

export default HomePage;