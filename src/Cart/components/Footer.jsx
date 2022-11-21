import "./styles.css";
import avalithLogo from "./avalith-logo.svg";
import { GoMarkGithub } from "react-icons/Go";

export const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__people">
          <p>Made by</p>
          <p>
            <a href="https://github.com/CamiStefano" target="_blank" rel="noreferrer">
              <span className="footer__people__name">Camila Victoria Stefano</span>
              <GoMarkGithub />
            </a>{" "}
            <a href="https://github.com/dfma-89" target="_blank" rel="noreferrer">
              <span className="footer__people__name">Deborah Medina Alvarado</span>
              <GoMarkGithub />
            </a>{" "}
            <a href="https://github.com/escobarGisele" target="_blank" rel="noreferrer">
              <span className="footer__people__name">Gisele Escobar</span>
              <GoMarkGithub />
            </a>{" "}
            <a href="https://github.com/BandaGriss780" target="_blank" rel="noreferrer">
              <span className="footer__people__name">Mathias Avolio</span>
              <GoMarkGithub />
            </a>
          </p>
        </div>
        <div className="footer__avalith">
          <a href="https://www.avalith.net/" className="avalith__logo" target="_blank" rel="noreferrer">
            <img src={avalithLogo} alt="Logo de avalith"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
