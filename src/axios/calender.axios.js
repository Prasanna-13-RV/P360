import axios from "axios";

export const getEvents = async () => {
  return await axios.get("http://localhost:8080/api/events");
};

export const postEvent = async (event) => {
  return await axios.post("http://localhost:8080/api/events", {
    event,
  });
};
