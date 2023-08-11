import React, { Fragment, useState } from "react";
import FooterAdmin from "../../../components/admin/FooterAdmin";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";

function RegisterAdmin() {
    const [formElements, setFormElements] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, conpassword } = formElements;

        if (password !== conpassword) {
            alert("Password not match");
            return;
        }
        createUser(email, password).then((res) => {
            localStorage.setItem("token", true);
            localStorage.setItem("admin", true);
        });
    };

    function createUser(email, password) {
    }

    return (
        <>
            <NavbarAdmin />
            <section className="bg-gray-50 py-5">
                <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a
                        href="$"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                    >
                        CIT360
                    </a> */}
                    <div className="w-full my-5 bg-white rounded-lg shadow sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form
                                class="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={(e) => {
                                            setFormElements((prev) => {
                                                return {
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="userName"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Name"
                                        required=""
                                        onChange={(e) => {
                                            setFormElements((prev) => {
                                                return {
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setFormElements((prev) => {
                                                return {
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="conpassword"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="conpassword"
                                        id="conpassword"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                        onChange={(e) => {
                                            setFormElements((prev) => {
                                                return {
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required=""
                                                onChange={(e) => {
                                                    setFormElements((prev) => {
                                                        return {
                                                            ...prev,
                                                            [e.target.name]:
                                                                e.target.value,
                                                        };
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                className="text-gray-500 "
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="$"
                                        className="text-sm font-medium text-primary-600 hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Don't have an account yet?
                                    <a
                                        href="/register"
                                        className="font-medium text-primary-600 hover:underline"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAdmin />
        </>
    );
}

export default RegisterAdmin;
