import { useState } from "react";
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
import { postAcademics } from "../../../axios/academics.axios";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";
const AddAcademics = ({user}) => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState(" ");
  const [sections, setSections] = useState([]);
  const [description, setDescription] = useState([]);
  const [practice_links, setPractice_links] = useState([]);
  const [test_link, setTest_link] = useState([]);
  const [currentSection, setCurrentSection] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentPractice, setCurrentPractice] = useState("");
  const [currentTest, setCurrentTest] = useState("");
  const [popup, setPopup] = useState(false);
  const [open, setOpen] = useState([]);

  const handleClick = (index) => {
    var openList = [...open];
    var openItem = !open[index];
    console.log(open[index], !open[index]);
    openList[index] = openItem;
    setOpen(openList);
  };
  const handleSection = () => {
    setPopup(false);
    setDescription([...description, currentDescription]);
    setSections([...sections, currentSection]);
    setPractice_links([...practice_links, currentPractice]);
    setTest_link([...test_link, currentTest]);
    setOpen([...open, false]);
  };

  const handleSubmit = () => {
    if (topic?.length > 0) {
      postAcademics(
        topic,
        sections,
        description,
        practice_links,
        test_link,
        user.token
      ).then((res) => {
        navigate("/admin/academics");
      });
    }
  };
  return (
    <>
      <NavbarAdmin />
      <div className="w-full min-h-screen flex flex-col items-center p-10">
        {popup && (
          <div className="z-50 fixed w-full h-full  top-0 left-0 bg-[#00000093] flex justify-center items-center">
            <div className="w-[60%] p-5 rounded-md bg-[#f6f6f6] flex flex-col justify-center items-center">
              <div className=" w-[80%]">
                <div className="flex justify-between ">
                  <h2 className=" font-medium text-lg my-3">Section Name</h2>
                  <button onClick={() => setPopup(false)}>Close</button>
                </div>
                <input
                  type="text"
                  className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                  name="section"
                  onChange={(e) => setCurrentSection(e.target.value)}
                  placeholder=""
                />
                <h2 className=" font-medium text-lg my-3">Description</h2>
                <input
                  type="text"
                  aria-multiline
                  className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                  name="section"
                  onChange={(e) => setCurrentDescription(e.target.value)}
                  placeholder=""
                />
                <h2 className=" font-medium text-lg my-3">Practice Link</h2>
                <input
                  type="text"
                  className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                  name="section"
                  onChange={(e) => setCurrentPractice(e.target.value)}
                  placeholder=""
                />
                <h2 className=" font-medium text-lg my-3">Test Link</h2>
                <input
                  type="text"
                  className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                  name="Test Link"
                  onChange={(e) => setCurrentTest(e.target.value)}
                  placeholder=""
                />
              </div>

              <div className=" my-3 flex flex-col">
                <button
                  onClick={handleSection}
                  className="py-2 px-4 mt-5 rounded-full bg-[#393AA1] text-white">
                  Add Section
                </button>
              </div>
            </div>
          </div>
        )}
        <TextField
          sx={{ width: 400 }}
          onChange={(e) => setTopic(e.target.value)}
          id="outlined-basic"
          label="Topic"
          value={topic}
          variant="outlined"
        />

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
            {sections?.length > 0 &&
              sections.map((data, index) => {
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
                            <ListItemText primary={description[index]} />
                            <Link target="_blank" to={practice_links[index]}>
                              <Button
                                sx={{ marginTop: "1rem" }}
                                onClick={() => setPopup(true)}
                                variant="outlined">
                                Practice Link
                              </Button>
                            </Link>
                            <Link target="_blank" to={test_link[index]}>
                              <Button
                                sx={{ marginTop: "1rem" }}
                                onClick={() => setPopup(true)}
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
        <Button
          onClick={() => setPopup(true)}
          variant="text"
          sx={{ marginTop: "1rem" }}>
          Add a section
        </Button>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ position: "fixed", bottom: "5%", right: "5%" }}>
          Submit
        </Button>
      </div>
      <FooterAdmin />
    </>
  );
};

export default AddAcademics;
