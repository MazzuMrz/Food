import './App.css';
import  Navbar  from "./components/navbar.jsx";
import Ingreso from "./components/ingreso.jsx"
import Art from './components/art';
import Contacto from './components/contacto';

function Apps() {
  return (
    <div className="App">
      <Navbar />
      <Ingreso />
      <Art />
      <Contacto />
    </div>
  );
}

export default Apps;
