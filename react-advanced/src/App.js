// import useDimension from './useDimension';
// import Timer from "./Timer";
import {useState, useEffect, useRef, useMemo, useCallback} from "react"
import './App.css';
// import Modal from './Components/Modal/Modal';
import Accord from './Components/Accordeon/Accord';
import Navbar from './Components/Navbar/Navbar';
// import Video from './video.mp4'


function App() {

  // const [toggle, setToggle] = useState(true);
  // const toggleFunc = () => {
  //   setToggle(!toggle);
  // }

  // const ref = useRef(); // ici retourne undefined

  // useEffect(() => {
  //   // console.log(ref); // ici retourne la vidéo

  //   setTimeout(() => {
  //     ref.current.pause()
  //   }, 3000)

  // }, [])
  
  return (
    <div className="App">

      {/* <video ref={ref} width="750" heigth="500" autoPlay controls muted>
        <source src={Video} type="video/mp4"/>
      </video>

      <button onClick={toggleFunc}>Toggle</button> */}
      
      {/* {toggle && <Timer func={toggleFunc}/> } */}
      {/* <Modal /> */}
      {/* <Accord /> */}
      <Navbar />

    </div>
    
  );
}

export default App;
