import Home from './pages/Home';
import Register from './pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { MyCars } from './pages/MyCars';
import { Parking } from './pages/Parking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cars" element={<MyCars />} />
        <Route path="/parking" element={<Parking />} />
      </Routes>
    </Router>
  );
}

export default App;
