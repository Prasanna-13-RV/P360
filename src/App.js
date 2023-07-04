import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/student/home/Home";
import Login from "./pages/student/auth/Login";
import Register from "./pages/student/auth/Register";
import ViewInternship from "./pages/student/internship/ViewInternship";
import Filter from "./pages/admin/filter/Filter";
import Profile from "./pages/student/profile/Profile";
import ProfileEdit from "./pages/student/profile/ProfileEdit";
import FileUpload from "./pages/admin/fileUpload/FileUpload";
import LoginAdmin from "./pages/admin/adminAuth/LoginAdmin";
import Internship from "./pages/admin/internship/Internship";
import StudentFile from "./pages/admin/fileUpload/StudentFile";
import MarksFile from "./pages/admin/fileUpload/MarksFile";
import AddRoadmap from "./pages/roadmap/AddRoadmap";
import ShowRoadmaps from "./pages/roadmap/showRoadmaps";
import UpdateRoadmap from "./pages/roadmap/UpdateRoadmaps";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import Roadmap3 from "./pages/student/home/Roadmap3";
import Calender from "./pages/admin/Calender/Calender";
import Roadmap from "./pages/roadmap/Roadmap";
import RegisterAdmin from "./pages/admin/adminAuth/RegisterAdmin";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<StudentDashboard />}></Route>
                    {/* auth */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    {/* internship */}
                    <Route
                        path="/internship"
                        element={<ViewInternship />}
                    ></Route>
                    {/* Filter */}
                    {/* <Route path="/filter" element={<Filter />}></Route> */}
                    {/* Profile */}
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route
                        path="/profile/update"
                        element={<ProfileEdit />}
                    ></Route>

                    {/* Filter */}
                    {/* <Route path="/student" element={<Filter />}></Route> */}
                    {/* Profile */}

                    {/* admin */}
                    <Route path="/admin/login" element={<LoginAdmin />}></Route>
                    <Route
                        path="/admin/register"
                        element={<RegisterAdmin />}
                    ></Route>
                    {/* internship */}
                    <Route
                        path="/admin/internship"
                        element={<Internship />}
                    ></Route>
                    {/* file upload */}
                    <Route path="/file" element={<FileUpload />}></Route>
                    <Route
                        path="/admin/student/file"
                        element={<StudentFile />}
                    ></Route>
                    <Route
                        path="/admin/marks/file"
                        element={<MarksFile />}
                    ></Route>
                    {/* Roadmap */}
                    <Route
                        path="/admin/addroadmap"
                        element={<AddRoadmap />}
                    ></Route>
                    <Route
                        path="/admin/updateroadmap"
                        element={<UpdateRoadmap />}
                    ></Route>
                    <Route
                        path="/admin/showroadmap"
                        element={<ShowRoadmaps />}
                    ></Route>
                    <Route path="/admin/roadmap" element={<Roadmap />}></Route>
                    <Route
                        path="/admin/dashboard"
                        element={<StudentDashboard />}
                    ></Route>
                    <Route
                        path="/admin/calender"
                        element={<Calender />}
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}
export default App;
