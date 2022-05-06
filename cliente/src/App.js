import Home from './pages/Home';
import Register from './pages/Register';
import AdminRoute from './components/AdminRoute';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { MyCars } from './pages/MyCars';
import { SearchPage } from './pages/SearchPage';
import AddCars from './pages/AddCars';
import ProtectedRoute from './components/ProtectedRoute';
import MyPlaces from './pages/MyPlaces';
import BuyPlace from './pages/BuyPlace';
import AdminUsers from './pages/AdminUsers';
import { Parking } from './pages/Parking';

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
          path="/add-car"
          element={
            <ProtectedRoute>
              <AddCars />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/places"
          element={
            <ProtectedRoute>
              <MyPlaces />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/buy-place"
          element={
            <ProtectedRoute>
              <BuyPlace />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/parking"
          element={
            <ProtectedRoute>
              <Parking />
            </ProtectedRoute>
          }
        ></Route>
        {/* Admin */}

        <Route
          path="/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
