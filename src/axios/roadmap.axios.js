import axios from "axios";

export const getRoadmaps = async () => {
  return await axios.get("http://localhost:8080/api/roadmap");
};

export const postRoadmap = async (name, subject) => {
  
  return await axios.post("http://localhost:8080/api/roadmap", {
    name,
    subject,
  });
};

export const updateRoadmap = async (name, subject, id) => {
  
  return await axios.put(`http://localhost:8080/api/roadmap/${id}`, {
    name,
    subject,
  });
};
