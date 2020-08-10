import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function HomePage() {
  
  return (
    <div id="home-page">
      <div id="home-content" className="content">
        <div className="logo-container">
          <img src={logoImg} alt="logo"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <div className="main-container">
          <main>
            <form className="login">
              <h1>Fazer login</h1>

              <div className="login-group">
                <input type="text" id="email" placeholder=" "/>
                <label htmlFor="email">
                  <span className="label">E-mail</span>
                  </label>
              </div>

              <div className="login-group">
                <input type="password" id="password" placeholder=" "/>
                <label htmlFor="password">
                  <span className="label">Senha</span>
                </label>
              </div>

              <div className="login-help">
                <div className="remember-container">
                  <label htmlFor="remember">
                    <input type="checkbox" name="remember-me" id="remember"/>
                    <span className="checkmark"></span>
                    <span className="check-text">Lembrar-me</span>
                  </label>
                </div>
                <Link to="/">Esqueci minha senha</Link>
              </div>

              <button type="button">Entrar</button>
            </form>

            <footer>
              <div className="signup">
                  <p>Não tem conta?</p>
                  <Link to="/">Cadastre-se</Link>
              </div>
              <p>É de graça <img src={purpleHeart} alt="Purple Heart"/></p>
            </footer>
          </main>

        </div>
      </div>
    </div>
  )
}

export default HomePage;