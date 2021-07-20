import React from "react";
import { Link } from "react-router-dom";
import confused from "../assets/photos/confused.gif";
const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__info">
        <h1>404</h1>
        <Link to="/">Retourner à l'Accueil</Link>
      </div>
      <div className="notFoundPage__gif">
        <img src={confused} alt="confused" />
      </div>
    </div>
  );
};

export default NotFoundPage;
