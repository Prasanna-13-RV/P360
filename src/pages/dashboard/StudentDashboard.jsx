import React from "react";
import { TextField, Button } from "@mui/material";

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

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = ["100-80", "80-60", "60-40", "40-20", "20-0"];

export const data1 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data2 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data3 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data4 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data5 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data6 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data7 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
    },
  ],
};
export const data8 = {
  labels,
  datasets: [
    {
      label: "LeetCode",
      data: [100, 50, 20, 30, 10],
      backgroundColor: "#525FE1",
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
  return (
    <div className="w-full m-h-screen">
      <div className="mt-[5rem] mx-auto w-[70%] flex justify-evenly items-center">
        <Button variant="contained">Competitive Score</Button>
        <Button variant="contained">Academics</Button>
      </div>
      <div className="mt-[5rem] mx-auto w-[70%] flex justify-evenly items-center">
        <select className="w-[20%]" style={{ border: "solid #454545 1px" }}>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
        <select className="w-[20%]" style={{ border: "solid #454545 1px" }}>
          <option>IT</option>
          <option>CSE</option>
          <option>EEE</option>
        </select>
      </div>
      <div className=" flex flex-wrap justify-evenly items-center">
        <div className="w-[400px] h-fit mt-5">
          <Bar options={options} data={data1} />
        </div>
        <div className="w-[400px] h-fit mt-8">
          <Bar options={options} data={data2} />
        </div>
        <div className="w-[400px] h-fit  mt-8">
          <Bar options={options} data={data3} />
        </div>
        <div className="w-[400px] h-fit mt-8">
          <Bar options={options} data={data4} />
        </div>
        <div className="w-[400px] h-fit mt-8">
          <Bar options={options} data={data8} />
        </div>
        <div className="w-[400px] h-fit mt-8">
          <Bar options={options} data={data6} />
        </div>
        <div className="w-[400px] h-fit mt-8">
          <Bar options={options} data={data7} />
        </div>
        <div className="w-[400px] h-fit mt-8">
          <Bar options={options} data={data8} />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
