import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

function AddInternship({ setAddButton, addButton,user }) {
    const [internDetailes, setInternDetailes] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/addinternship", internDetailes,{
                headers: {
                  Authorization: `Bearer ${user.token}`,
                }
              })
            .then((res) => {
                console.log(res);
                setAddButton(false);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(internDetailes);
    };

    const KEY_NAME_ESC = "Escape";
    const KEY_EVENT_TYPE = "keyup";

    function useEscapeKey() {
        const handleEscKey = useCallback((event) => {
            if (event.key === KEY_NAME_ESC) {
                setAddButton(false);
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
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Add Internship
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
                                        type="year"
                                        name="eligibilityInternship"
                                        id="eligibilityInternship"
                                        placeHolder="Eligibility year"
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
                                    {/* <select
                                        id="eligibilityInternship"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    >
                                        <option selected disabled>
                                            Choose year
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select> */}
                                </div>
                                {/* Department */}
                                <div>
                                    <label
                                        htmlFor="departmentInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Department
                                    </label>
                                    {/* <input
                                        type="text"
                                        name="departmentInternship"
                                        id="departmentInternship"
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
                                    /> */}
                                    <select
                                        id="eligibilityInternship"
                                        name="departmentInternship"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                                    >
                                        <option selected disabled>
                                            Choose Department
                                        </option>
                                        <option value="IT">IT</option>
                                        <option value="CSE">CSE</option>
                                        <option value="ECE">ECE</option>
                                        <option value="EEE">EEE</option>
                                    </select>
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
                                    Add Internship
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddInternship;
