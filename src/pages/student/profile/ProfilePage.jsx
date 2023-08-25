import axios from "axios";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
import jsPDF from "jspdf";
import { react, useEffect, useState } from "react";
import "./css/ProfilePage.css";

const ProfilePage = ({ user }) => {
  const [data, setData] = useState([]);

  const [skills, setSkills] = useState();
  const [internshipArray, setInternshipArray] = useState([]);
  const [certificateArray, setCertificateArray] = useState([]);
  const [projectArray, setProjectArray] = useState([]);

  useEffect(() => {

    axios
      .get(`http://localhost:8080/student/${user.userDetails.regno}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setSkills(res.data.skillset);
        setInternshipArray(res.data.internships);
        setCertificateArray(res.data.certificates);
        setProjectArray(res.data.projects);
      });
  }, []);

  const [load, setLoad] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".downloadPdfDiv");

    setLoad(true);

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("pt", "mm");
      let position = 0;
      doc.addImage(imgData, "PNG", 10, 0, imgWidth, imgHeight + 25);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 25);
        heightLeft -= pageHeight;
      }
      doc.save(`${data?.fname} Resume`);
      setLoad(false);
    });
  };

  return (
    <>
      <div className="bg-gray-100 p-4">
        <button
          type="submit"
          className="text-white my-5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={downloadPDF}
          disabled={load !== false}
        >
          {load ? "Downloading Resume" : "Download Resume"}
        </button>
        <div className="w-full my-0 mx-auto border-1 shadow-lg page shadow-gray-700 rounded-lg">
          <div className="downloadPdfDiv page">
            <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full mx-auto my-0">
              {/* <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                                <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" alt="Text" />
                            </div> */}

              <div className="w-full sm:text-center pl-5 mt-10 text-start">
                <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                  {data?.fname + " " + data?.lname}
                </p>
                <p className="text-heading">Software Engineer</p>
              </div>
            </div>

            <div className="px-6">
              <div className="flex flex-col sm:flex-row sm:mt-10">
                <div className="flex flex-col sm:w-[40%]">
                  <PersonalDetails data={data} />
                  <div className="py-3 sm:order-none order-2">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Skills
                    </h2>
                    <div className="border-2 w-20 border-slate-600 my-3"></div>

                    <div className="flex flex-wrap justify-center items-center">
                      {skills?.map((res) => {
                        return (
                          <>
                            <div className="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                              {res}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>

                  <div className="py-3 sm:order-none order-1">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Education Background
                    </h2>
                    <div className="border-2 w-20 border-slate-600 my-3"></div>

                    <div className="flex flex-col space-y-1">
                      <div className="flex flex-col">
                        <p className="font-semibold text-xs text-gray-700">SSLC</p>
                        <p className="text-sm font-medium">
                          <span className="text-slate-700">
                            {data?._10th_school_name}
                          </span>
                        </p>
                        <p className="font-bold text-xs text-gray-700 mb-2">
                          {data?._10th_mark}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold text-xs text-gray-700">HSC</p>
                        <p className="text-sm font-medium">
                          <span className="text-slate-700">
                            {data?._12th_school_name}
                          </span>
                        </p>
                        <p className="font-bold text-xs text-gray-700 mb-2">
                          {data?._12th_mark}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold text-xs text-gray-700">
                          College
                        </p>
                        <p className="text-sm font-medium">
                          <span className="text-slate-700">{data?.dept}</span>
                        </p>
                        <p className="font-bold text-xs text-gray-700 mb-2">
                          {data?.cgpa != null ? data?.cgpa : "Not mentioned"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:w-[60%] order-first sm:order-none sm:-mt-5 pl-4">
                  <div className="py-3 pr-4">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      About Me
                    </h2>
                    <div className="border-2 w-20 border-slate-600 my-3"></div>
                    <p>
                      To get a career opportunity which would help me to utilize
                      my academic background to assist me to gain experience,
                      employ my excellent skills, and enable me to make positive
                      contribution.
                    </p>
                  </div>

                  <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Projects
                    </h2>
                    <div className="border-2 w-20 border-slate-600 my-3"></div>

                    <div className="flex flex-col">
                      {projectArray.map((project) => {
                        return (
                          <>
                            <div className="flex flex-col">
                              <p className="text-lg font-bold text-gray-700">
                                {project.project_name}
                              </p>
                              <p className="font-semibold text-sm text-gray-700">
                                {project.project_description}
                              </p>
                              <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                                Project Score : {project.project_score}
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Certificates
                    </h2>
                    <div className="border-2 w-20 border-slate-600 my-3"></div>
                    <div className="flex flex-col">
                      {certificateArray.map((e, index) => {
                        return (
                          <>
                            <p className="text-lg font-semibold text-gray-700">
                              {e.certificateName}
                            </p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">
                              <a
                                href={e.certificateLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Certificate Link
                              </a>
                            </p>
                          </>
                        );
                      })}
                      {/* 
                                        <div className="flex flex-col mt-8">
                                            <p className="text-lg font-bold text-gray-700">
                                                TailwindFlex.com | Lead
                                            </p>
                                            <p className="font-semibold text-sm text-gray-700">
                                                2020-2021
                                            </p>
                                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                                                Key Responsibilities
                                            </p>
                                            <ul className="text-sm list-disc pl-4 space-y-1">
                                                <li>
                                                    Developed usable components
                                                </li>
                                                <li>
                                                    Solving complex problems
                                                </li>
                                                <li>Solving critical bugs</li>
                                            </ul>
                                        </div> */}
                    </div>
                  </div>
                  <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">
                      Internship
                    </h2>
                    <div className="border-2 w-20 border-slate-600 my-3"></div>

                    <div className="flex flex-col">
                      {internshipArray.map((e, index) => {
                        return (
                          <>
                            <p className="text-lg font-semibold text-gray-700">
                              {e.internship_name}
                            </p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">
                              <a
                                href={e.inernship_description}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Internship Certificate Link
                              </a>
                            </p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PersonalDetails = ({ data }) => {
  return (
    <>
      <div className="sm:order-none order-3">
        <h2 className="text-lg font-poppins font-bold text-top-color">
          My Contact
        </h2>
        <div className="border-2 w-20 border-slate-600 my-3"></div>

        <div>
          <div className="flex items-center my-1">
            <div className="grid grid-cols-2">
              <div className="py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{data?.fname}</div>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="grid grid-cols-2">
              <div className="py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{data?.lname}</div>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="grid grid-cols-2">
              <div className="py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">{data?.gender}</div>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="flex flex-row gap-3">
              <div className="py-2 font-semibold ">Contact No.</div>
              <div className="px-4 py-2">{data?.contact}</div>
            </div>
          </div>
          {/* <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">
                                Current Address
                            </div>
                            <div className="px-4 py-2">{data?.address}</div>
                        </div>
                    </div>
                    <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">
                                Permanant Address
                            </div>
                            <div className="px-4 py-2">{data?.paddress}</div>
                        </div>
                    </div> */}
          <div className="flex items-center my-1">
            <div className="grid grid-cols-2">
              <div className="py-2 font-semibold">Department</div>
              <div className="px-4 py-2">{data?.dept}</div>
            </div>
          </div>
          <div className="flex items-center my-1">
            <div className="flex flex-row gap-3">
              <div className="py-2 font-semibold">Email</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href={`mailto:${data?.email}`}>
                  {data?.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center my-1">
            <div className="grid grid-cols-2">
              <div className="py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">{data?.dob}</div>
            </div>
          </div>
          {/* <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">
                                Year of Joining
                            </div>
                            <div className="px-4 py-2">{data?.joining_year}</div>
                        </div>
                    </div>
                    <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">Father Name</div>
                            <div className="px-4 py-2">{data?.father_name}</div>
                        </div>
                    </div>
                    <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">Father Number</div>
                            <div className="px-4 py-2">{data?.father_phone}</div>
                        </div>
                    </div>
                    <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">Mother Name</div>
                            <div className="px-4 py-2">{data?.mother_name}</div>
                        </div>
                    </div>
                    <div className="flex items-center my-1">
                        <div className="grid grid-cols-2">
                            <div className="py-2 font-semibold">Mother Number</div>
                            <div className="px-4 py-2">{data?.mother_phone}</div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
