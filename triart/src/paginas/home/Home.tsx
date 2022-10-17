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

    {/* // CAROUSEL RESPONSIVE COM CSS PURO */}
    <section>
    <div>
  <div className="carousel">
    <ul className="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
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
          <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
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
          <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" />
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
</section>
  </main>


  );
}

export default Home;
