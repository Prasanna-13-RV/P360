import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";

function ViewInternship({ user }) {
  const [addButton, setAddButton] = useState(false);
  const [dataInternship, setDataInternship] = useState([]);

  useEffect(() => {
    console.log("Hello");
    axios
      .get("http://localhost:8080/internship", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log("Hello", res);
        setDataInternship(res.data);
        console.log(dataInternship);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="flex flex-row items-center justify-between w-full px-10 my-5">
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              View Internship
            </h1>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Stipend
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Eligibility
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Domain
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Last date
                </th>
                <th scope="col" className="px-6 py-3">
                  Apply Link
                </th>
              </tr>
            </thead>
            <tbody>
              {dataInternship.map((e, index) => {
                return (
                  <Fragment key={index}>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {e.roleInternship}
                      </th>
                      <td className="px-6 py-4">{e.companyInternship}</td>
                      <td className="px-6 py-4">{e.stipendInternship}</td>
                      <td className="px-6 py-4">{e.locationInternship}</td>
                      <td className="px-6 py-4">{e.eligibilityInternship}</td>
                      <td className="px-6 py-4">{e.departmentInternship}</td>
                      <td className="px-6 py-4">{e.domainInternship}</td>
                      <td className="px-6 py-4">{e.durationInternship}</td>
                      <td className="px-6 py-4">{e.lastDateInternship}</td>
                      <td className="px-6 py-4">
                        <a href={e.linkInternship}>Link</a>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

// internship name, job, company, stipend, duration, link

export default ViewInternship;
