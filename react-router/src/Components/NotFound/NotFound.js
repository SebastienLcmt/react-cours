import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound   () {

    const navigate = useNavigate();


  return (
    <div>
        <h1>Woops, cette page n'existe pas</h1>
        <button onClick={() => navigate('/')}>Retourner à l'accueil</button>
    </div>
  )
}
