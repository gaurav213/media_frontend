
import './App.css';
import Navbar from './component/Navbarrr/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Navbar/Header/Header';
import Login from './component/login/login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <header className="App-header">
            <Navbar/>
            
               </header>
        </div>
      <Routes>
        
        {/* <Route path="/" element={<Login />} />
            <Route path="search"  /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
