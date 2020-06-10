import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import { Header, RepositoryInfo, Issues } from "./styles";
import api from "../../services/api";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatarfiles.alphacoders.com/782/78200.png"
            alt="asdasd"
          />
          <div>
            <strong>skdlanksdnlasd</strong>
            <p>adknaklsndkanskda</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2000</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>2000</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>2000</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="{`/repository/${repository.full_name}`}">
          <div>
            <strong>sdasdasda</strong>
            <p>asdasda</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
