import axios from "axios";

export const getRoadmaps = async (token) => {
  return await axios.get("http://localhost:8080/api/roadmap",{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

export const postRoadmap = async (name, subject,token) => {
  
  return await axios.post("http://localhost:8080/api/roadmap", {
    name,
    subject,
  },{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

export const updateRoadmap = async (name, subject, id,token) => {
  
  return await axios.put(`http://localhost:8080/api/roadmap/${id}`, {
    name,
    subject,
  },{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};
