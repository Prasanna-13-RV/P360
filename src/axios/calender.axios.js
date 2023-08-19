import axios from "axios";

export const getEvents = async (token) => {
  return await axios.get("http://localhost:8080/api/events",{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

export const postEvent = async (title, start_time, end_time,token) => {
  return await axios.post("http://localhost:8080/api/events", {
    title,
    start_time,
    end_time,
  },{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};
