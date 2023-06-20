import React, { useCallback, useEffect, useState } from "react";

function AddInternship({ setAddButton, addButton }) {
    const [internDetailes, setInternDetailes] = useState({});

    const handleSubmit = () => {};

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
                                class="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                            >
                                {/* Role */}
                                <div>
                                    <label
                                        for="roleInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        name="roleInternship"
                                        id="roleInternship"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Role"
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
                                        for="companyInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Company Internship
                                    </label>
                                    <input
                                        type="text"
                                        name="companyInternship"
                                        id="companyInternship"
                                        placeholder="ABC Company"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                        for="stipendInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Stipend
                                    </label>
                                    <input
                                        type="text"
                                        name="stipendInternship"
                                        id="stipendInternship"
                                        placeholder="10000"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                        for="durationInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Duration
                                    </label>
                                    <input
                                        type="text"
                                        name="durationInternship"
                                        id="durationInternship"
                                        placeholder="1 year"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                        for="linkInternship"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Link
                                    </label>
                                    <input
                                        type="text"
                                        name="linkInternship"
                                        id="linkInternship"
                                        placeholder="https://abc.com/internship"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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