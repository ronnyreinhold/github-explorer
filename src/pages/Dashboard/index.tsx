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
        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10713291?s=460&u=db7fed25298197ede36b9e47bd627634f9df11e5&v=4"
            alt="Imagem repositório"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Um repositório da rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10713291?s=460&u=db7fed25298197ede36b9e47bd627634f9df11e5&v=4"
            alt="Imagem repositório"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Um repositório da rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/10713291?s=460&u=db7fed25298197ede36b9e47bd627634f9df11e5&v=4"
            alt="Imagem repositório"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Um repositório da rocketseat</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
