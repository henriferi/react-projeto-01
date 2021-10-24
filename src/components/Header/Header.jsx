import React from "react";
import "./Header.css";
import  Logo from "../../assets/logo.png";
import Linkedin from "../../assets/linkedin.png";

export default function Header(props) {

    return(
        <>
          
          <header id="menu">
              <img src={Logo} alt="logo" /> 
              <ul>
                  <li><a href="#">Galeria de fotos</a></li>
                  <li><a href="#">Formulário de adoção</a></li>
                  <li><a href="#">Certificação de adoção</a></li>
              </ul>
          </header>
          <footer id="footer">
              <p>Desenvolvido por - <a target="_blank" href="https://www.linkedin.com/in/henrique-fernandes-a29057214/">Henrique Fernandes</a></p>
          </footer>
        </>
    );
}