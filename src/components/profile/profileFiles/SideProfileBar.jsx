import { Fragment, useEffect } from "react";

export const SideProfileBar = ({
    data,
    cgpa,
    setSingleSkill,
    skills,
    singleSkill,
    setSkills,
    handleProfileSubmit,
    sendingData,
    setSendingData,
}) => {
    const handleSkills = async (e) => {
        e.preventDefault();
        await setSkills((prev) => {
            return [...prev, singleSkill];
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(sendingData, "l");

        var data = sendingData;
        data.skillset = [...skills];
        setSendingData(data);
        handleProfileSubmit(e);
    };


    return (
        <>
            <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-green-400">
                    <div className="image overflow-hidden">
                        {/* {JSON.stringify(sendingData)} */}
                        <img
                            className="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""
                        />
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                        <div className="grid grid-cols-2 gap-2">
                            {data?.fname + " " + data?.lname}
                        </div>
                    </h1>

                    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Year of Passing</span>
                            <span className="ml-auto">
                                <span className="ml-auto">
                                    <input
                                        type="text"
                                        id="passingYear"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.passing_year}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    passing_year:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </span>
                            </span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>CGPA</span>
                            <span className="ml-auto">
                                <input
                                    type="text"
                                    id="cgpa"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                    placeholder="123456789"
                                    defaultValue={cgpa}
                                    required
                                    onChange={(r) => {
                                        setSendingData((res) => {
                                            return {
                                                ...res,
                                                cgpa: r.target.value,
                                            };
                                        });
                                    }}
                                />
                            </span>
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
                    <div>
                        <div className="flex gap-2 py-4">
                            <input
                                type="text"
                                id="passingYear"
                                className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 py-1.5"
                                placeholder="Add Skills"
                                onChange={(e) => {
                                    setSingleSkill(e.target.value);
                                }}
                                required
                            />
                            <button
                                type="submit"
                                className="w-[25%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                                onClick={(e) => {
                                    handleSkills(e);
                                }}
                            >
                                Add
                            </button>
                        </div>
                        {/* {JSON.stringify(skills && skills)} */}
                        {skills?.map((res, index) => {
                            if (res != null) {
                                return (
                                    <Fragment key={index}>
                                        <div
                                            className="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                                            // delete current item
                                            onClick={(e) => {
                                                console.log(e.target);
                                                setSkills((prev) => {
                                                    return prev.filter(
                                                        (skill) => skill !== res
                                                    );
                                                });
                                            }}
                                        >
                                            {res}
                                        </div>
                                    </Fragment>
                                );
                            }
                        })}
                    </div>

                    <button
                        onClick={(e) => {
                            handelSubmit(e);
                        }}
                        className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    >
                        Submit
                    </button>
                    {/* <button
                        type="submit"
                        className="w-[25%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                        onClick={(e) => {
                            handleProfileSubmit(e);
                        }}
                    >
                        Save
                    </button> */}
                </div>
                <div className="my-4"></div>

                <div className="bg-white p-3 hover:shadow">
                    <form
                        onSubmit={(e) => {
                            handleProfileSubmit(e);
                        }}
                    >
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
                                <label
                                    htmlFor="p360_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    P360 Score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="p360_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.p360_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    p360_score: r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="leetcode_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    leetcode_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="leetcode_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.leetcode_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    leetcode_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="codechef_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    codechef_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="codechef_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.codechef_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    codechef_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="code_forces_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    code_forces_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="code_forces_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.code_forces_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    code_forces_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="hackerrank_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    hackerrank_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="hackerrank_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data.hackerrank_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    hackerrank_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="code_division_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    code_division_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="code_division_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.code_division_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    code_division_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="hacker_earth_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    hacker_earth_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="hacker_earth_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.hacker_earth_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    hacker_earth_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="interview_bit_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    interview_bit_score
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="interview_bit_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.interview_bit_score}
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    interview_bit_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="geeks_for_geeks_score"
                                    className="px-4 py-1 font-semibold"
                                >
                                    GeeksForGeeks
                                </label>
                                <div className="px-4 py-1 text-right">
                                    <input
                                        type="text"
                                        id="geeks_for_geeks_score"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={
                                            data?.geeks_for_geeks_score
                                        }
                                        required
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    geeks_for_geeks_score:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
