import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Services() {
  return (
    <div>
        <h1>Section services</h1>
        <nav>
          <Link to="/services/developpement"> Développement</Link>
          <Link to="/services/cybersecurite"> Cybersécurité </Link>
        </nav>

        {/* Outlet désigne là où l'on affiche le contenu du lien imbriqué */}
        <Outlet />  
    </div>
  )
}
