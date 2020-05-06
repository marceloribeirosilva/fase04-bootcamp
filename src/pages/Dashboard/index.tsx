import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/34379943?s=460&u=2c39dd12a2ba294b48eebd095bce34dfa13c0b74&v=4"
            alt="Marcelo Silva"
          />
          <div>
            <strong>marceloribeirosilva/GoBarber</strong>
            <p>Aplicativo desenvolvido durante o Bootcamp da RocketSeat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
