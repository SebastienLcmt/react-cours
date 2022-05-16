import './App.css';
import {useState, useEffect} from "react"

function Timer(props) {

  const [timer, setTimer] = useState(1)
  
  useEffect(()=> {
    const intervalID = setInterval(()=> { 
      setTimer(timer => timer + 1)
    }, 1000)
    
    return () => {
        console.log('composant détruit');
        clearInterval(intervalID)
    }
  }, [])

  return (
    <>
      <h1 style={{textAlign: 'center'}}> {timer} </h1>
      <button onClick={props.func}>Détruire composant</button>
    </>
  );
}

export default Timer;
