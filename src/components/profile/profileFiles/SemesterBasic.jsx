export const SemesterBasic = ({
    handleProfileSubmit,
    data,
    setSendingData,
}) => {
    return (
        <>
            <div className="bg-white p-3 shadow-sm rounded-sm">
                <form
                    onSubmit={(e) => {
                        handleProfileSubmit(e);
                    }}
                >
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="first_name"
                                    className="px-4 py-2 font-semibold"
                                >
                                    First Name
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="Tony"
                                        defaultValue={data?.fname}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    fname: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="lname"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Last Name
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="lname"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="Stark"
                                        defaultValue={data?.lname}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    lname: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="gender"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Gender
                                </label>
                                <div className="px-4 py-2">
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        id="gender"
                                        defaultValue={data?.gender}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    gender: r.target.value,
                                                };
                                            });
                                        }}
                                    >
                                        <option hidden="hidden">
                                            Select your Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="contact"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Contact No.
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="contact"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.contact}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    contact: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="address"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Current Address
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="address"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.address}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    address: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="paddress"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Permanant Address
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="paddress"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.paddress}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    paddress: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="dept"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Department
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="dept"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.dept}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    dept: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="email"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Email
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.email}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    email: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            {/* full information */}
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="dob"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Birthday
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="date"
                                        id="dob"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.dob}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    dob: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="joiningYear"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Year of Joining
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="joiningYear"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.joining_year}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    joining_year:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="fatherName"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Father Name
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="fatherName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.father_name}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    father_name: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="fatherPhone"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Father Number
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="fatherPhone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.father_phone}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    father_phone:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="motherName"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Mother Name
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="motherName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.mother_name}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    mother_name: r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <label
                                    htmlFor="motherPhone"
                                    className="px-4 py-2 font-semibold"
                                >
                                    Mother Number
                                </label>
                                <div className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="motherPhone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
                                        placeholder="123456789"
                                        defaultValue={data?.mother_phone}
                                        onChange={(r) => {
                                            setSendingData((res) => {
                                                return {
                                                    ...res,
                                                    mother_phone:
                                                        r.target.value,
                                                };
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
