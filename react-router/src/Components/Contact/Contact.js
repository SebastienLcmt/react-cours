import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  
  const location = useLocation();


  return (
    <div>
        <h1>Section contact</h1>
        {console.log(location)}
    </div>
  )
}
