import Home from './pages/Home';
import Register from './pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { MyCars } from './pages/MyCars';
import { SearchPage } from './pages/SearchPage';
import AddCars from './pages/AddCars';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cars" element={<MyCars />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/add-cars" element={<AddCars />} />
      </Routes>
    </Router>
  );
}

export default App;
