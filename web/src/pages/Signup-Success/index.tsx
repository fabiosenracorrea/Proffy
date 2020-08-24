import React from 'react';
import Success from '../../components/Success';

import './styles.css';

function SignUpSuccess() {
  return (
    <div id="signup-success">
      <Success
        title="Cadastro concluído"
        description="Agora você faz paste da plataforma da Proffy. Tenha uma ótima experiência."
        buttonText="Fazer login"
      />
    </div>
  )
}

export default SignUpSuccess;