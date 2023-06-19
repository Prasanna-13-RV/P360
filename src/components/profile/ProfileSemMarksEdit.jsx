import React, { useEffect, useState } from "react";

function ProfileSemMarksEdit({ mark, semesterNo, semester }) {
    const [marks, setMarks] = useState({});

    const handleSubmit = () => {
        console.log(marks);
    };

    return (
        <li>
            <details>
                <summary class="text-teal-600">{semesterNo}</summary>
                <div className="w-full flex flex-col justify-center items-center">
                    {mark.map((e, i) => {
                        return (
                            <ul className="pl-5" key="i">
                                <li className="text-gray-500 text-ls grid grid-cols-2 gap-2">
                                    {e.subject}
                                    <input
                                        type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={e.marks}
                                        name={e.subject}
                                        required
                                        onChange={(e) => {
                                            setMarks((prev) => {
                                                return {
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </li>
                            </ul>
                        );
                    })}
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="my-3 mx-auto text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </div>
            </details>
        </li>
    );
}

export default ProfileSemMarksEdit;
