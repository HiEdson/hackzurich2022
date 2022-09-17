import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Organization from './components/OrgPanel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
            {/* <Route index element={<Home />} /> */}
            <Route path="/organization" element={<Organization />} />
            <Route path="/volunteer" element={<Organization />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          
        </Routes>
      </BrowserRouter>
      {/* <Landing/> */}
    </div>
  );
}

export default App;
