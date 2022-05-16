import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact'
import Cybersecurite from './Components/Services/Cybersecurite';
import Development from './Components/Services/Development';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/developpement" element={<Development/>}/>
          <Route path="/services/cybersecurite" element={<Cybersecurite/>}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> 

      </Routes>


    </div>
  );
}

export default App;
