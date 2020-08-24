import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

interface LoginSignUpProps {
  title: string;
  buttonText: string;
  login?: boolean;
  description?: string;
  password?: boolean;
}

const LoginSignUp: React.FC<LoginSignUpProps> = ({ title, buttonText, login, description, password, children }) => {
  return (
    <div id="home-content" className="content">
        <div className="logo-container">
          <img src={logoImg} alt="logo"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <div className="main-container">
          <main>
            <form className="login">
              <h1>{title}</h1>
              {description && (
                <p className="form-description">
                  {description}
                </p>
              )}


              {children}

              <div className="login-group">
                <input type="text" id="email" placeholder=" "/>
                <label htmlFor="email">
                  <span className="label">E-mail</span>
                </label>
              </div>

              {password && (<div className="login-group">
                <input type="password" id="password" placeholder=" "/>
                <label htmlFor="password">
                  <span className="label">Senha</span>
                </label>
              </div>)}

              {login && (
                <div className="login-help">
                  <div className="remember-container">
                    <label htmlFor="remember">
                      <input type="checkbox" name="remember-me" id="remember"/>
                      <span className="checkmark"></span>
                      <span className="check-text">Lembrar-me</span>
                    </label>
                  </div>
                  <Link to="/forgot-password">Esqueci minha senha</Link>
                </div>
              )}

              <button type="button">{buttonText}</button>
            </form>
            
            {login && (
              <footer>
              <div className="signup">
                  <p>Não tem conta?</p>
                  <Link to="signup">Cadastre-se</Link>
              </div>
              <p>É de graça <img src={purpleHeart} alt="Purple Heart"/></p>
              </footer>
            )}

          </main>
        </div>
      </div>
  )
}

export default LoginSignUp;