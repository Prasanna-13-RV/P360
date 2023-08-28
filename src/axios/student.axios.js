import axios from "axios";

export const getStudentsCompetitive = async (token) => {
  return await axios.get("http://localhost:8080/api/studentscompetitive", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getStudents = async (token) => {
  return await axios.get("http://localhost:8080/api/students", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const postEvent = async (title, start_time, end_time) => {
//   return await axios.post("http://localhost:8080/api/events", {
//     title,
//     start_time,
//     end_time,
//   });
// };
