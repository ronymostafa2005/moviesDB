import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Componentes/layout/Navbar';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Footer from './Componentes/layout/Footer';
import Trending from './Pages/Trending';
import Contact from './Pages/Contact';
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </>
  );
}
