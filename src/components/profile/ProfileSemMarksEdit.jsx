import React, { useEffect, useState } from "react";

function ProfileSemMarksEdit({ marks, setSendingData, sendingData , handleProfileSubmit}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(sendingData);
    };

    return (
        <li>
            <details>
                <summary class="text-teal-600">Semester 1</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester1.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester1"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 2</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester2.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester2"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 3</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester3.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester3"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 4</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester4.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester4"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 5</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester5.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester5"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 6</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester6.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester6"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 7</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester7.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester7"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
            <details>
                <summary class="text-teal-600">Semester 8</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {marks?.semester8.map((res, i) => {
                        const obj = {};
                        return (
                            <ul key={i}>
                                <div className="grid grid-cols-2">
                                    <li>
                                        <p className="px-2 py-2 font-semibold text-md">
                                            {res.subject}
                                        </p>
                                    </li>
                                    <li>
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                            placeholder={res.subject}
                                            defaultValue={res.marks}
                                            onChange={(e) => {
                                                obj.subject = res.subject;
                                                obj.marks = e.target.value;
                                                marks["semester8"][i].marks =
                                                    e.target.value;
                                                setSendingData({
                                                    ...sendingData,
                                                    marks: marks,
                                                });
                                            }}
                                        />
                                    </li>
                                </div>
                            </ul>
                        );
                    })}
                </div>
                <button
                    className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto"
                    onClick={(e) => {
                        handleProfileSubmit(e)
                    }}
                >
                    Submit
                </button>
            </details>
        </li>
    );
}

export default ProfileSemMarksEdit;
