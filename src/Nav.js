import React from "react";
import { FaTruck, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Nav.css";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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
            {
                isAuthenticated &&
                (<div className="account">
              <div className="user_icon">
                <FaUser />
              </div>
              <p>Hola, {user.name}</p>
            </div>)
            }
            
            <div className="second_icon">
              <Link to="/" className="link">
                <FaHeart />
              </Link>
              <Link to="/cart" className="link">
                <FaShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="link">
                  Obras
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  Acerca de mi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <RiLogoutBoxFill />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <RiLoginBoxFill />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
