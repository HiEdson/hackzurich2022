import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Organization from './components/OrgPanel';
import Volunteer from './components/Volunteer';
import PossibleCand from './components/PossibleCand';
import SeeCauses from './components/SeeCause';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/organization" element={<Organization />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/matchuser" element={<PossibleCand />}/>
          <Route path="/seecauses" element={<SeeCauses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
