import Home from './pages/Home';
import Register from './pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { MyCars } from './pages/MyCars';
import { SearchPage } from './pages/SearchPage';
import AddCars from './pages/AddCars';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/cars"
          element={
            <ProtectedRoute>
              <MyCars />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/add-cars"
          element={
            <ProtectedRoute>
              <AddCars />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
