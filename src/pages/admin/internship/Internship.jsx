import React, { useState } from "react";
import AddInternship from "../../../components/internship/AddInternship";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";
import EditInternship from "../../../components/internship/EditInternship";

function Internship() {
  const [addButton, setAddButton] = useState(false);
  const [editButton, setEditButton] = useState(false);

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
            } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center z-50`}>
            {addButton ? "X" : "Add Internship"}
          </button>
        </div>

        {addButton ? (
          <AddInternship setAddButton={setAddButton} addButton={addButton} />
        ) : null}
        {editButton ? (
          <EditInternship
            setEditButton={setEditButton}
            editButton={editButton}
          />
        ) : null}

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
                <th scope="col" class="px-6 py-3">
                  Company Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Stipend
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
                <th scope="col" class="px-6 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <div className="grid grid-cols-2">
                    <p
                      onClick={() => {
                        setEditButton(!editButton);
                      }}
                      class="font-medium text-blue-600 hover:underline cursor-pointer">
                      Edit
                    </p>
                    <a
                      href="$"
                      class="font-medium text-red-600 hover:underline">
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <FooterAdmin />
    </>
  );
}

export default Internship;
