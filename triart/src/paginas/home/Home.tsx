import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "./carousel";

function Home() {
  return (
    <main>    
      <section>
      <div>
        <h2 className="MsgEmpreendedor">
          Conectando o empreendedor rural com o mundo!
        </h2>
        <Link to="/produtos">
          <button className="borderCompras">Vá as compras!</button>
        </Link>
        <Link to="/produtos">
          <img
            src="https://i.imgur.com/8Q3oCTF.png"
            alt="Logo"
            className="bgLogo"
          />
        </Link>
      </div>
      <div>
        <img
          src="https://i.imgur.com/nyLJUod.jpg"
          alt="Imagem de Fundo"
          className="bgHome"
        />
      </div>
    </section>

    {/* // CAROUSEL RESPONSIVE COM CSS E JS */}
    <section className="carousel">
      <div className="container-slider">
    <div className="slides"></div>
    <button className="btn-slide prev">
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
    </button>
    <button className="btn-slide next">
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
    <div className="container-dots"></div>
  </div>
  </section>
  </main>


  );
}

export default Home;
