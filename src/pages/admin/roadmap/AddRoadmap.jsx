import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { postRoadmap } from "../../../axios/roadmap.axios";
import FooterAdmin from "../../../components/admin/FooterAdmin";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import { useNavigate } from "react-router-dom";
const AddRoadmap = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState([]);
  const [title, setTitle] = useState();
  const [subtopic, setSubtopic] = useState([[]]);

  const handleSubmit = () => {
    let subject = [];
    topic.forEach((topic, index) => {
      subject.push({
        name_sub: topic,
        subject_sub: subtopic[index],
      });
    });
    postRoadmap(title, subject).then((res) => {
      if (res.status == 200) {
        navigate("/admin/roadmap");
      }
    });
  };
  return (
    <>
      <NavbarAdmin />
      <div className="w-full p-4">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-2xl my-[3rem]">Add Roadmap</h1>
          <TextField
            sx={{ margin: "1rem 0rem 1rem 0rem", width: 400 }}
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />

          <div className="flex items-start ">
            <Button
              onClick={() => {
                setTopic([...topic, ""]);

                setSubtopic([...subtopic, []]);
              }}
              variant="contained"
              sx={{ marginRight: "15px" }}>
              +
            </Button>
            <div className="flex flex-col items-start ">
              {topic.map((data, index) => {
                return (
                  <>
                    <TextField
                      id="outlined-basic"
                      onChange={(e) => {
                        let temp = topic;
                        temp[index] = e.target.value;
                        console.log(temp[index]);
                        setTopic(temp);
                      }}
                      sx={{
                        marginBottom: "10px",
                        width: 400,
                      }}
                      label="Topic"
                      variant="outlined"
                    />
                    <div className="flex items-start">
                      <Button
                        onClick={() => {
                          //   let main = subtopic;
                          //   let data = subtopic[index];

                          //   data = [...data, "init"];
                          //   main[index] = data;
                          //   setSubtopic(main);
                          //   console.log(subtopic);
                          let main = [...subtopic]; // Create a copy of the subtopic array
                          let data = [...subtopic[index]]; // Create a copy of the subtopic array for the current topic

                          data = [...data, ""];
                          main[index] = data;
                          setSubtopic(main);
                        }}
                        variant="contained"
                        sx={{
                          margin: "10px 20px 20px 0px",
                        }}>
                        +
                      </Button>
                      <div className="flex flex-col ">
                        {subtopic[index].map((data, index2) => {
                          return (
                            <TextField
                              sx={{
                                marginBottom: "10px",
                                width: 400,
                              }}
                              id="outlined-basic"
                              onChange={(e) => {
                                let mainArray = [...subtopic];
                                let subArray = subtopic[index];

                                subArray[index2] = e.target.value;

                                mainArray[index] = subArray;

                                setSubtopic(mainArray);
                                console.log(subtopic);
                              }}
                              label={`${topic[index]} Sub-topic`}
                              variant="outlined"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* <button title="+" /> */}
          </div>
          <Button
            disabled={title && topic.length != 0 ? false : true}
            onClick={handleSubmit}
            variant="contained"
            sx={{ margin: "10px 20px 20px 0px" }}>
            {title ? `Add Roadmap for ${title}` : "Add Roadmap"}
          </Button>
        </div>
      </div>
      <FooterAdmin />
    </>
  );
};

export default AddRoadmap;
