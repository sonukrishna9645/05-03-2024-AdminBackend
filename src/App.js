import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminlog from './components/Adminlog';
import Home from './components/Home';
import Admindash from './components/Admindash';
import Coursemanage from './components/Coursemanage';
import Adminlogin from './components/Adminlogin';
import './App.css';

function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
      <Routes>
         <Route path="/Home" element={<Home method='get'/>} />
         <Route path="/Adminlog" element={<Adminlog method='get'/>}/>
         <Route path="/Adminlogin" element={<Adminlogin method='get'/>}/>
         <Route path="/Admindash" element={<Admindash method='get'/>}/>
         <Route path="/Coursemanage" element={<Coursemanage method='post'/>}/>
         
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
