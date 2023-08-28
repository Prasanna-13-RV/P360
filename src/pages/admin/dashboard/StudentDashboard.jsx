import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Filter from "../filter/Filter";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";
import {
  getStudents,
  getStudentsCompetitive,
} from "../../../axios/student.axios";

export const options2 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "P360Score",
    },
  },
};

export const options3 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "CodeChef",
    },
  },
};

export const options4 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "CodeForces",
    },
  },
};

export const options5 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "HackerRank",
    },
  },
};

export const options6 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "CodeDivision",
    },
  },
};

export const options7 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "HackerEarth",
    },
  },
};

export const options8 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "InterviewBit",
    },
  },
};

export const options9 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "GFG",
    },
  },
};

export const optionsDept = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "No of Students by Department",
    },
  },
};
export const optionsSemester = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Semester Chart",
    },
  },
};
export const optionsCGPA = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "CGPA",
    },
  },
};
// p360Score: "100/10000",
//             leetCode: "100/10000",
//             codeChef: "100/10000",
//             codeForces: "100/10000",
//             hackerRank: "100/10000",
//             codeDivision: "100/10000",
//             hackerEarth: "100/10000",
//             interviewBit: "100/10000",
//             gfg: "100/10000",
const labels = ["100-80", "80-60", "60-40", "40-20", "20-0"];
const markLabel = [
  "semester1",
  "semester2",
  "semester3",
  "semester4",
  "semester5",
  "semester6",
  "semester7",
  "semester8",
];
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentDashboard = ({ user }) => {
  const [mode, setMode] = useState("competitive");

  const [cgpaAllDept, setCgpaAllDept] = useState();
  const [cgpaData, setCgpaData] = useState();
  const [currentYear, setCurrentYear] = useState(2024);
  const [currentDept, setCurrentDept] = useState("IT");
  const [students, setStudents] = useState([]);

  // const [values, setValues] = useState({
  //   leetcode_score: [],
  // });
  const [deptData, setDeptData] = useState();
  const [deptMarks, setDeptMarks] = useState();
  const [departmentCount, setDepartmentCount] = useState({});
  const [departmentCgpa, setDepartmentCgpa] = useState({});
  const [segregation, setSegregation] = useState();

  const segregateScores = (studentsData) => {
    console.log(studentsData, "Mode");
    const newSegregation = {};

    const cgpaOfDepts = {};

    studentsData.forEach((student) => {
      //dept

      const {
        p360_score,
        interview_bit_score,
        hackerrank_score,
        leetcode_score,
        hacker_earth_score,
        geeks_for_geeks_score,
        code_division_score,
        code_forces_score,
        codechef_score,
        cgpa,
      } = student;

      updateScoreRange(newSegregation, "leetcode_score", leetcode_score);
      updateScoreRange(
        newSegregation,
        "interview_bit_score",
        interview_bit_score
      );
      updateScoreRange(newSegregation, "p360_score", p360_score);
      updateScoreRange(newSegregation, "hackerrank_score", hackerrank_score);
      updateScoreRange(
        newSegregation,
        "hacker_earth_score",
        hacker_earth_score
      );

      updateScoreRange(
        newSegregation,
        "geeks_for_geeks_score",
        geeks_for_geeks_score
      );
      updateScoreRange(
        newSegregation,
        "code_division_score",
        code_division_score
      );
      updateScoreRange(newSegregation, "codechef_score", codechef_score);
      updateScoreRange(newSegregation, "code_forces_score", code_forces_score);

      updateCgpaRange(cgpaOfDepts, parseFloat(cgpa));
    });

    setSegregation(newSegregation);

    setCgpaAllDept({
      labels: Object.keys(cgpaOfDepts["CGPA"]),
      datasets: [
        {
          label: "CGPA",
          data: Object.values(cgpaOfDepts["CGPA"]),
          backgroundColor: "#393AA1",
        },
      ],
    });
  };

  const updateCgpaRange = (segregationObj, cgpa) => {
    console.log(cgpa, segregationObj, "hi");
    if (!segregationObj["CGPA"]) {
      segregationObj["CGPA"] = {
        range_6_7: 0,
        range_7_8: 0,
        range_8_9: 0,
        range_9_10: 0,
      };
    }

    if (cgpa >= 6 && cgpa < 7) {
      segregationObj["CGPA"].range_6_7++;
    } else if (cgpa >= 7 && cgpa < 8) {
      segregationObj["CGPA"].range_7_8++;
    } else if (cgpa >= 8 && cgpa < 9) {
      segregationObj["CGPA"].range_8_9++;
    } else if (cgpa >= 9 && cgpa <= 10) {
      segregationObj["CGPA"].range_9_10++;
    }
  };

  const updateScoreRange = (segregationObj, field, score) => {
    const scoreValue = parseFloat(score);

    if (!segregationObj[field]) {
      segregationObj[field] = {
        range_0_20: 0,
        range_20_40: 0,
        range_40_60: 0,
        range_60_80: 0,
        range_80_100: 0,
      };
    }

    if (scoreValue >= 0 && scoreValue <= 20) {
      segregationObj[field].range_0_20++;
    } else if (scoreValue > 20 && scoreValue <= 40) {
      segregationObj[field].range_20_40++;
    } else if (scoreValue > 40 && scoreValue <= 60) {
      segregationObj[field].range_40_60++;
    } else if (scoreValue > 60 && scoreValue <= 80) {
      segregationObj[field].range_60_80++;
    } else if (scoreValue > 80 && scoreValue <= 100) {
      segregationObj[field].range_80_100++;
    }
  };

  useEffect(() => {
    // console.log(user.token)
    getStudents(user.token).then((res) => {
      setStudents(res.data);

      segregateScores(
        res.data.filter((student) => parseInt(student.passing_year) == 2024)
      );

      const deptObj = {};
      const cgpaObj = {};

      res.data.forEach((student) => {
        //dept

        const department = student.dept;

        // Check if the department already exists as a key in the object
        if (department in deptObj) {
          // Increment the count by 1
          deptObj[department]++;
          cgpaObj[department] += parseFloat(student.cgpa);
        } else {
          // Initialize the count to 1
          deptObj[department] = 1;
          cgpaObj[department] = parseFloat(student.cgpa);
        }
      });

      console.log(cgpaObj);

      Object.keys(cgpaObj).forEach((dept) => {
        cgpaObj[dept] = cgpaObj[dept] / deptObj[dept];
      });

      setDepartmentCgpa(cgpaObj);
      setDepartmentCount(deptObj);
    });
  }, []);

  useEffect(() => {
    setDeptData({
      labels: Object.keys(departmentCount),
      datasets: [
        {
          label: "No of Students in each Department",
          data: Object.values(departmentCount),
          backgroundColor: "#393AA1",
        },
      ],
    });

    setCgpaData({
      labels: Object.keys(departmentCgpa),
      datasets: [
        {
          label: "CGPA in each Department",
          data: Object.values(departmentCgpa),
          backgroundColor: "#393AA1",
        },
      ],
    });
  }, [departmentCount]);

  return (
    <div className="w-full m-h-screen">
      <NavbarAdmin></NavbarAdmin>
      <div className="mt-[5rem] mx-auto w-[30%] flex justify-evenly  items-center">
        <Button onClick={() => setMode("competitive")} variant="contained">
          Competitive Score
        </Button>
        <Button onClick={() => setMode("academic")} variant="contained">
          Academics
        </Button>
        <Button onClick={() => setMode("students")} variant="contained">
          Students
        </Button>
      </div>
      {mode != "students" && (
        <div className="mt-[5rem] mx-auto w-[70%] flex justify-evenly items-center">
          <div className="w-[20%]">
            <h1 className="mb-4 text-md font-semibold">Filter by year</h1>
            <select
              onChange={(e) => {
                setCurrentYear(e.target.value);
                let studentsByDept = students
                  .filter((student) => student.dept == currentDept)
                  .filter(
                    (student) =>
                      parseInt(student.passing_year) == parseInt(e.target.value)
                  );
                segregateScores(studentsByDept);
              }}
              className="w-full"
              style={{ border: "solid #454545 1px" }}
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="w-[20%]">
            <h1 className="mb-4 text-sm font-semibold">Filter by Department</h1>
            <select
              onChange={(e) => {
                setCurrentDept(e.target.value);
                let studentsByDept = students
                  .filter((student) => student.passing_year == currentYear)
                  .filter((student) => student.dept == e.target.value);
                segregateScores(studentsByDept);
              }}
              className="w-full"
              style={{ border: "solid #454545 1px" }}
            >
              <option>IT</option>
              <option>CSE</option>
              <option>EEE</option>
            </select>
          </div>
        </div>
      )}
      <div className=" flex flex-wrap justify-evenly items-center">
        {mode == "competitive" && (
          <>
            {segregation &&
              Object.keys(segregation).map((score) => {
                const data = {
                  labels,
                  datasets: [
                    {
                      label: score,
                      data:
                        segregation &&
                        segregation[score] &&
                        Object.values(segregation[score]),
                      backgroundColor: "#393AA1",
                    },
                  ],
                };
                const options = {
                  responsive: true,

                  plugins: {
                    title: {
                      display: true,
                      text: score,
                    },
                  },
                };
                return (
                  <div className="w-[400px] h-fit mt-10">
                    <Bar options={options} data={data} />
                  </div>
                );
              })}
          </>
        )}
        {mode == "academic" && (
          <>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={optionsDept} data={deptData} />
            </div>

            <div className="w-[400px] h-fit mt-10">
              <Bar options={optionsCGPA} data={cgpaData} />
            </div>
            {cgpaAllDept && cgpaAllDept.labels.length > 0 && (
              <div className="w-[400px] h-fit mt-10">
                <Bar options={optionsCGPA} data={cgpaAllDept} />
              </div>
            )}

            <div className="w-[320px] h-fit mt-10 text-[#454545]">
              <h1 className="text-[1rem] font-bold mb-4">
                Competitive top 10 students
              </h1>
              <div className="w-full p-[.5rem] bg-[#393AA1]  rounded-md">
                <h1 className="text-white font-semibold">Solomon</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]   mt-1 rounded-md">
                <h1 className="text-white font-semibold">Prasanna</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Lohith</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Akash</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Pavankrishan</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Srilatha</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Bhuvana</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Santhosh</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Shyam</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Gopal</h1>
              </div>
            </div>
            <div className="w-[320px] h-fit mt-10">
              <h1 className="text-[1rem] font-bold mb-4 text-[#454545]">
                Competitive top 10 students
              </h1>
              <div className="w-full p-[.5rem] bg-[#393AA1]  rounded-md">
                <h1 className="text-white font-semibold">Solomon</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]   mt-1 rounded-md">
                <h1 className="text-white font-semibold">Prasanna</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Lohith</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Akash</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Pavankrishan</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Srilatha</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Bhuvana</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Santhosh</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Shyam</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Gopal</h1>
              </div>
            </div>
            <div className="w-[320px] h-fit mt-10">
              <h1 className="text-[1rem] font-bold mb-4 text-[#454545]">
                Competitive top 10 students
              </h1>
              <div className="w-full p-[.5rem] bg-[#393AA1]  rounded-md">
                <h1 className="text-white font-semibold">Solomon</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]   mt-1 rounded-md">
                <h1 className="text-white font-semibold">Prasanna</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Lohith</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Akash</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Pavankrishan</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Srilatha</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Bhuvana</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Santhosh</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Shyam</h1>
              </div>
              <div className="w-full p-[.5rem] bg-[#393AA1]  mt-1 rounded-md">
                <h1 className="text-white font-semibold">Gopal</h1>
              </div>
            </div>
          </>
        )}
        {mode == "students" && <Filter user={user} />}
      </div>
      <FooterAdmin />
    </div>
  );
};

export default StudentDashboard;
