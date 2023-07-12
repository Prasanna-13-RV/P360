import React from "react";

function ProfileSemMarks({ marks }) {
    return (
        <li>
            <details>
                <summary class="text-teal-600">Semester 1</summary>
                <div>
                    {marks?.semester1.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 2</summary>
                <div>
                    {marks?.semester2.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 3</summary>
                <div>
                    {marks?.semester3.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 4</summary>
                <div>
                    {marks?.semester4.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 5</summary>
                <div>
                    {marks?.semester5.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 6</summary>
                <div>
                    {marks?.semester6.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 7</summary>
                <div>
                    {marks?.semester7.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary class="text-teal-600">Semester 8</summary>
                <div>
                    {marks?.semester8.map((res) => {
                        return (
                            <ul>
                                <li>
                                    {res.subject} : {res.marks}
                                </li>
                                <li></li>
                            </ul>
                        );
                    })}
                </div>
            </details>
        </li>
    );
}

export default ProfileSemMarks;
