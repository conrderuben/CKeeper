import Home from './pages/Home';
import Registro from './pages/Registro';

import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Login from './pages/Login';



function App() {
  return(
    <Router>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
        
    </Router>
    
    
  ) ;
}

export default App;
