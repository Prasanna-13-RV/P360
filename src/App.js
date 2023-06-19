import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/student/home/Home";
import Login from "./pages/student/auth/Login";
import Register from "./pages/student/auth/Register";
import ViewInternship from "./pages/student/internship/ViewInternship";
import Filter from "./pages/student/filter/Filter";
import Profile from "./pages/student/profile/Profile";
import ProfileEdit from "./pages/student/profile/ProfileEdit";
import FileUpload from "./pages/student/fileUpload/FileUpload";
import LoginAdmin from "./pages/admin/adminAuth/LoginAdmin";
import Internship from "./pages/admin/internship/Internship";

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
                    {/* file upload */}
                    <Route path="/file" element={<FileUpload />}></Route>

                    {/* admin */}
                    <Route path="/admin/login" element={<LoginAdmin />}></Route>
                    {/* internship */}
                    <Route path="/admin/internship" element={<Internship />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
