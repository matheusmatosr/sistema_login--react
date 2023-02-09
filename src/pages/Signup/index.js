import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-toastify';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!name | !email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      toast.warn("Foi detectado campos vaios");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      toast.warn("Foi detectado erro no campo do email!");
      return;
    }

    if (email === name) {
      setError("Não é permitido campos iguais");
      toast.warn("Foi detectado campos semelhantes!");
      return;
    }

    const res = signup(name, email, senha);

    if (res) {
      setError(res);
      return;
    }

    toast.success("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE REGISTRO</C.Label>
      <C.Content>
        <Input 
          type="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
      <C.Final>@ 2023 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></C.Final>
    </C.Container>
  );
};

export default Signup;
