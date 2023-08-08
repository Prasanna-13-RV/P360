import React, { Fragment, useEffect, useState } from "react";
import ProfileSemMarksEdit from "../../../components/profile/ProfileSemMarksEdit";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import { SideProfileBar } from "../../../components/profile/profileFiles/SideProfileBar";
import { SemesterMarksProfile } from "../../../components/profile/profileFiles/SemesterMarksProfile";
import { SemesterBasic } from "../../../components/profile/profileFiles/SemesterBasic";

function ProfileEdit() {
    const [cgpa, setCgpa] = useState(9.1);
    const [singleSkill, setSingleSkill] = useState("");
    const [singleInternship, setSingleInternship] = useState("");
    const [singleCertificate, setSingleCertificate] = useState("");

    const [data, setData] = useState([]);
    const [sendingData, setSendingData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/student/1234`).then((res) => {
            setData(res.data);
            setSendingData(res.data);
            setSkills(res.data.skillset);
        });
    }, []);

    console.log(sendingData);

    const [marks, setMarks] = useState([
        {
            semester1: [
                {
                    subject: "Maths",
                    marks: 20,
                },
                {
                    subject: "Physics",
                    marks: 20,
                },
                {
                    subject: "English",
                    marks: 20,
                },
            ],
        },
        {
            semester2: [
                {
                    subject: "Maths",
                    marks: 20,
                },
                {
                    subject: "Physics",
                    marks: 20,
                },
                {
                    subject: "English",
                    marks: 20,
                },
            ],
        },
        { semester3: [] },
        { semester4: [] },
        { semester5: [] },
        { semester6: [] },
        { semester7: [] },
        { semester8: [] },
    ]);

    // console.log(sendingData);
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log(sendingData, "l love u   {____} ");
        axios
            .post(`http://localhost:8080/student/update/1234`, sendingData)
            .then((res) => {
                console.log(res.data);
            });
    };

    const data1 = {
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

    const [skills, setSkills] = useState();
    console.log(skills);
    const [internshipArray, setInternshipArray] = useState([]);
    const [certificateArray, setCertificateArray] = useState([]);

    const handleInternship = () => {
        if (singleInternship) {
            setInternshipArray((prev) => {
                return [...prev, singleInternship];
            });
        }
        console.log(internshipArray);
    };

    const handleCertificate = () => {
        if (singleCertificate) {
            setCertificateArray((prev) => {
                return [...prev, singleCertificate];
            });
        }
        console.log(certificateArray);
    };

    console.log(data);

    return (
        <>
            <Navbar />
            <div class="bg-gray-100">
                <div class="container mx-auto p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">
                        {data && skills && (
                            <SideProfileBar
                                data={data}
                                cgpa={cgpa}
                                setSingleSkill={setSingleSkill}
                                skills={skills}
                                singleSkill={singleSkill}
                                setSkills={setSkills}
                                handleProfileSubmit={handleProfileSubmit}
                                sendingData={sendingData}
                                setSendingData={setSendingData}
                            />
                        )}

                        <div class="w-full md:w-9/12 mx-2 h-64">
                            <SemesterBasic
                                handleProfileSubmit={handleProfileSubmit}
                                data={data}
                                setSendingData={setSendingData}
                            />

                            <div class="my-4"></div>

                            <SemesterMarksProfile
                                data={data}
                                sendingData={sendingData}
                                setSendingData={setSendingData}
                                handlePro       fileSubmit={handleProfileSubmit}
                            />

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
                                                Certificate
                                            </span>
                                        </div>
                                        <div>
                                            <div className="grid grid-cols-2 gap-2 py-4">
                                                <input
                                                    type="text"
                                                    id="certificateName"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Certificate Name"
                                                    name="certificateName"
                                                    onChange={(e) => {
                                                        setSingleCertificate(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    id="certificateLink"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Certificate Link"
                                                    name="certificateLink"
                                                    onChange={(e) => {
                                                        setSingleCertificate(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-[90%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                                                    onClick={handleCertificate}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div>
                                                {certificateArray.map(
                                                    (intern, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    console.log(
                                                                        intern
                                                                    );
                                                                    setCertificateArray(
                                                                        certificateArray.filter(
                                                                            (
                                                                                certificate
                                                                            ) => {
                                                                                return (
                                                                                    certificate.certificateName !==
                                                                                    intern.certificateName
                                                                                );
                                                                            }
                                                                        )
                                                                    );
                                                                }}
                                                                className="bg-[#efefef] p-3 rounded-lg my-1"
                                                            >
                                                                <h1>
                                                                    Certificate
                                                                    Name :{" "}
                                                                    {
                                                                        intern.certificateName
                                                                    }
                                                                </h1>
                                                                <p className="">
                                                                    <a
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                        href={
                                                                            intern.certificateLink
                                                                        }
                                                                    >
                                                                        Link
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-[25%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                                                onClick={(e) => {
                                                    handleProfileSubmit(e);
                                                }}
                                            >
                                                Save
                                            </button>
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
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">
                                                Internship
                                            </span>
                                        </div>
                                        <div>
                                            <div className="grid grid-cols-2 gap-2 py-4">
                                                <input
                                                    type="text"
                                                    id="internshipName"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Internship Name"
                                                    name="internshipName"
                                                    onChange={(e) => {
                                                        setSingleInternship(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    id="internshipLink"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add internship Link"
                                                    name="internshipLink"
                                                    onChange={(e) => {
                                                        setSingleInternship(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    [e.target
                                                                        .name]:
                                                                        e.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-[90%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                                                    onClick={handleInternship}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div>
                                                {internshipArray.map(
                                                    (intern, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    console.log(
                                                                        intern
                                                                    );
                                                                    setInternshipArray(
                                                                        internshipArray.filter(
                                                                            (
                                                                                internship
                                                                            ) => {
                                                                                return (
                                                                                    internship.internshipName !==
                                                                                    intern.internshipName
                                                                                );
                                                                            }
                                                                        )
                                                                    );
                                                                }}
                                                                className="bg-[#efefef] p-3 rounded-lg my-1"
                                                            >
                                                                <h1>
                                                                    internship
                                                                    Name :{" "}
                                                                    {
                                                                        intern.internshipName
                                                                    }
                                                                </h1>
                                                                <p className="">
                                                                    <a
                                                                        target="_blank"
                                                                        href={
                                                                            intern.internshipLink
                                                                        }
                                                                    >
                                                                        Link
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
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

export default ProfileEdit;
