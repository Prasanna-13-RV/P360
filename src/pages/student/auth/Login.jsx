import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signin } from "../../../axios/auth.axios";

function Login() {
    // {setUserLoggedIn}
    const [formElements, setFormElements] = useState({});
    const navigate = useNavigate();
	const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formElements.regno);
        try {
            signin(formElements.regno,formElements.password).then((res)=>{
                console.log(res.data);
                if (res.data && res.data.token) {
                    var id=formElements.regno;
                    console.log(id);
                    setFormElements({})
                    // setUserLoggedIn(true);
                    
                    dispatch({
                      type: "SET_USER",
                      payload: {...res.data,role:"student"},
                    });
                    navigate(`/profile/${id}`);
                    
                  }
            })
          } catch (error) {
            console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
          }

    };

    return (
        <>
            {/* <Navbar /> */}
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="$"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                    >
                        CIT360
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                <div>
                                    <label
                                        htmlFor="regno"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your Register Number
                                    </label>
                                    <input
                                        type="text"
                                        name="regno"
                                        id="regno"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="210420104022"
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
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
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
                                                htmlFor="remember"
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
                                </div> */}
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Don't have an account yet?
                                    <a
                                        href="/"
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
            <Footer />
        </>
    );
}

export default Login;
