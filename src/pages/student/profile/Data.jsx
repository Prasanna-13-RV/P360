import React, { useState } from "react";

function Data() {
    const [marks, setMarks] = useState([
        {
            userId: "",
            marksId: 0,
            semester1: [],
            semester2: [],
            semester3: [],
            semester4: [],
            semester5: [],
            semester6: [],
            semester7: [],
            semester8: [],
        },
    ]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMarks((prevMarks) => ({
          ...prevMarks,
          [name]: value,
        }));
      };

    const marks1 = [
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

    return (
        <div>
            {/* I want to get the marks array input in a state */}

            <div>
                <input type="text" />
            </div>
        </div>
    );
}

export default Data;
