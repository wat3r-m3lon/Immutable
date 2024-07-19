import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";

function Header() {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showInstitutionBoard, setShowInstitutionBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    // const [mobileNavOpen, setMobileNavOpen] = useState(false);
    //
    // const trigger = useRef(null);
    // const mobileNav = useRef(null);


    // close the mobile menu on click outside
    // useEffect(() => {
    //   const clickHandler = ({ target }) => {
    //     if (!mobileNav.current || !trigger.current) return;
    //     if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
    //     setMobileNavOpen(false);
    //   };
    //   document.addEventListener('click', clickHandler);
    //   return () => document.removeEventListener('click', clickHandler);
    // });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {



        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
            setShowInstitutionBoard(user.roles.includes("ROLE_INSTITUTION"))
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };


        // const keyHandler = ({ keyCode }) => {
        //   if (!mobileNavOpen || keyCode !== 27) return;
        //   setMobileNavOpen(false);
        // };
        //
        //
        // document.addEventListener('keydown', keyHandler);
        // return () => document.removeEventListener('keydown', keyHandler);




    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setShowInstitutionBoard(false);
        setCurrentUser(undefined);
    };

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="My App">
                            <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.371 0 0 5.372 0 12v-.002C0 18.627 5.371 24 12 24c6.628 0 12-5.372 12-12v.002C24 5.371 18.628 0 12 0zm.67 20.223c-3.816 0-6.89-3.073-6.89-6.889s3.074-6.89 6.89-6.89c3.816 0 6.89 3.073 6.89 6.89s-3.074 6.89-6.89 6.89zM12.67 8.69c-1.426 0-2.58 1.155-2.58 2.58 0 1.425 1.154 2.58 2.58 2.58 1.425 0 2.58-1.155 2.58-2.58 0-1.425-1.155-2.58-2.58-2.58z"/>
                            </svg>
                        </Link>
                    </div>



                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">

                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <div className="navbar-nav mr-auto">
                                {showModeratorBoard && (
                                    <li className="nav-item">
                                        <Link to={"/mod"} className="nav-link">
                                            Moderator Board
                                        </Link>
                                    </li>
                                )}

                                {showAdminBoard && (
                                    <li className="nav-item">
                                        <Link to={"/admin"} className="nav-link">
                                            Admin Board
                                        </Link>
                                    </li>
                                )}

                                {showInstitutionBoard && (
                                    <li className="nav-item">
                                        <Link to={"/institution"} className="nav-link">
                                        Institution Board
                                        </Link>
                                    </li>
                                )}  

                                {currentUser && (
                                    <li className="nav-item">
                                        <Link to={"/user"} className="nav-link">
                                            User
                                        </Link>
                                    </li>
                                )}
                            </div>

                            {currentUser ? (
                                <div className="navbar-nav ml-auto flex flex-row">
                                    <li className="nav-item">
                                        <Link to={"/profile"} className="font-medium text-purple-600 hover:text-gray-200
                       px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                            {currentUser.username}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/signin" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3" onClick={logOut}>
                                            LogOut
                                        </a>
                                    </li>
                                </div>
                            ) : (
                                <div className="navbar-nav ml-auto flex flex-row">
                                    <li className="font-medium text-purple-600 hover:text-gray-200
                       px-4 py-3 flex items-center transition duration-150 ease-in-out">
                                        <Link to={"/signin"} className="nav-link">
                                            Sign in
                                        </Link>
                                    </li>

                                    <li className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                                        <Link to={"/signup"} className="nav-link">
                                            Sign Up
                                        </Link>
                                    </li>
                                </div>
                            )}

                        </ul>

                    </nav>


                    {/* Mobile menu  //TODO design Mobile menu*/}
                    {/*<div className="md:hidden">*/}

                    {/*  /!* Hamburger button *!/*/}
                    {/*  <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>*/}
                    {/*    <span className="sr-only">Menu</span>*/}
                    {/*    <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*      <rect y="4" width="24" height="2" rx="1" />*/}
                    {/*      <rect y="11" width="24" height="2" rx="1" />*/}
                    {/*      <rect y="18" width="24" height="2" rx="1" />*/}
                    {/*    </svg>*/}
                    {/*  </button>*/}

                    {/*  /!*Mobile navigation *!/*/}
                    {/*  <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>*/}
                    {/*    <ul className="bg-gray-800 px-4 py-2">*/}
                    {/*      <li>*/}
                    {/*        <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>*/}
                    {/*      </li>*/}
                    {/*      <li>*/}
                    {/*        <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>*/}
                    {/*      </li>*/}
                    {/*    </ul>*/}
                    {/*  </nav>*/}

                    {/*</div>*/}

                </div>
            </div>
        </header>
    );
}

export default Header;
