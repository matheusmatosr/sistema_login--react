import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Seja bem-vindo</C.Title>
      <C.Info>Esse é um projeto simples utilizando JavaScript, sendo um processo de login que valida os campos e que realiza o registro. O usuário só terá acesso a essa página caso tenha feito o processo do registro para passar no login!</C.Info>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      <C.Final>@ 2023 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></C.Final>
    </C.Container>
  );
};

export default Home;
