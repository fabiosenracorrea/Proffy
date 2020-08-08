import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  user_id: number;
  name: string;
  whatsapp: string;
  cost: number;
  subject: string;
}

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  function CreateNewConnection() {
    api.post("/connections", {
      user_id: teacher.user_id
    })
  }

  return (
    <article className="teacher-item">
      <header>
          <img src={teacher.avatar} alt={teacher.name}/>
          <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
          </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
          <p>
              Preço/hora
              <strong>{`R$ ${teacher.cost}`}</strong>
          </p>
          <a onClick={CreateNewConnection} href={`https://wa.me/55${teacher.whatsapp}`} target="_blank">
              <img src={wppIcon} alt="Whatsapp"/>
              Entrar em contato
          </a>
      </footer>
    </article>
  );
}

export default TeacherCard;