import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Calender from './pages/home/Calender';
import Roadmap from './pages/home/Roadmap'
import Roadmap2 from './pages/home/Roadmap2'
import Roadmap3 from './pages/home/Roadmap3'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/roadmap" element={<Roadmap3 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
