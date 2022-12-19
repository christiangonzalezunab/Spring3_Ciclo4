import '../css/App.css';
import Navegacion from '../layouts/Navegacion';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductosCreados from '../pages/ProductosCreados';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import CrearProducto from '../pages/CrearProducto';
import MisProductos from '../pages/MisProductos';
import Perfil from '../pages/Perfil';
import CerrarSesion from '../pages/CerrarSesion';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
        <Routes>
          <Route path='/' element={<ProductosCreados />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/crearProducto' element={<CrearProducto />} />
          <Route path='/misProductos' element={<MisProductos />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/cerrarSesion' element={<CerrarSesion />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;