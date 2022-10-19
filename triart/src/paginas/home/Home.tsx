import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <main className="mainHome">    
      <section>
      <div>
        <h2 className="MsgEmpreendedor">
          Conectando o empreendedor rural com o mundo!
        </h2>
        <Link to="/produtos">
          <button className="borderCompras">Às compras!</button>
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

    {/* Mensagem sobre o projeto */}
    <section className="bg-carousel">
      <h1>AQUI VOU INVENTAR ALGUMA MODA SOBRE O PROJETO SER PARA A COMUNIDADE</h1>
    </section>



    {/* // CAROUSEL RESPONSIVE COM CSS PURO */}
    {/* <section className="bg-carousel">
    <div>
  <div className="carousel">
    <ul className="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://i.imgur.com/5nNjkgD.png" />
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-3" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-2" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://i.imgur.com/xg5VY1n.png" />
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-1" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-3" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://i.imgur.com/bQUvlcS.png" />
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-2" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-1" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div className="carousel-dots">
        <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
        <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
        <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>
</section> */}




{/* OUTRO CAROUSEL QUE GOSTEI MAIS KK */}

<section>
<div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carouselHome">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>

</section>




  </main>


  );
}

export default Home;
