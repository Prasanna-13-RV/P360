import axios from "axios";

export const signin = async () => {
    return await axios.post("http://localhost:8080/api/academics",{});
  };