import React from "react";
import { FaTruck, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruck />
        </div>

        <p>Entregas gratuitas con monto superior a 20000</p>
      </div>

      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src="./img/logo.svg" alt="logo"></img>
          </div>
          <div className="search_box">
            <input
              type="text"
              value=""
              placeholder="Que busca?"
              autoComplete="off"
            ></input>
            <button>Buscar</button>
          </div>
          <div className="icon">
            <div className="account">
              <div className="user_icon">
                <FaUser />
              </div>
              <p>Hola, usuario</p>
            </div>
            <div className="second_icon">
              <p><FaHeart /></p>
              <p><FaShoppingCart /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
