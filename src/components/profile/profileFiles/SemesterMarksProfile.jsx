import { Fragment, useEffect, useState } from "react";
import ProfileSemMarksEdit from "../ProfileSemMarksEdit";

export const SemesterMarksProfile = ({
    data,
    sendingData,
    setSendingData,
    handleProfileSubmit,
}) => {
    const [marks, setMarks] = useState();

    useEffect(() => {
        setMarks(data?.marks);
    });

    return (
        <>
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
                            <span className="tracking-wide">Semester Marks</span>
                        </div>
                        <ul className="list-inside space-y-2">
                            <ProfileSemMarksEdit
                                marks={marks}
                                setSendingData={setSendingData}
                                sendingData={sendingData}
                                handleProfileSubmit={handleProfileSubmit}
                            />
                        </ul>
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
                            <span className="tracking-wide">Education</span>
                        </div>
                        <form
                            onSubmit={(e) => {
                                handleProfileSubmit(e);
                            }}
                        >
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">SSLC</div>
                                    <div className="text-gray-500">
                                        <div className="grid grid-cols-2">
                                            <label
                                                htmlFor="_10th_school_name"
                                                className="px-4 py-2 font-semibold text-md"
                                            >
                                                SSLC School Name
                                            </label>
                                            <div className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="_10th_school_name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data?._10th_school_name
                                                    }
                                                    onChange={(r) => {
                                                        setSendingData(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    _10th_school_name:
                                                                        r.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <label
                                                htmlFor="_10th_mark"
                                                className="px-4 py-2 font-semibold"
                                            >
                                                SSLC Mark
                                            </label>
                                            <div className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="_10th_mark"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data?._10th_mark
                                                    }
                                                    onChange={(r) => {
                                                        setSendingData(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    _10th_mark:
                                                                        r.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-teal-600">HSC</div>
                                    <div className="text-gray-500">
                                        <div className="grid grid-cols-2">
                                            <label
                                                htmlFor="_12th_school_name"
                                                className="px-4 py-2 font-semibold text-md"
                                            >
                                                HSC School Name
                                            </label>
                                            <div className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="_12th_school_name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data?._12th_school_name
                                                    }
                                                    onChange={(r) => {
                                                        setSendingData(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    _12th_school_name:
                                                                        r.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <label
                                                htmlFor="_12th_mark"
                                                className="px-4 py-2 font-semibold"
                                            >
                                                HSC Mark
                                            </label>
                                            <div className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    id="_12th_mark"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                                    placeholder="123456789"
                                                    defaultValue={
                                                        data?._12th_mark
                                                    }
                                                    onChange={(r) => {
                                                        setSendingData(
                                                            (res) => {
                                                                return {
                                                                    ...res,
                                                                    _12th_mark:
                                                                        r.target
                                                                            .value,
                                                                };
                                                            }
                                                        );
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
