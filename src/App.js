import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
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
import AddRoadmap from "./pages/admin/roadmap/AddRoadmap";
import ShowRoadmaps from "./pages/admin/roadmap/showRoadmaps";
import UpdateRoadmap from "./pages/admin/roadmap/UpdateRoadmaps";
import StudentDashboard from "./pages/admin/dashboard/StudentDashboard";
import RegisterAdmin from "./pages/admin/adminAuth/RegisterAdmin";

import Calender from "./pages/admin/Calender/Calender";
import Roadmap from "./pages/admin/roadmap/Roadmap";

import AddAcademics from "./pages/admin/academics/AddAcademics";
import Academics from "./pages/admin/academics/Academics";
import ViewAcademics from "./pages/admin/academics/ViewAcademics";
import UpdateAcademics from "./pages/admin/academics/UpdateAcademics";
import ProfilePage from "./pages/student/profile/ProfilePage";
import Roadmap3 from "./pages/student/home/Roadmap3";

function App() {
  const { user } = useSelector((state) => ({ ...state }));

  //   const [userLoggedIn, setUserLoggedIn] = useState(null);
  //   const [adminLoggedIn, setAdminLoggedIn] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          {/* auth */}
          <Route path="/login" element={<Login />}></Route>{/* Verified*/}
          <Route path="/" element={<Register />}></Route>

          {/* Profile */}
          <Route path="/profile/:id" element={<Profile user={user} />}></Route>{/* Verified*/}
          <Route path="/profile/update/:id" element={<ProfileEdit user={user}/>}></Route> {/* Verified*/}

          <Route path="/profile/resume/:id" element={<ProfilePage user={user} />}></Route>
          {/* internship */}
          <Route path="/internship" element={<ViewInternship user={user} />}></Route>{/* Verified*/}
          {/* Filter */}
          {/* <Route path="/filter" element={<Filter />}></Route> */}

          {/* Student Routes */}
          <Route
            path="/student/roadmap"
            element={<Roadmap3 user={user} />}
          ></Route>

          {/* Filter */}
          {/* <Route path="/student" element={<Filter />}></Route> */}
          {/* Profile */}

          {/* admin */}
          <Route path="/admin/login" element={<LoginAdmin />}></Route>
          <Route path="/admin/register" element={<RegisterAdmin />}></Route>
          {/* internship */}
          <Route path="/admin/internship" element={<Internship user={user} />}></Route>
          {/* file upload */}
          <Route path="/file" element={<FileUpload />}></Route>
          <Route path="/admin/student/file" element={<StudentFile user={user}/>}></Route>
          <Route path="/admin/marks/file" element={<MarksFile user={user}/>}></Route>
          {/* Roadmap */}
          <Route path="/admin/addroadmap" element={<AddRoadmap />}></Route>
          <Route
            path="/admin/updateroadmap"
            element={<UpdateRoadmap />}
          ></Route>
          <Route path="/admin/showroadmap" element={<ShowRoadmaps />}></Route>
          <Route path="/admin/roadmap" element={<Roadmap user={user} />}></Route>

          <Route path="/admin/dashboard" element={<StudentDashboard user={user}/>}></Route>{/* Verified*/}
          <Route path="/admin/calender" element={<Calender user={user} />}></Route>{/* Verified*/}

          {/* Academics */}
          <Route path="/admin/addacademics" element={<AddAcademics user={user}/>}></Route>{/* Verified*/}
          <Route
            path="/admin/updateacademics"
            element={<UpdateAcademics user={user}/>}
          ></Route>{/* Verified*/}

          <Route path="/admin/academics" element={<Academics user={user}/>}></Route>{/* Verified*/}
          <Route
            path="/admin/viewacademics"
            element={<ViewAcademics />}
          ></Route>{/* Verified*/}
        </Routes>
      </Router>
    </>
  );
}
export default App;
