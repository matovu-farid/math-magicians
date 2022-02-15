import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
// import Home from './pages/Home';

const App = () => (
  <Routes>
    <Route path="/" element={<Calculator />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/quote" element={<Quote />} />

  </Routes>

);

export default App;
