import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://img.quizur.com/f/img5c884840a62cc9.48055575.jpg?lastEdited=1552435268"
            alt="avatar"
          />
          <div>
            <strong>Dragon Ball API</strong>
            <p>Api com personagens do universo Dragon Ball</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
