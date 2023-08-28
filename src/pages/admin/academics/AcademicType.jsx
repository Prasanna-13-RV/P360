import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Collapse,
  ListItemButton,
  ListItemText,
  List,
  ListSubheader,
} from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAcademics } from "../../../axios/academics.axios";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
function AcademicType() {
  const navigate = useNavigate();
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    getAcademics().then((res) => {
      setAcademics(res.data);
    });
  }, []);
  return (
    <>
    <NavbarAdmin />
    <div className="w-full min-h-screen flex justify-center items-start p-[2rem]">
      <div className="b-white shadow-md rounded-sm p-[.6rem] w-[300px]">
        <h1 className="font-bold">Technical</h1>
        <p className="mt-3 bg-slate-200 rounded-sm p-2 text-sm font-semibold text-slate-500">
          No of Topics:{" "}
          <span>{academics.filter((d) => d.type == "technical").length}</span>
        </p>
        <div className="flex justify-between mt-3">
          <Button
            onClick={() =>
              navigate("/admin/academics", {
                state: academics.filter((d) => d.type == "technical"),
              })
            }
            variant="text">
            View
          </Button>
        </div>
      </div>
      <div className="b-white ml-10 shadow-md rounded-sm p-[.6rem] w-[300px]">
        <h1 className="font-bold">Aptitude</h1>
        <p className="mt-3 bg-slate-200 rounded-sm p-2 text-sm font-semibold text-slate-500">
          No of Topics:{" "}
          <span>{academics.filter((d) => d.type == "aptitude").length}</span>
        </p>
        <div className="flex justify-between mt-3">
          <Button
            onClick={() =>
              navigate("/admin/academics", {
                state: academics.filter((d) => d.type == "aptitude"),
              })
            }
            variant="text">
            View
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

export default AcademicType;
