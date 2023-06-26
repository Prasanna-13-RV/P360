import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Collapse,
  ListItemButton,
  ListItemText,
  List,
  ListSubheader,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";
const ViewAcademics = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState(location.state);
  const [open, setOpen] = useState([]);

  useEffect(() => {
    console.log(state);

    state?.sections.map((section) => {
      setOpen([...open, false]);
    });
  }, []);

  const handleClick = (index) => {
    var openList = [...open];
    var openItem = !open[index];
    console.log(open[index], !open[index]);
    openList[index] = openItem;
    setOpen(openList);
  };

  return (
    <>
      <NavbarAdmin />
      <div className="w-full min-h-screen flex flex-col items-center p-10">
        <h1 className="font-bold text-xl">{state.topic}</h1>

        <div className="w-[80%] mx-auto bg-[#f6f6f6]">
          <List
            sx={{ width: "100%" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Sections
              </ListSubheader>
            }>
            {state &&
              state.sections &&
              state.sections.map((data, index) => {
                console.log(data, open[index]);
                return (
                  <>
                    <ListItemButton onClick={() => handleClick(index)}>
                      <ListItemText primary={data} />
                      {open[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={open[index]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <div className="flex flex-col  items-start">
                            <ListItemText primary={state.descriptions[index]} />
                            <Link
                              target="_blank"
                              to={state.practice_link[index]}>
                              <Button
                                sx={{ marginTop: "1rem" }}
                                variant="outlined">
                                Practice Link
                              </Button>
                            </Link>
                            <Link target="_blank" to={state.test_link[index]}>
                              <Button
                                sx={{ marginTop: "1rem" }}
                                variant="outlined">
                                Test Link
                              </Button>
                            </Link>
                          </div>
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                );
              })}
          </List>
        </div>
      </div>
      <FooterAdmin />
    </>
  );
};

export default ViewAcademics;
