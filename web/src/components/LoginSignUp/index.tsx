import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import eye from '../../assets/images/icons/eye.svg';
import eyeoff from '../../assets/images/icons/eye-off.svg';

import './styles.css';

interface LoginSignUpProps {
  title: string;
  buttonText: string;
  login?: boolean;
  description?: string;
  password?: boolean;
  emailValue?: string;
  setEmail: (s: any) => void;
  setPassword: (s: any) => void;
  submitFunc: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  passwordValue?: string;
}

const LoginSignUp: React.FC<LoginSignUpProps> = ({ title, buttonText,
  login, description, password, children, submitFunc,
  emailValue, passwordValue, setEmail, setPassword }) => {
  const [pwShown, setPwShown] = useState(false);

  function checkInputFields() {
    if (login) {
      return (emailValue !== '' && passwordValue !== '');
    }
    return true;
  }

  return (
    <div id="home-content" className="content">
        <div className="logo-container">
          <img src={logoImg} alt="logo"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <div className="main-container">
          <main>
            <form className="login" onSubmit={submitFunc}>
              <h1>{title}</h1>
              {description && (
                <p className="form-description">
                  {description}
                </p>
              )}


              {children}

              <div className="login-group">
                <input type="text" id="email" placeholder=" " onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="email">
                  <span className="label">E-mail</span>
                </label>
              </div>

              {password && (
                <div className="login-group">
                  <input type={pwShown ? "text" : "password"} id="password" placeholder=" " onChange={e => setPassword(e.target.value)}/>
                  <label htmlFor="password">
                    <span className="label">Senha</span>
                  </label>
                  <div className="show-hide-password">
                    <img src={pwShown ? eye : eyeoff} alt="show-password" onClick={e => setPwShown(!pwShown)}/>
                  </div>
                </div>
              )}

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

              <button type="submit" disabled={(!checkInputFields())}>{buttonText}</button>
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