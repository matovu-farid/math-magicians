import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />

    </Routes>
  </>

);

export default App;
