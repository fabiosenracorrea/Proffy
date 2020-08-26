import React from 'react';

import checkIcon from '../../assets/images/icons/success-check-icon.svg';
import { Link } from 'react-router-dom';

import './styles.css';

interface SuccessProps {
  title: string;
  description: string;
  buttonText: string;
}

const Success: React.FC<SuccessProps> = ({ title, description, buttonText }) => {
  return (
    <div id="success-page">
      <div className="success-msg">
        <img src={checkIcon} alt="success icon"/>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/home">{buttonText}</Link>
      </div>
    </div>
  )
}

export default Success;