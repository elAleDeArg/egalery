import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";
import banner_img from "./img/p1.jpeg";
import p2 from "./img/p2.jpeg";
import caballo2 from "./img/caballo2.jpeg";
import nena1 from "./img/nena1.jpeg";
import caballo5 from "./img/caballo5.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <>///Como no se cuantas categorias va a tener esta pagina lo hago asi.
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>La coleccion para este 2024</h2>
            <Link to="/products" className="link">
              Compra ahora <BsArrowRightSquareFill />{" "}
            </Link>
          </div>
          <div className="img_box">
            <img src={banner_img} alt="banner" />
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">

          <div className="box">
            <div className="img_box">
              <img src={p2} alt="p2" />
            </div>
            <div className="detail">
              <p>Unica pieza en acuarela</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={caballo2} alt="p2" />
            </div>
            <div className="detail">
              <p>Unica pieza en acuarela</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={nena1} alt="p2" />
            </div>
            <div className="detail">
              <p>Unica pieza en acuarela</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src={caballo5} alt="p2" />
            </div>
            <div className="detail">
              <p>Unica pieza en acuarela</p>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Home;
