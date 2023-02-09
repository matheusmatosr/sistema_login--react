import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <AuthProvider>
    <ToastContainer autoClose={1000} />
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
