import axios from "axios";

export const signin = async (regno, password) => {
  return await axios.post("http://localhost:8080/students/login", {
    regno,
    password,
  });
};
export const adminSignIn = async (regno, password) => {
  return await axios.post("http://localhost:8080/admin/login", {
    regno,
    password,
  });
};
export const validateUser = async (token) =>
  await axios.get("http://localhost:8080/students/login", {
    headers: { "x-access-token": token },
  });
