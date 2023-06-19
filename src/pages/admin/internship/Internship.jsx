import React, { useState } from "react";
import AddInternship from "../../../components/internship/AddInternship";

function Internship() {
    const [addButton, setAddButton] = useState(false);

    return (
        <>
            <div className="flex flex-row items-center justify-between w-full px-10 my-5">
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
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">Silver</td>
                            <td class="px-6 py-4">Laptop</td>
                            <td class="px-6 py-4">$2999</td>
                            <td class="px-6 py-4">
                                <a
                                    href="$"
                                    class="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Internship;
