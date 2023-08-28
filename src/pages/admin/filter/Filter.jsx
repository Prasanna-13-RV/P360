import { MaterialReactTable } from "material-react-table";
import React, { useMemo, useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import axios from "axios";
import { getStudents } from "../../../axios/student.axios";

function Filter({user}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getStudents(user.token).then(({ data: d }) => {
      setData(
        d.map((a) => ({
          ...a,
          isActive: true,
          passing_year: parseInt(a.passing_year),
          joining_year: parseInt(a.joining_year),
          leetcode_score: parseInt(a.leetcode_score),
        }))
      );
    });
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "register_number",
        header: "Register number",
        filterVariant: "text",
      },
      {
        accessorKey: "fname",
        header: "First Name",
        filterVariant: "text",
      },
      {
        accessorKey: "lname",
        header: "Last Name",
        filterVariant: "text",
      },
      {
        accessorKey: "email",
        header: "Email",
        filterVariant: "text",
      },
      {
        accessorKey: "gender",
        header: "Gender",
        filterVariant: "text",
      },
      {
        accessorKey: "contact",
        header: "Contact",
        filterVariant: "text",
      },
      {
        accessorKey: "dob",
        header: "DOB",
        filterVariant: "text",
      },
      {
        accessorKey: "cgpa",
        header: "CGPA",
        filterVariant: "text",
      },
      {
        accessorKey: "_10th_mark",
        header: "10th Mark",
        filterVariant: "text",
      },
      {
        accessorKey: "_10th_school_name",
        header: "10th School Name",
        filterVariant: "text",
      },
      {
        accessorKey: "_12th_mark",
        header: "12th Mark",
        filterVariant: "text",
      },
      {
        accessorKey: "_12th_school_name",
        header: "12th School Name",
        filterVariant: "text",
      },
      {
        accessorKey: "father_name",
        header: "Father Name",
        filterVariant: "text",
      },
      {
        accessorKey: "father_phone",
        header: "Father Phone",
        filterVariant: "text",
      },
      {
        accessorKey: "mother_name",
        header: "Mother Name",
        filterVariant: "text",
      },
      {
        accessorKey: "mother_phone",
        header: "Mother Phone",
        filterVariant: "text",
      },
      {
        accessorKey: "dept",
        header: "Department",
        filterVariant: "multi-select",
        filterSelectOptions: Array(
            ...new Set(data.map((d) =>  d.dept))
          ).map((d) => d),
      },
      {
        accessorKey: "passing_year",
        header: "Passing Year",
        filterVariant: "multi-select",
        filterSelectOptions: Array(
          ...new Set(data.map((d) => parseInt(d.passing_year)))
        ).map((d) => d),
      },
      {
        accessorKey: "joining_year",
        header: "Joining Year",
        filterVariant: "multi-select",
        filterSelectOptions: Array(
          ...new Set(data.map((d) => parseInt(d.joining_year)))
        ).map((d) => d),
      },
      //   {
      //     accessorKey: "leetcode_score",
      //     header: "Leetcode Score",
      //     Cell: ({ cell }) => cell.getValue().toLocaleString(),
      //     filterVariant: "range-slider",
      //     filterFn: "betweenInclusive",
      //     muiTableHeadCellFilterSliderProps: {
      //       marks: true,
      //       max: Math.max.apply(
      //         Math,
      //         data.map((d) => parseInt(d.leetcode_score))
      //       ),
      //       min: 0,
      //       step: 10,
      //     },
      //   },
      //   {
      //     accessorKey: "codechef_score",
      //     header: "Codechef Score",
      //     Cell: ({ cell }) => cell.getValue().toLocaleString(),
      //     filterVariant: "range-slider",
      //     filterFn: "betweenInclusive",
      //     muiTableHeadCellFilterSliderProps: {
      //       marks: true,
      //       max: Math.max.apply(
      //         Math,
      //         data.map((d) => d.codechef_score)
      //       ),
      //       min: 0,
      //       step: 10,
      //     },
      //   },
      // {
      //   accessorKey: "chefdivision_score",
      //   header: "Chef Division Score",
      //   Cell: ({ cell }) => cell.getValue().toLocaleString(),
      //   filterVariant: "range-slider",
      //   filterFn: "betweenInclusive",
      //   muiTableHeadCellFilterSliderProps: {
      //     marks: true,
      //     max: Math.max.apply(
      //       Math,
      //       data.map((d) => d.chefdivision_score)
      //     ),
      //     min: 0,
      //     step: 10,
      //   },
      // },
      // {
      //   accessorKey: "codeforce_score",
      //   header: "Code Force Score",
      //   Cell: ({ cell }) => cell.getValue().toLocaleString(),
      //   filterVariant: "range-slider",
      //   filterFn: "betweenInclusive",
      //   muiTableHeadCellFilterSliderProps: {
      //     marks: true,
      //     max: Math.max.apply(
      //       Math,
      //       data.map((d) => d.codeforce_score)
      //     ),
      //     min: 0,
      //     step: 10,
      //   },
      // },
    ],
    []
  );
  return (
    <>
      <div className="w-[80%]">
        <MaterialReactTable
          columns={columns}
          data={data && data}
          enableRowNumbers
          initialState={{ showColumnFilters: true }}
          muiTablePaperProps={{
            elevation: 0,
          }}
        />
      </div>
    </>
  );
}

// const data = [
//   {
//     isActive: true,
//     register_number: 1,
//     name: "loki",
//     department: "IT",
//     year: 4,
//     college_ranking: 400,
//     department_ranking: 100,
//     problem_solving_score: 0,
//     leetcode_score: 0,
//     codechef_score: 0,
//     chefdivision_score: 0,
//     codeforce_score: 0,
//   },
//   {
//     isActive: true,
//     register_number: 2,
//     name: "loki",
//     department: "CSE",
//     year: 4,
//     college_ranking: 400,
//     department_ranking: 100,
//     problem_solving_score: 0,
//     leetcode_score: 0,
//     codechef_score: 0,
//     chefdivision_score: 0,
//     codeforce_score: 0,
//   },
//   {
//     isActive: true,
//     register_number: 3,
//     name: "loki",
//     department: "ECE",
//     year: 4,
//     college_ranking: 400,
//     department_ranking: 100,
//     problem_solving_score: 0,
//     leetcode_score: 0,
//     codechef_score: 0,
//     chefdivision_score: 0,
//     codeforce_score: 0,
//   },
//   {
//     isActive: true,
//     register_number: 4,
//     name: "loki",
//     department: "EEE",
//     year: 4,
//     college_ranking: 400,
//     department_ranking: 100,
//     problem_solving_score: 0,
//     leetcode_score: 0,
//     codechef_score: 0,
//     chefdivision_score: 0,
//     codeforce_score: 0,
//   },
//   {
//     isActive: true,
//     register_number: 5,
//     name: "loki",
//     department: "MECH",
//     year: 4,
//     college_ranking: 400,
//     department_ranking: 100,
//     problem_solving_score: 0,
//     leetcode_score: 0,
//     codechef_score: 0,
//     chefdivision_score: 0,
//     codeforce_score: 0,
//   },
//   {
//     isActive: true,
//     register_number: 6,
//     name: "loki",
//     department: "CSBS",
//     year: 4,
//     college_ranking: 400,
//     department_ranking: 100,
//     problem_solving_score: 0,
//     leetcode_score: 0,
//     codechef_score: 0,
//     chefdivision_score: 0,
//     codeforce_score: 0,
//   },
// ];

export default Filter;
