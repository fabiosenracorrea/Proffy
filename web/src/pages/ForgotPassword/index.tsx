import React from 'react';
import LoginSignUp from '../../components/LoginSignUp';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function ForgotPassword() {
  return (
    <div id="forgot-password">
      <div className="back-link">
        <Link to="/home">
          <img src={backIcon} alt="Voltar"/>
        </Link>
      </div>
      <LoginSignUp
        title="Eita, esqueceu sua senha?"
        description="Não esquenta, vamos dar um jeito nisso."
        buttonText="Enviar"
        setEmail={() => console.log(`hey`)}
        setPassword={() => console.log(`hey`)}
        submitFunc={async () => console.log(`hey`)}
      />
    </div>
  )
}

export default ForgotPassword;