import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import axios from "axios";

function Filter() {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/students").then((res) => {
            setStudentData(res.data);
            console.log(studentData);
        });
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
        register_number: 1,
        name: "loki",
        department: "IT",
        year: 4,
        college_ranking: 400,
        department_ranking: 100,
        problem_solving_score: 0,
        leetcode_score: 0,
        codechef_score: 0,
        chefdivision_score: 0,
        codeforce_score: 0,
    },
    {
        isActive: true,
        register_number: 2,
        name: "loki",
        department: "CSE",
        year: 4,
        college_ranking: 400,
        department_ranking: 100,
        problem_solving_score: 0,
        leetcode_score: 0,
        codechef_score: 0,
        chefdivision_score: 0,
        codeforce_score: 0,
    },
    {
        isActive: true,
        register_number: 3,
        name: "loki",
        department: "ECE",
        year: 4,
        college_ranking: 400,
        department_ranking: 100,
        problem_solving_score: 0,
        leetcode_score: 0,
        codechef_score: 0,
        chefdivision_score: 0,
        codeforce_score: 0,
    },
    {
        isActive: true,
        register_number: 4,
        name: "loki",
        department: "EEE",
        year: 4,
        college_ranking: 400,
        department_ranking: 100,
        problem_solving_score: 0,
        leetcode_score: 0,
        codechef_score: 0,
        chefdivision_score: 0,
        codeforce_score: 0,
    },
    {
        isActive: true,
        register_number: 5,
        name: "loki",
        department: "MECH",
        year: 4,
        college_ranking: 400,
        department_ranking: 100,
        problem_solving_score: 0,
        leetcode_score: 0,
        codechef_score: 0,
        chefdivision_score: 0,
        codeforce_score: 0,
    },
    {
        isActive: true,
        register_number: 6,
        name: "loki",
        department: "CSBS",
        year: 4,
        college_ranking: 400,
        department_ranking: 100,
        problem_solving_score: 0,
        leetcode_score: 0,
        codechef_score: 0,
        chefdivision_score: 0,
        codeforce_score: 0,
    },
];



export default Filter;
