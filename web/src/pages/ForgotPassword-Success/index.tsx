import React from 'react';
import Success from '../../components/Success';

function ForgotPasswordSuccess() {
  return (
    <Success
      title="Redefinição enviada!"
      description="Boa, agora é so checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
      buttonText="Voltar ao login"
    />
  )
}

export default ForgotPasswordSuccess;