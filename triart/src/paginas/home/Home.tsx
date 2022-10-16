import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div>
        <h2 className="fraseHome">
          Conectando o empreendedor rural com o mundo!
        </h2>
        <Link to="/produtos">
          <button className="borderDemo">Vá as compras!</button>
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
  );
}

export default Home;
