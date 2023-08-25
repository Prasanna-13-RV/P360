import React, { Fragment, useEffect, useState } from "react";
import AddInternship from "../../../components/internship/AddInternship";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";
import EditInternship from "../../../components/internship/EditInternship";
import axios from "axios";

function Internship({user}) {
    const [addButton, setAddButton] = useState(false);
    const [editButton, setEditButton] = useState(false);
    const [editData, setEditData] = useState({});
    const [dataInternship, setDataInternship] = useState([]);

    useEffect(() => {
        try {
            axios.get("http://localhost:8080/internship",{
                headers: {
                  Authorization: `Bearer ${user.token}`,
                }
              }).then((res) => {
                setDataInternship(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8080/internship/${e}`,{
            headers: {
              Authorization: `Bearer ${user.token}`,
            }
          }).then((res) => {
            console.log(res);
        });
        window.location.reload();
    };

    const handleEdit = (e) => {
        setEditData(e);
        setEditButton(!editButton);
    };

    console.log(dataInternship);

    return (
        <>
            <NavbarAdmin />
            <div className="min-h-screen">
                <div className="flex flex-row justify-between w-full px-10 my-5">
                    <div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            All Internship
                        </h1>
                    </div>
                    <button
                        type="submit"
                        onClick={() => {
                            setAddButton(!addButton);
                        }}
                        className={`${
                            addButton
                                ? "text-black bg-white hover:bg-slate-200 "
                                : "text-white bg-primary-600 hover:bg-primary-700"
                        } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center z-50`}
                    >
                        {addButton ? "X" : "Add Internship"}
                    </button>
                </div>

                {addButton ? (
                    <AddInternship
                        setAddButton={setAddButton}
                        addButton={addButton}
                        user={user}
                    />
                ) : null}
                {editButton ? (
                    <EditInternship
                        data={"fgh"}
                        editData={editData}
                        setEditData={setEditData}
                        setEditButton={setEditButton}
                        editButton={editButton}
                        user={user}
                    />
                ) : null}

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
                                {/* <th scope="col" className="px-6 py-3">
                                    Eligibility
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Department
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Domain
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Duration
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Last date
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Apply Link
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Operations
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
                                            <td className="px-6 py-4">
                                                {e.companyInternship}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.stipendInternship}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.locationInternship}
                                            </td>
                                            {/* <td className="px-6 py-4">
                                                {e.eligibilityInternship}
                                            </td> */}
                                            <td className="px-6 py-4">
                                                {e.departmentInternship}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.domainInternship}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.durationInternship}
                                            </td>
                                            {/* <td className="px-6 py-4">
                                                {e.lastDateInternship}
                                            </td> */}
                                            <td className="px-6 py-4">
                                                <a href={e.linkInternship}>
                                                    Link
                                                </a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="grid grid-cols-2">
                                                    <p
                                                        onClick={() => {
                                                            handleEdit(e);
                                                        }}
                                                        className="font-medium text-blue-600 hover:underline cursor-pointer"
                                                    >
                                                        Edit
                                                    </p>
                                                    <p
                                                        onClick={() =>
                                                            handleDelete(e.id)
                                                        }
                                                        className="cursor-pointer font-medium text-red-600 hover:underline"
                                                    >
                                                        Delete
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <FooterAdmin />
        </>
    );
}

export default Internship;
