import "./styles.css";
import avalithLogo from "./avalith-logo.svg";

export const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__people">
          <p>
            Made by{" "}
            <a href="https://github.com/CamiStefano" target="_blank" rel="noreferrer">
              Camila Victoria Stefano
            </a>{" "}
            <a href="https://github.com/dfma-89" target="_blank" rel="noreferrer">
              Deborah Medina Alvarado
            </a>{" "}
            <a href="https://github.com/escobarGisele" target="_blank" rel="noreferrer">
              Gisele Escobar
            </a>{" "}
            <a href="https://github.com/BandaGriss780" target="_blank" rel="noreferrer">
              Mathias Avolio
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
