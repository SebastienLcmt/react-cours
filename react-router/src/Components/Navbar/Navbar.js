import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        // style={(isActive) => (isActive ? { color: "red" } : { color: "black" })}
        className={({isActive}) => isActive ? "active-link" : ""}>Accueil</NavLink>
      {/* l'objet contient une propriété isActive, permettant de savoir s'il s'agit du lien actif ou pas. Bien mettre isActive entre accolade pour destructuring*/}
      <NavLink 
      to="/services"
      className={({isActive}) => isActive ? "active-link" : ""}>Services</NavLink>
      <NavLink 
      to="/contact"
      className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
      {/* <Link to="/">Accueil</Link>
       <Link to="/services">Services</Link>
       <Link to="/contact">Contact</Link> */}
    </nav>
  );
}
