import { useState, useEffect } from "react";
import { getRoadmaps, updateRoadmap } from "../../axios/roadmap.axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { TextField, Button } from "@mui/material";

import { postRoadmap } from "../../axios/roadmap.axios";
import { useLocation } from "react-router-dom";
const UpdateRoadmap = () => {
  const location = useLocation();
  const state = location.state;
  const [topic, setTopic] = useState([]);
  const [title, setTitle] = useState("");
  const [subtopic, setSubtopic] = useState([]);

  useEffect(() => {
    setTitle(state.name);
    const updatedTopics = state.subject.map((map) => map.name_sub);
    const updatedSubtopics = state.subject.map((map) => map.subject_sub);
    setTopic([...topic, ...updatedTopics]);
    setSubtopic([...subtopic, ...updatedSubtopics]);
  }, []);
  const handleSubmit = () => {
    let subject = [];
    topic.forEach((topic, index) => {
      subject.push({
        name_sub: topic,
        subject_sub: subtopic[index],
      });
    });
    updateRoadmap(title, subject, state.id);
  };

  return (
    <>
      <div className="relative w-full">
        <Navbar />

        <div className="flex flex-col items-center ">
          <h1 className="font-semibold text-2xl my-[3rem]">Update Roadmap</h1>
          <TextField
            sx={{ margin: "1rem 0rem 1rem 0rem", width: 400 }}
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="Title"
            value={title}
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
              {topic.length > 0 &&
                topic.map((data, index) => {
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
                        sx={{ marginBottom: "10px", width: 400 }}
                        label="Topic"
                        defaultValue={data}
                        variant="outlined"
                      />
                      <div className="flex items-start">
                        <Button
                          onClick={() => {
                            let main = [...subtopic]; // Create a copy of the subtopic array
                            let data = [...subtopic[index]]; // Create a copy of the subtopic array for the current topic

                            data = [...data, "init"];
                            main[index] = data;
                            setSubtopic(main);
                          }}
                          variant="contained"
                          sx={{ margin: "10px 20px 20px 0px" }}>
                          +
                        </Button>
                        <div className="flex flex-col ">
                          {subtopic[index].map((data, index2) => {
                            return (
                              <TextField
                                sx={{ marginBottom: "10px", width: 400 }}
                                id="outlined-basic"
                                onChange={(e) => {
                                  let mainArray = [...subtopic];
                                  let subArray = subtopic[index];

                                  subArray[index2] = e.target.value;

                                  mainArray[index] = subArray;

                                  setSubtopic(mainArray);
                                  console.log(subtopic);
                                }}
                                defaultValue={data}
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
        <Footer />
      </div>
    </>
  );
};

export default UpdateRoadmap;
