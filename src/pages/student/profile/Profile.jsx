import React, { useEffect, useState } from "react";
import ProfileSemMarks from "../../../components/profile/ProfileSemMarks";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";


function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const number = localStorage.getItem("rollno");
        const number = 1234;

        axios.get(`http://localhost:8080/student/${number}`).then((res) => {
            setData(res.data);
        });
    }, []);
    
    const data1 = {
        userId: "solo1",
        fname: "Prasanna",
        lname: "RV",
        email: "prasanna@gmail.com",
        gender: "male",
        address: "Beech Creek, PA",
        paddress: "Beech Creek, PA",
        contact: "99999",
        dob: "04/06/2003",
        schoolName10: "Velammal Matric Higher Secondary School",
        schoolName12: "Velammal Matric Higher Secondary School",
        schoolName10Mark: 478,
        schoolName12Mark: 513,
        fatherName: "Velmurugan S",
        fatherPhone: "123456789",
        motherName: "Rajeswari V",
        motherPhone: "987654321",
        passingYear: 2024,
        joiningYear: 2020,
        dept: "IT",
        skills: ["frontend", "backend", "fullstack", "Java"],
        marksId: 1,
        compId: 1,
    };

    const marks = data.marks;

    const marks1 = [
        {
            userId: "solo1",
            marksId: 1,
            semester1: [
                {
                    subject: "Maths",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester2: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester3: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester4: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester5: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester6: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester7: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
            semester8: [
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Physics",
                    marks: 100,
                },
                {
                    subject: "Maths",
                    marks: 100,
                },
            ],
        },
    ];

    const compMarks = [
        {
            compId: 1,
            userId: "solo1",
            p360Score: "100/10000",
            leetCode: "100/10000",
            codeChef: "100/10000",
            codeForces: "100/10000",
            hackerRank: "100/10000",
            codeDivision: "100/10000",
            hackerEarth: "100/10000",
            interviewBit: "100/10000",
            gfg: "100/10000",
        },
    ];

    return (
        <>
            <Navbar />
            <div class="bg-gray-100">
                <div class="container mx-auto p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">
                        <div class="w-full md:w-3/12 md:mx-2">
                            <div class="bg-white p-3 border-t-4 border-green-400">
                                <div class="image overflow-hidden">
                                    <img
                                        class="h-auto w-full mx-auto"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt=""
                                    />
                                </div>
                                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                                    {data?.fname + " " + data?.lname}
                                </h1>
                                <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li class="flex items-center py-3">
                                        <span>Year of Passing</span>
                                        <span class="ml-auto">
                                            <span class="ml-auto">
                                                {data?.passing_year}
                                            </span>
                                        </span>
                                    </li>
                                    <li class="flex items-center py-3">
                                        <span>CGPA</span>
                                        <span class="ml-auto">9.1</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="my-4"></div>

                            <div class="bg-white p-3 hover:shadow">
                                <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span class="text-green-500">
                                        <svg
                                            class="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Skills</span>
                                </div>
                                <div className="flex flex-wrap justify-center items-center">
                                    {data?.skills?.map((res) => {
                                        return (
                                            <>
                                                <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                    {res}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>

                            <div class="my-4"></div>

                            <div class="bg-white p-3 hover:shadow">
                                <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span class="text-green-500">
                                        <svg
                                            class="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Social Media</span>
                                </div>
                                <div class="grid">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1">
                                            <a href="https://github.com">
                                                Github
                                            </a>
                                        </div>
                                        <div class="px-4 py-1">
                                            <a href="https://www.linkedin.com/">
                                                Linkedin
                                            </a>
                                        </div>
                                        <div class="px-4 py-1">
                                            <a href="https://www.linkedin.com/">
                                                Instagram
                                            </a>
                                        </div>
                                        <div class="px-4 py-1">
                                            <a href="https://www.linkedin.com/">
                                                Facebook
                                            </a>
                                        </div>
                                        {/* <div class="px-4 py-1 text-right">
                                            {compMarks[0].p360Score}
                                        </div> */}
                                    </div>
                                    <div class="grid grid-cols-2">
                                        {/* <div class="px-4 py-1 text-right">
                                            {compMarks[0].p360Score}
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div class="my-4"></div>

                            <div class="bg-white p-3 hover:shadow">
                                <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span class="text-green-500">
                                        <svg
                                            class="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Competetive Scores</span>
                                </div>
                                <div class="grid">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            P360 Score
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.p360_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            LeetCode
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.leetcode_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            CodeChef
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.codechef_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            CodeForces
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.code_forces_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            HackerRank
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.hackerrank_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            CodeDivision
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.code_division_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            HackerEarth
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.hacker_earth_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            InterviewBit
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.interview_bit_score}
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-1 font-semibold">
                                            GeeksForGeeks
                                        </div>
                                        <div class="px-4 py-1 text-right">
                                            {data?.geeks_for_geeks_score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-9/12 mx-2 h-64">
                            <div class="bg-white p-3 shadow-sm rounded-sm">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg
                                            class="h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">About</span>
                                </div>
                                <div class="text-gray-700">
                                    <div class="grid md:grid-cols-2 text-sm">
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                First Name
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.fname}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Last Name
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.lname}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Gender
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.gender}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Contact No.
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.contact}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Current Address
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.address}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Permanant Address
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.paddress}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Department
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.dept}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Email
                                            </div>
                                            <div class="px-4 py-2">
                                                <a
                                                    class="text-blue-800"
                                                    href="mailto:jane@example.com"
                                                >
                                                    {data?.email}
                                                </a>
                                            </div>
                                        </div>
                                        {/* full information */}
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Birthday
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.dob}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Year of Joining
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.joining_year}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Father Name
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.father_name}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Father Number
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.father_phone}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Mother Name
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.mother_name}
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">
                                                Mother Number
                                            </div>
                                            <div class="px-4 py-2">
                                                {data?.mother_phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                Show Full Information
                            </button> */}
                            </div>

                            <div class="my-4"></div>

                            <div class="bg-white p-3 shadow-sm rounded-sm">
                                <div class="grid grid-cols-2">
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    class="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">
                                                Semester Marks
                                            </span>
                                        </div>
                                        <ul class="list-inside space-y-2">
                                            <ProfileSemMarks marks={marks} />
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    class="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        fill="#fff"
                                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                    />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">
                                                Education
                                            </span>
                                        </div>
                                        <ul class="list-inside space-y-2">
                                            <li>
                                                <div class="text-teal-600">
                                                    SSLC
                                                </div>
                                                <div class="text-gray-500 text-xs">
                                                    {data?._10th_school_name +
                                                        " - " +
                                                        data?._10th_mark}
                                                </div>
                                            </li>
                                            <li>
                                                <div class="text-teal-600">
                                                    HSC
                                                </div>
                                                <div class="text-gray-500 text-xs">
                                                    {data?._12th_school_name +
                                                        " - " +
                                                        data?._12th_mark}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="my-4"></div>

                            <div class="bg-white p-3 shadow-sm rounded-sm">
                                <div class="grid grid-cols-2">
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    class="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">
                                                Certificates
                                            </span>
                                        </div>
                                        <div class="text-teal-600">
                                            Certificate Name
                                        </div>
                                        <div class="text-gray-500 text-xs">
                                            <a
                                                href={"link"}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Certificate Link
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    class="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        fill="#fff"
                                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                    />
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                    />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">
                                                Internship
                                            </span>
                                        </div>
                                        <ul class="list-inside space-y-2">
                                            <li>
                                                <div class="text-teal-600">
                                                    Internship Name
                                                </div>
                                                <div class="text-gray-500 text-xs">
                                                    <a
                                                        href={"link"}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Internship Certificate
                                                        Link
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Profile;
