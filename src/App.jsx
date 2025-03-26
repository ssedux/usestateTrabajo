// App.js
import { BrowserRouter as Router,Routes,Route } from 'react-router';
import Calculator from './Pages/Calculator.jsx';
import ListaTareas from './Pages/ListaTareas.jsx';
import Componentes from './Pages/20Componentes.jsx';
import Yo from './Pages/yo.jsx';
import './App.css';
import Nav from './components/Nav.jsx';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/tareas" element={<ListaTareas />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/yo" element={<Yo />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;