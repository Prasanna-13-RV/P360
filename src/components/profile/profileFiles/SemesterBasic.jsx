export const SemesterBasic = ({
    handleProfileSubmit,
    data,
    setSendingData,
}) => {
    return (
        <>
            <div class="bg-white p-3 shadow-sm rounded-sm">
                <form
                    onSubmit={(e) => {
                        handleProfileSubmit(e);
                    }}
                >
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg
                                class="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="first_name"
                                    class="px-4 py-2 font-semibold"
                                >
                                    First Name
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="first_name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="lname"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Last Name
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="lname"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="gender"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Gender
                                </label>
                                <div class="px-4 py-2">
                                    <select
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="contact"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Contact No.
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="contact"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="address"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Current Address
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="address"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="paddress"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Permanant Address
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="paddress"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="dept"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Department
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="dept"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="email"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Email
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="email"
                                        id="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="dob"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Birthday
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="date"
                                        id="dob"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="joiningYear"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Year of Joining
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="joiningYear"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="fatherName"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Father Name
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="fatherName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="fatherPhone"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Father Number
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="fatherPhone"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="motherName"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Mother Name
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="motherName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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
                            <div class="grid grid-cols-2">
                                <label
                                    htmlFor="motherPhone"
                                    class="px-4 py-2 font-semibold"
                                >
                                    Mother Number
                                </label>
                                <div class="px-4 py-2">
                                    <input
                                        type="text"
                                        id="motherPhone"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1.5"
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

                    <button class="block bg-blue-500 text-sm font-semibold rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline hover:bg-blue-700 hover:shadow-xs p-3 my-4 mx-auto">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
