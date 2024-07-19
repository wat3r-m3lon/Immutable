import React, {useState, useEffect} from 'react';
import usePageTitle from '../../src/hooks/usePageTitle';
import PageIllustration from '../partials/PageIllustration';
import axios from "axios";
import AuthService from "../services/auth.service";
import {useNavigate} from 'react-router-dom';
import EventBus from "../common/EventBus";
import moment from 'moment';
import Footer from "../partials/Footer";

axios.defaults.withCredentials = true;
function ResetPassword() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [username, setUsername] = useState("");

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");

    const [countdown, setCountdown] = useState(0);
    const [disabled, setDisabled] = useState(false);

    // add title
    usePageTitle("Reset Password");


    // const currentUser = AuthService.getCurrentUser();


    const navigateTo = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setDisabled(false);
        }
    }, [countdown]);


    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };


    function sendVerificationCode(e) {
        e.preventDefault();
        console.log(email)
        console.log(username)

        axios
            .post('http://localhost:8080/api/email/send', JSON.stringify({
                "email": email,
                "username": username,
                "requestTime": moment().format('YYYY-MM-DD HH:mm:ss')

            }), {
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                // setSendMessage(true);
                alert("Verification code sent to " + email)
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    {/*TODO we need to keep new Password safe!!!!!!!*/
    }

    function setNewPassword(e) {
        e.preventDefault();
        console.log(password)
        axios
            .post('http://localhost:8080/api/email/verify', JSON.stringify({
                "username": username,
                "email": email,
                "code": code,
                "password": password

            }), {
                headers: {"Content-Type": "application/json"}
            })
            .then((response) => {
                if (response.data.message === "Your password has been changed") {
                    alert('Your password has been changed!');
                } else {
                    alert('Verification code is incorrect or expired!');
                }

                navigateTo('/')
                logOut()
                EventBus.dispatch("logout");

            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleClick(e) {
        e.preventDefault();
        setDisabled(true);
        setCountdown(60);
        sendVerificationCode(e);
    }


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration/>
                </div>

                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            {/* Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1 mb-4">Forgot your password?</h1>
                                <p className="text-xl text-gray-400">We'll email you instructions on how to reset
                                    it.</p>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1"
                                                   htmlFor="username">Username</label>
                                            <input id="username" type="text"
                                                   className="form-input w-full text-gray-300"
                                                   placeholder="Enter your username" required value={username}
                                                   onChange={(e) => setUsername(e.target.value)}/>

                                            <label className="block text-gray-300 text-sm font-medium mb-1"
                                                   htmlFor="email">Email</label>
                                            <div className="flex w-full">
                                                <input id="email" type="email"
                                                       className="form-input w-full text-gray-300"
                                                       placeholder="Enter your email" required value={email}
                                                       onChange={(e) => setEmail(e.target.value)}/>
                                                <button
                                                    type="submit"
                                                    className="btn text-white bg-purple-600 hover:bg-purple-700"
                                                    style={{width: "80px", marginLeft: "10px"}}
                                                    onClick={handleClick}
                                                    disabled={disabled}
                                                >
                                                    {countdown > 0 ? `${countdown}s` : 'Send'}
                                                </button>
                                            </div>

                                        </div>


                                    </div>
                                </form>



                                <form onSubmit={setNewPassword}>
                                    <div className="flex flex-wrap -mx-3 my-4">
                                        <div className="w-full px-3">
                                            <label className="block text-gray-300 text-sm font-medium mb-1"
                                                   htmlFor="newPassword">Verification Code</label>
                                            <input id="code" type="text"
                                                   className="form-input w-full text-gray-300"
                                                   placeholder="Enter verification code" required value={code}
                                                   onChange={(e) => setCode(e.target.value)}/>

                                            <label className="block text-gray-300 text-sm font-medium mb-1"
                                                   htmlFor="newPassword">New Password</label>
                                            <input id="newPassword" type="password"
                                                   className="form-input w-full text-gray-300"
                                                   placeholder="Enter new password" required value={password}
                                                   onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 my-4">
                                        <div className="w-full px-3">
                                            <button type="submit"
                                                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset
                                                Password
                                            </button>
                                        </div>
                                    </div>
                                </form>



                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/*<Banner />*/}
            <Footer />
        </div>
    );
}

export default ResetPassword;
