import { useState } from "react";
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

export const options1 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "LeetCode",
    },
  },
};
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

export const options10 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "No of Students by Department",
    },
  },
};
export const options11 = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Semester Chart",
    },
  },
};
export const options12 = {
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

export const data1 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data2 = {
  labels,
  datasets: [
    {
      label: "p360Score",
      data: [10, 70, 20, 66, 11],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data3 = {
  labels,
  datasets: [
    {
      label: "CodeChef",
      data: [84, 77, 22, 39, 15],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data4 = {
  labels,
  datasets: [
    {
      label: "CodeForces",
      data: [10, 27, 61, 38, 80],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data5 = {
  labels,
  datasets: [
    {
      label: "HackerRank",
      data: [76, 51, 28, 30, 30],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data6 = {
  labels,
  datasets: [
    {
      label: "CodeDivision",
      data: [10, 55, 30, 20, 17],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data7 = {
  labels,
  datasets: [
    {
      label: "HackerEarth",
      data: [44, 26, 28, 77, 80],
      backgroundColor: "#393AA1",
    },
  ],
};
export const data8 = {
  labels,
  datasets: [
    {
      label: "InterviewBit",
      data: [60, 50, 88, 35, 71],
      backgroundColor: "#393AA1",
    },
  ],
};

export const data9 = {
  labels,
  datasets: [
    {
      label: "GFG",
      data: [61, 30, 88, 28, 51],
      backgroundColor: "#393AA1",
    },
  ],
};

export const data11 = {
  labels: [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ],
  datasets: [
    {
      label: "Semester",
      data: [61, 85, 48, 68, 71, 18, 51, 100],
      backgroundColor: "#393AA1",
    },
  ],
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentDashboard = () => {
  const [mode, setMode] = useState("competitive");

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
            <h1 className="mb-4 text-sm font-semibold">Filter by year</h1>
            <select className="w-full" style={{ border: "solid #454545 1px" }}>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="w-[20%]">
            <h1 className="mb-4 text-sm font-semibold">Filter by Department</h1>
            <select className="w-full" style={{ border: "solid #454545 1px" }}>
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
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options1} data={data1} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options2} data={data2} />
            </div>
            <div className="w-[400px] h-fit  mt-10">
              <Bar options={options3} data={data3} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options4} data={data4} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options5} data={data5} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options6} data={data6} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options7} data={data7} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options8} data={data8} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options9} data={data9} />
            </div>
          </>
        )}
        {mode == "academic" && (
          <>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options10} data={data1} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options11} data={data11} />
            </div>
            <div className="w-[400px] h-fit mt-10">
              <Bar options={options12} data={data1} />
            </div>
          </>
        )}
        {mode == "students" && <Filter />}
      </div>
      <FooterAdmin />
    </div>
  );
};

export default StudentDashboard;
