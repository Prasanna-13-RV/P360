import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ViewInternship from "./pages/internship/ViewInternship";
import Filter from "./pages/filter/Filter";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* auth */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    {/* internship */}
                    <Route
                        path="/internship"
                        element={<ViewInternship />}
                    ></Route>
                    {/* Filter */}
                    <Route path="/filter" element={<Filter />}></Route>
                    {/* Profile */}
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route
                        path="/profile/update"
                        element={<ProfileEdit />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
