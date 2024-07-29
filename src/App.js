import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Board from './Components/Board';




import ListaPacientes from './Components/ListaPaciente';
import ListaCitas from './Components/ListaCitas';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <Router>
          <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/listapacientes" element={<ListaPacientes />} />
                <Route path="/pacientes/:id/editar" element={<ListaCitas />} />
                <Route path="/odontograma/:id/:odonto" element={<Board />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
  );
}

export default App;
