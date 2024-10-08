// import React from 'react';
import {Link} from 'react-router-dom';
import usePageTitle from '../../src/hooks/usePageTitle';
import React, {useState, useRef} from "react";
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import AuthService from "../services/auth.service";
import Footer from "../partials/Footer";

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="invalid-feedback d-block">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="invalid-feedback d-block">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="invalid-feedback d-block">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};


function SignUp(props) {
    usePageTitle("Sign Up");
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            {/*<Header/>*/}

            {/*  Page content */}
            <main className="grow">

                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration/>
                </div>

                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-16 pb-12 md:pt-20 md:pb-20">

                            {/* Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1">Manage your verified credentials with NFT2.0.</h1>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form>
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full px-3">
                                            <button
                                                className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                                                <svg
                                                    className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"/>
                                                </svg>
                                                <span
                                                    className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                                                    aria-hidden="true"></span>
                                                <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="flex items-center my-6">
                                    <div className="border-t border-gray-700 border-dotted grow mr-3"
                                         aria-hidden="true"></div>
                                    <div className="text-gray-400">Or, register with your email</div>
                                    <div className="border-t border-gray-700 border-dotted grow ml-3"
                                         aria-hidden="true"></div>
                                </div>
                                <Form onSubmit={handleRegister} ref={form}>
                                    {!successful && (
                                        <div>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-300 text-sm font-medium mb-1"
                                                           htmlFor="full-name">Full Name <span
                                                        className="text-red-600">*</span></label>
                                                    <input name="username"
                                                           type="text"
                                                           className="form-input w-full text-gray-300"
                                                           placeholder="First and last name"
                                                           value={username}
                                                           onChange={onChangeUsername}
                                                           validations={[required, vusername]}/>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-300 text-sm font-medium mb-1"
                                                           htmlFor="email">Email <span className="text-red-600">*</span></label>
                                                    <input name="email"
                                                           type="email"
                                                           className="form-input w-full text-gray-300"
                                                           placeholder="you@email.com"
                                                           value={email}
                                                           onChange={onChangeEmail}
                                                           validations={[required, validEmail]}/>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-300 text-sm font-medium mb-1"
                                                           htmlFor="password">Password <span
                                                        className="text-red-600">*</span></label>
                                                    <input name="password"
                                                           type="password"
                                                           className="form-input w-full text-gray-300"
                                                           placeholder="Password (at least 10 characters)"
                                                           value={password}
                                                           onChange={onChangePassword}
                                                           validations={[required, vpassword]}/>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500 text-center">
                                                By clicking on 'Sign Up,' I acknowledge that I have read and agreed to
                                                the{' '}
                                                <a
                                                    href="https://www.contouradvisory.com.au/privacy-policy"
                                                    target="_blank"  // This opens the link in a new tab/window
                                                    rel="noopener noreferrer"  // Security best practice for opening links in a new tab/window
                                                    className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                                                >
                                                    Privacy Policy
                                                </a>{' '}
                                                and{' '}
                                                <a
                                                    href="https://www.contouradvisory.com.au/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                                                >
                                                    User Agreement
                                                </a>{' '}
                                                provided by Contour Company for the product Immutable NFT 2.0.
                                            </div>

                                            <div className="flex flex-wrap -mx-3 mt-6">
                                                <div className="w-full px-3">
                                                    <button
                                                        className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign
                                                        up
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}{message && (
                                    <div className="form-group">
                                        <div
                                            className={
                                                successful ? "alert alert-success" : "alert alert-danger"
                                            }
                                            role="alert"
                                        >
                                            {message}
                                        </div>
                                    </div>
                                )}
                                    {successful && (
                                        <div className="w-full px-3 mt-4">
                                            <Link to="/signin"
                                                  className="btn no-underline text-white bg-purple-600 hover:bg-purple-700 w-full">
                                                Return to login
                                            </Link>
                                        </div>
                                    )}
                                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                                </Form>
                                <div className="text-gray-400 text-center mt-6">
                                    Already using Immutable NFT 2.0? <Link to="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                                    Login </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            {/*<Banner/>*/}
            <Footer/>


        </div>
    );
}

export default SignUp;