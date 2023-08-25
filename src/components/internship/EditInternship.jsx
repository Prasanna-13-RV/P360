import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

function EditInternship({ setEditButton, editButton, editData ,user}) {
    const [internDetailes, setInternDetailes] = useState(editData);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                `http://localhost:8080/internship/${editData.id}`,
                internDetailes,{
                    headers: {
                      Authorization: `Bearer ${user.token}`,
                    }
                  }
            )
            .then((res) => {
                console.log(res);
                setEditButton(false);
                window.location.reload();
            });
    };

    const KEY_NAME_ESC = "Escape";
    const KEY_EVENT_TYPE = "keyup";

    function useEscapeKey() {
        const handleEscKey = useCallback((event) => {
            if (event.key === KEY_NAME_ESC) {
                setEditButton(false);
            }
        }, []);

        useEffect(() => {
            document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

            return () => {
                document.removeEventListener(
                    KEY_EVENT_TYPE,
                    handleEscKey,
                    false
                );
            };
        }, [handleEscKey]);
    }

    useEscapeKey();

    return (
        <>
            <section className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-full z-40">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 h-[90vh] overflow-scroll">
                        <div className="relative p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div
                                className="absolute top-0 right-0 w-[50px] h-[50px] flex justify-center items-center z-50"
                                onClick={() => {
                                    setEditButton(false);
                                    setInternDetailes({});
                                }}
                            >
                                <img
                                    width="30"
                                    height="30"
                                    className="cursor-pointer"
                                    src="https://img.icons8.com/ios-glyphs/30/cancel.png"
                                    alt="cancel"
                                />
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Edit Internship
                            </h1>
                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                {/* Role */}
                                <div>
                                    <label
                                        htmlFor="roleInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        name="roleInternship"
                                        id="roleInternship"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeHolder="Role"
                                        required=""
                                        defaultValue={editData.roleInternship}
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Company Internship */}
                                <div>
                                    <label
                                        htmlFor="companyInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Company Internship
                                    </label>
                                    <input
                                        type="text"
                                        name="companyInternship"
                                        id="companyInternship"
                                        placeHolder="ABC Company"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        defaultValue={
                                            editData.companyInternship
                                        }
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Stipend */}
                                <div>
                                    <label
                                        htmlFor="stipendInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Stipend
                                    </label>
                                    <input
                                        type="text"
                                        name="stipendInternship"
                                        id="stipendInternship"
                                        defaultValue={
                                            editData.stipendInternship
                                        }
                                        placeHolder="10000"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Location */}
                                <div>
                                    <label
                                        htmlFor="locationInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="locationInternship"
                                        id="locationInternship"
                                        defaultValue={
                                            editData.locationInternship
                                        }
                                        placeHolder="Location"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Eligibility */}
                                <div>
                                    <label
                                        htmlFor="eligibilityInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Eligibility
                                    </label>
                                    <input
                                        type="text"
                                        name="eligibilityInternship"
                                        id="eligibilityInternship"
                                        defaultValue={
                                            editData.eligibilityInternship
                                        }
                                        placeHolder="Eligibility"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Department */}
                                <div>
                                    <label
                                        htmlFor="departmentInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Department
                                    </label>
                                    <input
                                        type="text"
                                        name="departmentInternship"
                                        id="departmentInternship"
                                        defaultValue={
                                            editData.departmentInternship
                                        }
                                        placeHolder="Department"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Domain */}
                                <div>
                                    <label
                                        htmlFor="domainInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Domain
                                    </label>
                                    <input
                                        type="text"
                                        name="domainInternship"
                                        id="domainInternship"
                                        defaultValue={editData.domainInternship}
                                        placeHolder="Domain"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>

                                {/* Duration */}
                                <div>
                                    <label
                                        htmlFor="durationInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Duration
                                    </label>
                                    <input
                                        type="text"
                                        name="durationInternship"
                                        id="durationInternship"
                                        placeHolder="1 year"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        defaultValue={
                                            editData.durationInternship
                                        }
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Last Date */}
                                <div>
                                    <label
                                        htmlFor="lastDateInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Stipend
                                    </label>
                                    <input
                                        type="date"
                                        name="lastDateInternship"
                                        id="lastDateInternship"
                                        defaultValue={
                                            editData.lastDateInternship
                                        }
                                        placeHolder="10000"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                {/* Link */}
                                <div>
                                    <label
                                        htmlFor="linkInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Link
                                    </label>
                                    <input
                                        type="text"
                                        name="linkInternship"
                                        id="linkInternship"
                                        placeHolder="https://abc.com/internship"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        defaultValue={editData.linkInternship}
                                        required=""
                                        onChange={(e) => {
                                            setInternDetailes((res) => {
                                                return {
                                                    ...res,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Edit Internship
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditInternship;
