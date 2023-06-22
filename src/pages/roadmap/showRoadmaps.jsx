import { useState, useEffect } from "react";
import { getRoadmaps } from "../../axios/roadmap.axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ShowRoadmaps = () => {
  const [colors, setColors] = useState([]);
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState();
  useEffect(() => {
    getRoadmaps().then((res) => {
      setRoadmap(res.data);

      res.data.map((data) => {
        setColors((oldArray) => [
          ...oldArray,
          "hsl(" + Math.floor(Math.random() * 361) + ",50%,80%)",
        ]);
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh]  w-full flex items-start justify-start pt-[5rem] px-[5rem]">
        {roadmap &&
          roadmap.map((res, index) => {
            console.log(colors);
            return (
              <>
                <div
                  onClick={() =>
                    navigate("/admin/updateroadmap", { state: res })
                  }
                  style={{ backgroundColor: colors[index] }}
                  className="relative  mr-6 shadow-lg rounded-md flex justify-center items-center h-[150px] w-[300px]">
                  <img
                    className="opacity-70  bottom-[-10%] absolute w-full h-full z-0"
                    src={require("../../images/cloud.png")}
                    alt=""
                  />
                  <h1 className="font-bold text-xl z-10">{res.name}</h1>
                </div>
              </>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default ShowRoadmaps;
