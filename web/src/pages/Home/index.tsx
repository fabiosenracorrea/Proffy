import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';

import LoginSignUp from '../../components/LoginSignUp';

import './styles.css';

interface LoginInfo {
  user_id: number;
  user_email: string;
  token: string;
}

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Digite seu e-mail')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Digite sua senha'),
      });

      await schema.validate({
        email,
        password,
      }, {
        abortEarly: false,
      });
    } catch (err) {
      alert('Confira os dados informados');
      return;
    }

      try {
        const response = await api.post<LoginInfo>('/users/login', {
          email,
          password,
        });
        const { token } = response.data;

        localStorage.setItem('proffy_jwt', token);

        history.push('/');

      } catch (err) {
        alert('Erro inesperado em Login')
      }
  }

  return (
    <div id="home-page">
      <LoginSignUp
        title="Fazer login"
        buttonText="Entrar"
        login={true}
        password={true}
        setEmail={setEmail}
        setPassword={setPassword}
        submitFunc={handleLogin}
      />
    </div>
  )
}

export default HomePage;