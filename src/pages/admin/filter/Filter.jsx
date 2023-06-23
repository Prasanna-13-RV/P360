import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import axios from "axios";

function Filter() {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:8080/api/students").then((res) => {
        //     // setStudentData(res.data);
        //     console.log(studentData);
        // });
    });

    // {
    //     "regno": "regno",
    //     "fname": "fname",
    //     "lname": "lname",
    //     "email": "email",
    //     "gender": "gender",
    //     "address": "address",
    //     "paddress": "paddress",
    //     "contact": "contact",
    //     "dob": "dob",
    //     "_10th_school_name": "_10th_school_name",
    //     "_12th_school_name": "_10th_school_name",
    //     "_10th_mark": "_10th_mark",
    //     "_12th_mark": "_12th_mark",
    //     "father_name": "father_name",
    //     "father_phone": "father_phone",
    //     "mother_name": "mother_name",
    //     "mother_phone": "mother_phone",
    //     "passing_year": "passing_year",
    //     "joining_year": "joining_year",
    //     "dept": "dept",
    //     "p360_score": "p360_score",
    //     "leetcode_score": "leetcode_score",
    //     "codechef_score": "codechef_score",
    //     "code_forces_score": "code_forces_score",
    //     "hackerrank_score": "hackerrank_score",
    //     "code_division_score": "code_division_score",
    //     "hacker_earth_score": "Hacker_earth_score",
    //     "interview_bit_score": "Interview_bit_score",
    //     "geeks_for_geeks_score": "Geeks_for_geeks_score"
    // }

    const columns = useMemo(
        () => [
            {
                accessorKey: "register_number",
                header: "Register number",
                filterVariant: "text",
            },
            {
                accessorKey: "name",
                header: "Name",
                filterVariant: "text",
            },
            {
                accessorKey: "department",
                header: "Department",
                filterVariant: "multi-select",
                filterSelectOptions: data.map((d) => d.department),
            },
            {
                accessorKey: "year",
                header: "Year",
                filterVariant: "multi-select",
                filterSelectOptions: data.map((d) => d.year),
            },
            {
                accessorKey: "college_ranking",
                header: "College Ranking",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive", // default (or between)
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.college_ranking)
                    ), //custom max (as opposed to faceted max)
                    min: 0, //custom min (as opposed to faceted min)
                    step: 10,
                },
            },
            {
                accessorKey: "department_ranking",
                header: "Department Ranking",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive",
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.department_ranking)
                    ),
                    min: 0,
                    step: 10,
                },
            },
            {
                accessorKey: "problem_solving_score",
                header: "Problem Solving Score",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive",
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.problem_solving_score)
                    ),
                    min: 0,
                    step: 10,
                },
            },
            {
                accessorKey: "leetcode_score",
                header: "Leetcode Score",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive",
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.leetcode_score)
                    ),
                    min: 0,
                    step: 10,
                },
            },
            {
                accessorKey: "codechef_score",
                header: "Codechef Score",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive",
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.codechef_score)
                    ),
                    min: 0,
                    step: 10,
                },
            },
            {
                accessorKey: "chefdivision_score",
                header: "Chef Division Score",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive",
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.chefdivision_score)
                    ),
                    min: 0,
                    step: 10,
                },
            },
            {
                accessorKey: "codeforce_score",
                header: "Code Force Score",
                Cell: ({ cell }) => cell.getValue().toLocaleString(),
                filterVariant: "range-slider",
                filterFn: "betweenInclusive",
                muiTableHeadCellFilterSliderProps: {
                    marks: true,
                    max: Math.max.apply(
                        Math,
                        data.map((d) => d.codeforce_score)
                    ),
                    min: 0,
                    step: 10,
                },
            },
        ],
        []
    );


    // const columns = useMemo(
    //     () => [
    //         {
    //             accessorKey: "register_number",
    //             header: "Register number",
    //             filterVariant: "text",
    //         },
    //         {
    //             accessorKey: "name",
    //             header: "Name",
    //             filterVariant: "text",
    //         },
    //         {
    //             accessorKey: "department",
    //             header: "Department",
    //             filterVariant: "multi-select",
    //             filterSelectOptions: data.map((d) => d.department),
    //         },
    //         {
    //             accessorKey: "year",
    //             header: "Year",
    //             filterVariant: "multi-select",
    //             filterSelectOptions: data.map((d) => d.year),
    //         },
    //         {
    //             accessorKey: "college_ranking",
    //             header: "College Ranking",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive", // default (or between)
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.college_ranking)
    //                 ), //custom max (as opposed to faceted max)
    //                 min: 0, //custom min (as opposed to faceted min)
    //                 step: 10,
    //             },
    //         },
    //         {
    //             accessorKey: "department_ranking",
    //             header: "Department Ranking",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive",
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.department_ranking)
    //                 ),
    //                 min: 0,
    //                 step: 10,
    //             },
    //         },
    //         {
    //             accessorKey: "problem_solving_score",
    //             header: "Problem Solving Score",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive",
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.problem_solving_score)
    //                 ),
    //                 min: 0,
    //                 step: 10,
    //             },
    //         },
    //         {
    //             accessorKey: "leetcode_score",
    //             header: "Leetcode Score",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive",
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.leetcode_score)
    //                 ),
    //                 min: 0,
    //                 step: 10,
    //             },
    //         },
    //         {
    //             accessorKey: "codechef_score",
    //             header: "Codechef Score",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive",
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.codechef_score)
    //                 ),
    //                 min: 0,
    //                 step: 10,
    //             },
    //         },
    //         {
    //             accessorKey: "chefdivision_score",
    //             header: "Chef Division Score",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive",
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.chefdivision_score)
    //                 ),
    //                 min: 0,
    //                 step: 10,
    //             },
    //         },
    //         {
    //             accessorKey: "codeforce_score",
    //             header: "Code Force Score",
    //             Cell: ({ cell }) => cell.getValue().toLocaleString(),
    //             filterVariant: "range-slider",
    //             filterFn: "betweenInclusive",
    //             muiTableHeadCellFilterSliderProps: {
    //                 marks: true,
    //                 max: Math.max.apply(
    //                     Math,
    //                     data.map((d) => d.codeforce_score)
    //                 ),
    //                 min: 0,
    //                 step: 10,
    //             },
    //         },
    //     ],
    //     []
    // );
    return (
        <>
            <div className="w-[80%]">
                <MaterialReactTable
                    columns={columns}
                    data={data}
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

const data = [
  {
    isActive: true,
    regno:"f",
    fname:"f",
    lname:"f",
    email:"f",
    gender:"f",
    address:"f",
    paddress:"f",
    contact:"f",
    dob:"f",
    _10th_school_name:"f",
    _12th_school_name:"f",
    _10th_mark:"f",
    _12th_mark:"f",
    father_name:"f",
    father_phone:"f",
    mother_name:"f",
    mother_phone:"f",
    passing_year:"f",
    joining_year:"f",
    dept:"f",
    p360_score:"f",
    leetcode_score:"f",
    codechef_score:"f",
    code_forces_score:"f",
    hackerrank_score:"f",
    code_division_score:"f",
    hacker_earth_score:"f",
    interview_bit_score:"f",
    geeks_for_geeks_score:"f",
  },
];



export default Filter;
