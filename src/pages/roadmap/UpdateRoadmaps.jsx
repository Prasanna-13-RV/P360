import { useState, useEffect } from "react";
import { getRoadmaps } from "../../axios/roadmap.axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { TextField, Button } from "@mui/material";

import { postRoadmap } from "../../axios/roadmap.axios";
import { useLocation } from "react-router-dom";
const UpdateRoadmap = () => {
    const location = useLocation();
    const [topic, setTopic] = useState([]);
    const [title, setTitle] = useState();
    const [subtopic, setSubtopic] = useState([[]]);

    const data = location.state;

    useEffect(() => {
        setTitle(data.name);
        console.log(data);
        data.subject.map((map) => {
            setTopic([...topic, map.name_sub]);
            setSubtopic([...subtopic, map.subject_sub]);
            console.log(map.name_sub);
        });
    }, [data]);
    const handleSubmit = () => {
        let subject = [];
        topic.forEach((topic, index) => {
            subject.push({
                name_sub: topic,
                subject_sub: subtopic[index],
            });
        });
        postRoadmap(title, subject);
    };

    return (
        <div className=" w-full">
            <Navbar />
            <div className="flex flex-col items-center">
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
                        sx={{ marginRight: "15px" }}
                    >
                        +
                    </Button>
                    <div className="flex flex-col items-start ">
                        {topic.map((data, index) => {
                            console.log(data);
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
                                        value={data}
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

                                                data = [...data, "init"];
                                                main[index] = data;
                                                setSubtopic(main);
                                            }}
                                            variant="contained"
                                            sx={{
                                                margin: "10px 20px 20px 0px",
                                            }}
                                        >
                                            +
                                        </Button>
                                        <div className="flex flex-col ">
                                            {subtopic[index].map(
                                                (data, index2) => {
                                                    return (
                                                        <TextField
                                                            sx={{
                                                                marginBottom:
                                                                    "10px",
                                                                width: 400,
                                                            }}
                                                            id="outlined-basic"
                                                            onChange={(e) => {
                                                                let mainArray =
                                                                    [
                                                                        ...subtopic,
                                                                    ];
                                                                let subArray =
                                                                    subtopic[
                                                                        index
                                                                    ];

                                                                subArray[
                                                                    index2
                                                                ] =
                                                                    e.target.value;

                                                                mainArray[
                                                                    index
                                                                ] = subArray;

                                                                setSubtopic(
                                                                    mainArray
                                                                );
                                                                console.log(
                                                                    subtopic
                                                                );
                                                            }}
                                                            label={`${topic[index]} Sub-topic`}
                                                            variant="outlined"
                                                        />
                                                    );
                                                }
                                            )}
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
                    sx={{ margin: "10px 20px 20px 0px" }}
                >
                    {title ? `Add Roadmap for ${title}` : "Add Roadmap"}
                </Button>
            </div>
            <Footer />
        </div>
    );
};

export default UpdateRoadmap;
