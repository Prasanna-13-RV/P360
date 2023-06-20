import { useState, useEffect } from "react";
import { getRoadmaps } from "../../axios/roadmap.axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const ShowRoadmaps = () => {
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState();
  useEffect(() => {
    getRoadmaps().then((res) => {
      setRoadmap(res.data);
    });
  }, []);
  return (
    <div className="min-h-screen w-full flex items-start justify-start p-6">
      {roadmap &&
        roadmap.map((res) => {
          return (
            <>
              <div
                onClick={() => navigate("/admin/updateroadmap", { state: res })}
                className="bg-[#f6f6f6] mr-6 shadow-md rounded-md flex justify-center items-center h-[150px] w-[300px]">
                <h1 className="font-bold text-xl">{res.name}</h1>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ShowRoadmaps;
