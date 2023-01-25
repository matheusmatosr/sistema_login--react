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
      
      <C.Eu>Me chamo Matheus Matos, sou desenvolvedor web, estou graduando no curso Análise e desenvolvimento de sistemas!</C.Eu>
      <C.Info>Esse é um projeto simples utilizando JavaScript, sendo um processo de login que valida os campos e que realiza o registro. O usuário só terá acesso a essa página caso tenha feito o processo do registro para passar no login!</C.Info>
      
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
