import React from "react";

function ProfileSemMarks({ mark, semesterNo, semester }) {
    return (
        <li>
            <details>
                <summary class="text-teal-600">{semesterNo}</summary>
                <div>
                    {/* {JSON.stringify(mark)} */}
                    {mark.map((e) => {
                        return (
                            <ul className="pl-5">
                                <li className="text-gray-500 text-ls">
                                    {e.subject + " : " + e.marks}
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </details>
        </li>
    );
}

export default ProfileSemMarks;
