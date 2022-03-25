
import './App.css';
import Navbar from './component/Navbar/Navbarrr/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './component/login/login';
import NewPost from './component/Navbar/NewPost/NewPost';
import PostImgModal from './component/PostImgModal';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
          <header className="App-header">
            <Navbar/>
            
               </header>
        </div>
      <Routes>
        
        <Route path="/" element={<Login />} />
          <Route path="newpost" element={<NewPost/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
