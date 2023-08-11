import React, { Fragment, useEffect, useState } from "react";
import ProfileSemMarksEdit from "../../../components/profile/ProfileSemMarksEdit";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import { SideProfileBar } from "../../../components/profile/profileFiles/SideProfileBar";
import { SemesterMarksProfile } from "../../../components/profile/profileFiles/SemesterMarksProfile";
import { SemesterBasic } from "../../../components/profile/profileFiles/SemesterBasic";
import { useSearchParams } from "react-router-dom";

function ProfileEdit() {
    const [cgpa, setCgpa] = useState(9.1);
    const [singleSkill, setSingleSkill] = useState("");
    const [singleInternship, setSingleInternship] = useState("");
    const [singleCertificate, setSingleCertificate] = useState("");

    const [singleProject, setSingleProject] = useState("");
    const [projectArray, setProjectArray] = useState([]);

    const [data, setData] = useState([]);
    const [sendingData, setSendingData] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams("id");

    console.log(searchParams, "searchParams");

    useEffect(() => {
        axios.get(`http://localhost:8080/student/1234`).then((res) => {
            setData(res.data);
            setSendingData(res.data);
            setSkills(res.data.skillset);
            setInternshipArray(res.data.internships);
            setCertificateArray(res.data.certificates);
            setProjectArray(res.data.projects);
        });
    }, []);

    console.log(data);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8080/student/update/1234`, sendingData)
            .then((res) => {
                console.log(res.data);
            });
    };

    const [skills, setSkills] = useState();
    const [internshipArray, setInternshipArray] = useState([]);
    const [certificateArray, setCertificateArray] = useState([]);

    const handleCertificate = async (e) => {
        e.preventDefault();
        await setCertificateArray((prev) => {
            return [...prev, singleCertificate];
        });
        console.log(certificateArray);
    };

    const handleCertificateSubmit = (e) => {
        e.preventDefault();
        var data = sendingData;
        data.certificates = [...certificateArray];
        setSendingData(data);
        console.log(sendingData);
        handleProfileSubmit(e);
    };

    const handleProject = async (e) => {
        e.preventDefault();
        await setProjectArray((prev) => {
            return [...prev, singleProject];
        });
        console.log(projectArray);
    };

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        var data = sendingData;
        data.projects = [...projectArray];
        setSendingData(data);
        console.log(sendingData);
        handleProfileSubmit(e);
    };

    const handleInternship = async (e) => {
        e.preventDefault();
        await setInternshipArray((prev) => {
            return [...prev, singleInternship];
        });
    };

    const handleInternshipSubmit = (e) => {
        e.preventDefault();
        console.log(sendingData, "l");

        var data = sendingData;
        data.internships = [...internshipArray];
        setSendingData(data);
        handleProfileSubmit(e);
    };

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
                                handlePro
                                fileSubmit={handleProfileSubmit}
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
                                        <div className="p-5">
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
                                                    handleCertificateSubmit(e);
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
                                        <div className="p-5">
                                            <div className="grid grid-cols-2 gap-2 py-4">
                                                <input
                                                    type="text"
                                                    id="internship_name"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Internship Name"
                                                    name="internship_name"
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
                                                    id="inernship_description"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add internship Link"
                                                    name="inernship_description"
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
                                                                                    internship.internship_name !==
                                                                                    intern.internship_name
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
                                                                        intern.internship_name
                                                                    }
                                                                </h1>
                                                                <p className="">
                                                                    <a
                                                                        target="_blank"
                                                                        href={
                                                                            intern.inernship_description
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
                                                    handleInternshipSubmit(e);
                                                }}
                                            >
                                                Save
                                            </button>
                                        </div>
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
                                                Project
                                            </span>
                                        </div>
                                        <div className="p-5">
                                            <div className="grid grid-cols-2 gap-2 py-4">
                                                <input
                                                    type="text"
                                                    id="project_name"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Project Name"
                                                    name="project_name"
                                                    onChange={(e) => {
                                                        setSingleProject(
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
                                                    id="project_description"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Project Description"
                                                    name="project_description"
                                                    onChange={(e) => {
                                                        setSingleProject(
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
                                                    id="project_score"
                                                    class="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                                    placeholder="Add Project Score"
                                                    name="project_score"
                                                    onChange={(e) => {
                                                        setSingleProject(
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
                                                    onClick={handleProject}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <div>
                                                {projectArray.map(
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
                                                                    setProjectArray(
                                                                        projectArray.filter(
                                                                            (
                                                                                project
                                                                            ) => {
                                                                                return (
                                                                                    project.project_name !==
                                                                                    intern.project_name
                                                                                );
                                                                            }
                                                                        )
                                                                    );
                                                                }}
                                                                className="bg-[#efefef] p-3 rounded-lg my-1"
                                                            >
                                                                <h1>
                                                                    Project Name
                                                                    :{" "}
                                                                    {
                                                                        intern.project_name
                                                                    }
                                                                </h1>
                                                                <p className="">
                                                                    Project
                                                                    Description
                                                                    :{" "}
                                                                    {
                                                                        intern.project_description
                                                                    }
                                                                </p>
                                                                <p className="">
                                                                    Project
                                                                    Score :{" "}
                                                                    {
                                                                        intern.project_score
                                                                    }
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
                                                    handleProjectSubmit(e);
                                                }}
                                            >
                                                Save
                                            </button>
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
