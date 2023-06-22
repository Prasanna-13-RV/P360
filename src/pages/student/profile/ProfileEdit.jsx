import React, { useState } from "react";
import ProfileSemMarksEdit from "../../../components/profile/ProfileSemMarksEdit";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

function ProfileEdit() {
    const [cgpa, setCgpa] = useState(9.1);
    const [singleSkill, setSingleSkill] = useState("");

    const data = {
        userId: "prasanna",
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

    const [skills, setSkills] = useState(data.skills);

    const marks = [
        {
            userId: "prasanna",
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
                    subject: "Tamil",
                    marks: 100,
                },
                {
                    subject: "English",
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
            userId: "prasanna",
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

    const handleSkill = () => {
        if (singleSkill) {
            setSkills((prev) => {
                return [...prev, singleSkill];
            });
        }
    };

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
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            type="text"
                                            id="passingYear"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder="First Name"
                                            defaultValue={data.fname}
                                            required
                                        />
                                        <input
                                            type="text"
                                            id="passingYear"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder="Last Name"
                                            defaultValue={data.lname}
                                            required
                                        />
                                    </div>
                                </h1>
                                <div>
                                    <div className="flex gap-2 py-4">
                                        <input
                                            type="text"
                                            id="passingYear"
                                            class="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                            placeholder="Add Skills"
                                            onChange={(e) => {
                                                setSingleSkill(e.target.value);
                                            }}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="w-[25%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                                            onClick={handleSkill}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    {skills.map((res) => {
                                        return (
                                            <>
                                                <div
                                                    class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                                    // delete current item
                                                    onClick={(e) => {
                                                        console.log(e.target);
                                                        setSkills((prev) => {
                                                            return prev.filter(
                                                                (skill) =>
                                                                    skill !==
                                                                    res
                                                            );
                                                        });
                                                    }}
                                                >
                                                    {res}
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                                <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li class="flex items-center py-3">
                                        <span>Year of Passing</span>
                                        <span class="ml-auto">
                                            <span class="ml-auto">
                                                <input
                                                    type="text"
                                                    id="passingYear"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data.passingYear
                                                    }
                                                    required
                                                />
                                            </span>
                                        </span>
                                    </li>
                                    <li class="flex items-center py-3">
                                        <span>CGPA</span>
                                        <span class="ml-auto">
                                            <input
                                                type="text"
                                                id="cgpa"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={cgpa}
                                                required
                                            />
                                        </span>
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
                                    <span>Competetive Scores</span>
                                </div>
                                <div class="grid">
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="p360Score"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            P360 Score
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="p360Score"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].p360Score
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="leetCode"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            LeetCode
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="leetCode"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].leetCode
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="codeChef"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            CodeChef
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="codeChef"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].codeChef
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="codeForces"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            CodeForces
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="codeForces"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].codeForces
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="hackerRank"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            HackerRank
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="hackerRank"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].hackerRank
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="codeDivision"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            CodeDivision
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="codeDivision"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].codeDivision
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="hackerEarth"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            HackerEarth
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="hackerEarth"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].hackerEarth
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="interviewBit"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            interviewBit
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="interviewBit"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={
                                                    compMarks[0].interviewBit
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <label
                                            htmlFor="gfg"
                                            class="px-4 py-1 font-semibold"
                                        >
                                            GeeksForGeeks
                                        </label>
                                        <div class="px-4 py-1 text-right">
                                            <input
                                                type="text"
                                                id="gfg"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                placeholder="123456789"
                                                defaultValue={compMarks[0].gfg}
                                                required
                                            />
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
                                            <label
                                                htmlFor="first_name"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                First Name
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="Tony"
                                                    defaultValue={data.fname}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="lname"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Last Name
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="lname"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="Stark"
                                                    defaultValue={data.lname}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="gender"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Gender
                                            </label>
                                            <div class="px-4 py-2">
                                                <select
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    id="gender"
                                                    defaultValue={data.gender}
                                                >
                                                    <option hidden="hidden">
                                                        Select your Gender
                                                    </option>
                                                    <option value="male">
                                                        Male
                                                    </option>
                                                    <option value="female">
                                                        Female
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="contact"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Contact No.
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="contact"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={data.contact}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="address"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Current Address
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="address"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={data.address}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="paddress"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Permanant Address
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="paddress"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={data.paddress}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="dept"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Department
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="dept"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={data.dept}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="email"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Email
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={data.email}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* full information */}
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="dob"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Birthday
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="date"
                                                    id="dob"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={data.dob}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="joiningYear"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Year of Joining
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="joiningYear"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data.joiningYear
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="fatherName"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Father Name
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="fatherName"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data.fatherName
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="fatherPhone"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Father Number
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="fatherPhone"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data.fatherPhone
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="motherName"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Mother Name
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="motherName"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data.motherName
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <label
                                                htmlFor="motherPhone"
                                                class="px-4 py-2 font-semibold"
                                            >
                                                Mother Number
                                            </label>
                                            <div class="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="motherPhone"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data.motherPhone
                                                    }
                                                    required
                                                />
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
                                            {marks.map((mark) => {
                                                return (
                                                    <>
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester1
                                                            }
                                                            semesterNo={
                                                                "Semester 1"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester2
                                                            }
                                                            semesterNo={
                                                                "Semester 2"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester3
                                                            }
                                                            semesterNo={
                                                                "Semester 3"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester4
                                                            }
                                                            semesterNo={
                                                                "Semester 4"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester5
                                                            }
                                                            semesterNo={
                                                                "Semester 5"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester6
                                                            }
                                                            semesterNo={
                                                                "Semester 6"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester7
                                                            }
                                                            semesterNo={
                                                                "Semester 7"
                                                            }
                                                        />
                                                        <ProfileSemMarksEdit
                                                            mark={
                                                                mark.semester8
                                                            }
                                                            semesterNo={
                                                                "Semester 8"
                                                            }
                                                        />
                                                    </>
                                                );
                                            })}
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
                                                <div class="text-gray-500">
                                                    <div class="grid grid-cols-2">
                                                        <label
                                                            htmlFor="schoolName10"
                                                            class="px-4 py-2 font-semibold text-md"
                                                        >
                                                            SSLC School Name
                                                        </label>
                                                        <div class="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                id="schoolName10"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                                placeholder="123456789"
                                                                defaultValue={
                                                                    data.schoolName10
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <label
                                                            htmlFor="schoolName10Mark"
                                                            class="px-4 py-2 font-semibold"
                                                        >
                                                            SSLC Mark
                                                        </label>
                                                        <div class="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                id="schoolName10Mark"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                                placeholder="123456789"
                                                                defaultValue={
                                                                    data.schoolName10Mark
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="text-teal-600">
                                                    HSC
                                                </div>
                                                <div class="text-gray-500">
                                                    <div class="grid grid-cols-2">
                                                        <label
                                                            htmlFor="schoolName12"
                                                            class="px-4 py-2 font-semibold text-md"
                                                        >
                                                            HSC School Name
                                                        </label>
                                                        <div class="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                id="schoolName12"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                                placeholder="123456789"
                                                                defaultValue={
                                                                    data.schoolName12
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="grid grid-cols-2">
                                                        <label
                                                            htmlFor="schoolName12Mark"
                                                            class="px-4 py-2 font-semibold"
                                                        >
                                                            HSC Mark
                                                        </label>
                                                        <div class="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                id="schoolName12Mark"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                                placeholder="123456789"
                                                                defaultValue={
                                                                    data.schoolName12Mark
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                    </div>
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
            <Footer />
        </>
    );
}

export default ProfileEdit;
