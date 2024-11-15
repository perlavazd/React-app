import Navbar from './components/Navbar.jsx';
import Astros from './components/Astros.jsx';
import About from './components/About.jsx';
import Apods from './components/Apod.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const links = [
    { href: "/", text:"home"},
    { href: "/astros", text:"astros"},
    { href: "/apod", text:"apod"},
    { href: "/about", text:"about"}
  ];

  return (
    <>
      <Navbar links={links}/>
      <Routes>
        <Route element={<Astros/>} path='/astros' />
        <Route element={<About/>} path='/about' />
        <Route element={<Apods/>} path='/apod' />
      </Routes>
     
    </>
  );
}

export default App;
