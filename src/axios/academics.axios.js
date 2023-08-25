import axios from "axios";

export const getAcademics = async (token) => {
  return await axios.get("http://localhost:8080/api/academics", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postAcademics = async (
  topic,
  sections,
  descriptions,
  practice_link,
  test_link,
  token
) => {
  return await axios.post(
    "http://localhost:8080/api/academics",
    {
      topic,
      sections,
      descriptions,
      practice_link,
      test_link,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const updateAcademics = async (
  topic,
  sections,
  descriptions,
  practice_link,
  test_link,
  id,
  token
) => {
  return await axios.put(
    `http://localhost:8080/api/academics/${id}`,
    {
      topic,
      sections,
      descriptions,
      practice_link,
      test_link,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
