import React, { useState, useEffect } from "react";
const Roadmap = () => {
  const [topic1, settopic1] = useState("");
  const [topic2, settopic2] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  useEffect(() => {
    generateColor1();
  }, []);
  const generateColor1 = () => {
    setColor1(Math.random().toString(16).substr(-6));
  };
  const generateColor2 = () => {
    setColor2(Math.random().toString(16).substr(-6));
  };
  const generateColor3 = () => {
    setColor3(Math.random().toString(16).substr(-6));
  };
  const [selected, setSelected] = useState();
  const [selected2, setSelected2] = useState();
  const [data, setData] = useState([
    {
      name: "Kotlin",
      sub: [
        {
          name: "Binding",
          sub2: [
            { name: "Data Binding" },
            { name: "Event Binding" },
            { name: "FindVIewByID" },
          ],
        },
        {
          name: "Co-routines",
          sub2: [
            { name: "Coroutinescope" },
            { name: "Global scope" },
            { name: "IO Scope" },
            { name: "Dispatcher" },
          ],
        },
        {
          name: "Layouts",
          sub2: [
            { name: "Linear Layout" },
            { name: "Relative layout" },
            { name: "Grid layout" },
            { name: "Constrait Layout" },
          ],
        },
      ],
    },
    {
      name: "JS",
      sub: [
        {
          name: "Functions",
          sub2: [{ name: "Normal functions" }, { name: "Arrow functions" }],
        },
        {
          name: "Variables",
          sub2: [{ name: "Let" }, { name: "Const" }, { name: "Var" }],
        },
      ],
    },
    {
      name: "Java",
      sub: [
        {
          name: "Oops",
          sub2: [
            { name: "encapsulation" },
            { name: "encapsulation" },
            { name: "encapsulation" },
          ],
        },
        {
          name: "laava",
          sub2: [
            { name: "encapsulation" },
            { name: "encapsulation" },
            { name: "encapsulation" },
          ],
        },
      ],
    },

    {
      name: "Python",
      sub: [
        {
          name: "Lib",
          sub2: [
            { name: "encapsulation" },
            { name: "encapsulation" },
            { name: "encapsulation" },
          ],
        },
      ],
    },

    {
      name: "HTML",
      sub: [
        {
          name: "Headers",
          sub2: [
            { name: "h1" },
            { name: "h2" },
            { name: "h3" },
            { name: "h4" },
            { name: "h5" },
            { name: "h6" },
          ],
        },
      ],
    },
  ]);

  const selectedBtn = (e) => {};
  return (
    <div className="w-full h-full">
      <div className="mt-[4rem]">
        {data.map((main, index) => {
          return (
            <div className="  flex  w-[70%] mt-[2rem]  items-center  mx-auto">
              <div
                style={{
                  border: `3px solid #${color1}`,
                  backgroundColor: index == selected ? "#FFFFFF" : null,
                }}
                onClick={(e) => {
                  settopic1(main.name);
                  generateColor2();
                  settopic2("");
                  setSelected2(null);
                  setSelected(index);
                }}
                className="  w-[30%] bg-slate-700  cursor-pointer  px-4 py-2 rounded-md shadow-sm flex justify-center items-center ">
                <h1
                  style={{ color: index == selected ? "black" : null }}
                  className="text-white font-bold">
                  {main.name}
                </h1>
              </div>

              {main.name == topic1 && (
                <div className="  w-[30%]   ml-[5%]  flex flex-col justify-center items-center ">
                  {main.sub.map((sub, index) => {
                    return (
                      <div
                        onClick={() => {
                          settopic2(sub.name);
                          generateColor3();

                          setSelected2(index);
                        }}
                        style={{
                          border: `3px solid #${color2}`,
                          backgroundColor:
                            index == selected2 ? "#FFFFFF" : null,
                        }}
                        className=" px-4  bg-slate-700  w-full py-2 rounded-md shadow-sm mt-2  text-center">
                        <h1
                          style={{ color: index == selected2 ? "black" : null }}
                          className="text-white font-bold">
                          {sub.name}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className=" w-[30%]    ml-[5%] flex flex-col  justify-center items-center ">
                {main.sub.map((sub) => {
                  return sub.sub2.map((name, index) => {
                    return (
                      <>
                        {sub.name == topic2 ? (
                          <div
                            style={{ border: `3px solid #${color3}` }}
                            className="mt-2 w-full  bg-slate-700  px-4 py-2 rounded-md shadow-sm text-center">
                            <h1 className="text-white font-bold">
                              {name.name}
                            </h1>
                          </div>
                        ) : null}
                      </>
                    );
                  });
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
