import { useState, useEffect } from "react";
import { getAcademics } from "../../../axios/academics.axios";

import { Button } from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";
const Academics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [academics, setAcademics] = useState(location.state);
  
  useEffect(() => {
    // getAcademics().then((res) => {
    //   setAcademics(res.data);
    // });
    
    
  }, []);
  return (
    <>
    <NavbarAdmin/>
    <div className="min-h-screen w-full p-[2rem] bg-[#f6f6f6] justify-evenly items-start flex flex-wrap">
      {academics &&
        academics.map((data) => {
          return (
            <div className="b-white shadow-md rounded-sm p-[.6rem] w-[300px]">
              <h1 className="font-bold">{data.topic}</h1>
              <p className="mt-3 bg-slate-200 rounded-sm p-2 text-sm font-semibold text-slate-500">
                No of Tests: <span>{data.test_link.length}</span>
              </p>
              <div className="flex justify-between mt-3">
                <Button
                  onClick={() =>
                    navigate("/admin/viewacademics", { state: data })
                  }
                  variant="text">
                  View
                </Button>
                <Button
                 onClick={() =>
                  navigate("/admin/updateacademics", { state: data })
                }>
                  Update
                </Button>
                <Button
                  //   onClick={() => setPopup(true)}
                  variant="text">
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
    </div>
    <FooterAdmin/>
    </>
    
  );
};

export default Academics;
