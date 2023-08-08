import axios from "axios";
import { react, useEffect, useState } from "react";

const ProfilePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const number = localStorage.getItem("rollno");
        const number = 1234;

        axios.get(`http://localhost:8080/student/${number}`).then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <>
            <div class="bg-gray-100 p-4">
                <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
                    <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
                        <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                            <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" />
                        </div>

                        <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
                            <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                                {data?.fname + " " + data?.lname}
                            </p>
                            <p class="text-heading">Software Engineer</p>
                        </div>
                    </div>

                    <div class="p-5">
                        <div class="flex flex-col sm:flex-row sm:mt-10">
                            <div class="flex flex-col sm:w-1/3">
                                <div class="py-3 sm:order-none order-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">
                                        My Contact
                                    </h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    First Name
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.fname}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Last Name
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.lname}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Gender
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.gender}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Contact No.
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.contact}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Current Address
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.address}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Permanant Address
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.paddress}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Department
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.dept}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Email
                                                </div>
                                                <div class="px-4 py-2">
                                                    <a
                                                        class="text-blue-800"
                                                        href="mailto:jane@example.com"
                                                    >
                                                        {data?.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Birthday
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.dob}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Year of Joining
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.joining_year}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Father Name
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.father_name}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Father Number
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.father_phone}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Mother Name
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.mother_name}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center my-1">
                                            <div class="grid grid-cols-2">
                                                <div class="px-4 py-2 font-semibold">
                                                    Mother Number
                                                </div>
                                                <div class="px-4 py-2">
                                                    {data?.mother_phone}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="py-3 sm:order-none order-2">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">
                                        Skills
                                    </h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div className="flex flex-wrap justify-center items-center">
                                        {data?.skills?.map((res) => {
                                            return (
                                                <>
                                                    <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        {res}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                        <div class="ml-2 my-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                        dfghjk
                                                    </div>
                                    </div>
                                </div>

                                <div class="py-3 sm:order-none order-1">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">
                                        Education Background
                                    </h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div class="flex flex-col space-y-1">
                                        <div class="flex flex-col">
                                            <p class="font-semibold text-xs text-gray-700">
                                                SSLC
                                            </p>
                                            <p class="text-sm font-medium">
                                                <span class="text-green-700">
                                                    {data?._10th_school_name}
                                                </span>
                                            </p>
                                            <p class="font-bold text-xs text-gray-700 mb-2">
                                                {data?._10th_mark}
                                            </p>
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-semibold text-xs text-gray-700">
                                                HSC
                                            </p>
                                            <p class="text-sm font-medium">
                                                <span class="text-green-700">
                                                    {data?._12th_school_name}
                                                </span>
                                                
                                            </p>
                                            <p class="font-bold text-xs text-gray-700 mb-2">
                                                {data?._12th_mark}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                                <div class="py-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">
                                        About Me
                                    </h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>
                                    <p>
                                        To get a career opportunity which would
                                        help me to utilize my academic
                                        background to assist me to gain
                                        experience, employ my excellent skills,
                                        and enable me to make positive
                                        contribution.
                                    </p>
                                </div>

                                <div class="py-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">
                                        Professional Experience
                                    </h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div class="flex flex-col">
                                        <div class="flex flex-col">
                                            <p class="text-lg font-bold text-gray-700">
                                                Netcracker Technology | Software
                                                Engineer
                                            </p>
                                            <p class="font-semibold text-sm text-gray-700">
                                                2021 - Present
                                            </p>
                                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">
                                                Key Responsibilities
                                            </p>
                                            <ul class="text-sm list-disc pl-4 space-y-1">
                                                <li>
                                                    Working on customer facing
                                                    product
                                                </li>
                                                <li>
                                                    Deliverying highly efficient
                                                    solutions
                                                </li>
                                                <li>Solving critical bugs</li>
                                            </ul>
                                        </div>

                                        <div class="flex flex-col mt-8">
                                            <p class="text-lg font-bold text-gray-700">
                                                TailwindFlex.com | Lead
                                            </p>
                                            <p class="font-semibold text-sm text-gray-700">
                                                2020-2021
                                            </p>
                                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">
                                                Key Responsibilities
                                            </p>
                                            <ul class="text-sm list-disc pl-4 space-y-1">
                                                <li>
                                                    Developed usable components
                                                </li>
                                                <li>
                                                    Solving complex problems
                                                </li>
                                                <li>Solving critical bugs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="py-3">
                                    <h2 class="text-lg font-poppins font-bold text-top-color">
                                        Projects
                                    </h2>
                                    <div class="border-2 w-20 border-top-color my-3"></div>

                                    <div class="flex flex-col">
                                        <div class="flex flex-col">
                                            <p class="text-lg font-semibold text-gray-700">
                                                Used Books mobile app
                                            </p>
                                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                                                A platform to sell as well as to
                                                buy used books only for PCCoE
                                                College due to this reuse of
                                                books will be there beneficial
                                                for environment also indirectly
                                                helps increase communication
                                                between juniors and seniors.
                                            </p>
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="text-lg font-semibold text-gray-700">
                                                Parking Automation System
                                            </p>
                                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                                                it’s a web application which
                                                helps you to book your slot for
                                                your car just like booking a
                                                movie ticket from home.
                                            </p>
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

export default ProfilePage;
