import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ViewInternship from "./pages/internship/ViewInternship";
// import AddInternship from "./pages/internship/AddInternship";
import Filter from "./pages/filter/Filter";
import Roadmap from "./pages/home/Roadmap";
import Calender from "./pages/home/Calender";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          {/* auth */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* internship */}
          <Route path="/internship" element={<ViewInternship />}></Route>
          {/* <Route path="/internship/create" element={<AddInternship />}></Route> */}
          {/* Filter */}
          <Route path="/filter" element={<Filter />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
