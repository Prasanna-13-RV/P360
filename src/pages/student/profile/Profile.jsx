import React, { useEffect, useState } from "react";
import ProfileSemMarks from "../../../components/profile/ProfileSemMarks";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Profile({ user }) {
    const [data, setData] = useState([]);
    const [skills, setSkills] = useState();
    const [internshipArray, setInternshipArray] = useState([]);
    const [certificateArray, setCertificateArray] = useState([]);
    const [projectArray, setProjectArray] = useState([]);

    const location = useLocation();
    const studentId = location.pathname.split("/")[2];
    // console.log(location.pathname.split("/")[2], "location");

    useEffect(() => {
        console.log(user.role);
        // console.log(user.token);
        // console.log(user.userDetails.regno);
        axios
            .get(`http://localhost:8080/student/${studentId}`, 
            // {
            //     headers: {
            //         Authorization: `Bearer ${user.token}`,
            //     },
            // }
            )
            .then((res) => {
                setData(res.data);
                setSkills(res.data.skillset);
                setInternshipArray(res.data.internships);
                setCertificateArray(res.data.certificates);
                setProjectArray(res.data.projects);
            });
    }, []);
    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <div className="container mx-auto p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img
                                        className="h-auto w-full mx-auto"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                                        {data?.fname + " " + data?.lname}
                                    </h1>
                                    <a
                                        href={`/profile/resume/${studentId}`}
                                        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Year of Passing</span>
                                        <span className="ml-auto">
                                            <span className="ml-auto">
                                                {data?.passing_year}
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>CGPA</span>
                                        <span className="ml-auto">9.1</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="my-4"></div>

                            <div className="bg-white p-3 hover:shadow">
                                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Skills</span>
                                </div>
                                <div className="flex flex-wrap justify-center items-center">
                                    {skills?.map((res) => {
                                        return (
                                            <>
                                                <div className="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                    {res}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="my-4"></div>

                            <div className="bg-white p-3 hover:shadow">
                                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Social Media</span>
                                </div>
                                <div className="grid">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1">
                                            <a href="https://github.com">
                                                Github
                                            </a>
                                        </div>
                                        <div className="px-4 py-1">
                                            <a href="https://www.linkedin.com/">
                                                Linkedin
                                            </a>
                                        </div>
                                        <div className="px-4 py-1">
                                            <a href="https://www.linkedin.com/">
                                                Instagram
                                            </a>
                                        </div>
                                        <div className="px-4 py-1">
                                            <a href="https://www.linkedin.com/">
                                                Facebook
                                            </a>
                                        </div>
                                        {/* <div className="px-4 py-1 text-right">
                                            {compMarks[0].p360Score}
                                        </div> */}
                                    </div>
                                    <div className="grid grid-cols-2">
                                        {/* <div className="px-4 py-1 text-right">
                                            {compMarks[0].p360Score}
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="my-4"></div>

                            <div className="bg-white p-3 hover:shadow">
                                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <span className="text-green-500">
                                        <svg
                                            className="h-5 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>Competetive Scores</span>
                                </div>
                                <div className="grid">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            P360 Score
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.p360_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            LeetCode
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.leetcode_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            CodeChef
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.codechef_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            CodeForces
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.code_forces_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            HackerRank
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.hackerrank_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            CodeDivision
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.code_division_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            HackerEarth
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.hacker_earth_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            InterviewBit
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.interview_bit_score}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-1 font-semibold">
                                            GeeksForGeeks
                                        </div>
                                        <div className="px-4 py-1 text-right">
                                            {data?.geeks_for_geeks_score}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg
                                            className="h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                First Name
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.fname}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Last Name
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.lname}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Gender
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.gender}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Contact No.
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.contact}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Current Address
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.address}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Permanant Address
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.paddress}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Department
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.dept}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Email
                                            </div>
                                            <div className="px-4 py-2">
                                                <a
                                                    className="text-blue-800"
                                                    href="mailto:jane@example.com"
                                                >
                                                    {data?.email}
                                                </a>
                                            </div>
                                        </div>
                                        {/* full information */}
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Birthday
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.dob}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Year of Joining
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.joining_year}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Father Name
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.father_name}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Father Number
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.father_phone}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Mother Name
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.mother_name}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">
                                                Mother Number
                                            </div>
                                            <div className="px-4 py-2">
                                                {data?.mother_phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                Show Full Information
                            </button> */}
                            </div>

                            <div className="my-4"></div>

                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    className="h-5"
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
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">
                                                Internship
                                            </span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            {internshipArray.map((e, index) => {
                                                return (
                                                    <>
                                                        <li>
                                                            <div className="text-teal-600">
                                                                {
                                                                    e.internship_name
                                                                }
                                                            </div>
                                                            <div className="text-gray-500 text-xs">
                                                                <a
                                                                    href={
                                                                        e.inernship_description
                                                                    }
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    Internship
                                                                    Certificate
                                                                    Link
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="py-3 sm:order-none order-1">
                                        <h2 className="text-lg font-poppins font-bold text-top-color">
                                            Education Background
                                        </h2>
                                        <div className="border-2 w-20 border-top-color my-3"></div>

                                        <div className="flex flex-col space-y-1">
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-xs text-gray-700">
                                                    SSLC
                                                </p>
                                                <p className="text-sm font-medium">
                                                    <span className="text-green-700">
                                                        {
                                                            data?._10th_school_name
                                                        }
                                                    </span>
                                                </p>
                                                <p className="font-bold text-xs text-gray-700 mb-2">
                                                    {data?._10th_mark}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-xs text-gray-700">
                                                    HSC
                                                </p>
                                                <p className="text-sm font-medium">
                                                    <span className="text-green-700">
                                                        {
                                                            data?._12th_school_name
                                                        }
                                                    </span>
                                                </p>
                                                <p className="font-bold text-xs text-gray-700 mb-2">
                                                    {data?._12th_mark}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4"></div>

                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    className="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">
                                                Certificates
                                            </span>
                                        </div>
                                        {certificateArray.map((e, index) => {
                                            return (
                                                <>
                                                    <div className="text-teal-600">
                                                        {e.certificateName}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        <a
                                                            href={
                                                                e.certificateLink
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            Certificate Link
                                                        </a>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg
                                                    className="h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">
                                                Projects
                                            </span>
                                        </div>
                                        {projectArray.map((e, index) => {
                                            return (
                                                <>
                                                    <div className="text-teal-600">
                                                        {e.projects}
                                                    </div>
                                                    <div className="">
                                                        {e.project_description}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {e.project_score}
                                                    </div>
                                                </>
                                            );
                                        })}
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
