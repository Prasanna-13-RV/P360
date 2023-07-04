import axios from "axios";

export const getAcademics = async () => {
  return await axios.get("http://localhost:8080/api/academics");
};

export const postAcademics = async (
  topic,
  sections,
  descriptions,
  practice_link,
  test_link
) => {
  return await axios.post("http://localhost:8080/api/academics", {
    topic,
    sections,
    descriptions,
    practice_link,
    test_link,
  });
};
export const updateAcademics = async (
  topic,
  sections,
  descriptions,
  practice_link,
  test_link,
  id
) => {
  return await axios.put(`http://localhost:8080/api/academics/${id}`, {
    topic,
    sections,
    descriptions,
    practice_link,
    test_link,
  });
};