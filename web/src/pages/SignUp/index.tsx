import React from 'react';

import LoginSignUp from '../../components/LoginSignUp';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';
import { Link } from 'react-router-dom';

function SignUp() {
  
  return (
    <div id="home-signup">
      <div className="back-link">
        <Link to="/home">
          <img src={backIcon} alt="Voltar"/>
        </Link>
      </div>
      <LoginSignUp title="Cadastro" buttonText="Concluir Cadastro" description="Preencha os dados abaixo para começar">
          <div className="login-group">
            <input type="text" id="firstname" placeholder=" "/>
            <label htmlFor="firstname">
              <span className="label">Nome</span>
              </label>
          </div>
          <div className="login-group">
            <input type="text" id="lastname" placeholder=" "/>
            <label htmlFor="lastname">
              <span className="label">Sobrenome</span>
              </label>
          </div>
      </LoginSignUp>
    </div>
  )
}

export default SignUp;