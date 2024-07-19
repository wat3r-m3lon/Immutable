import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import DeleteButton from "../DeleteButton";
import React from "react";

const UserProfile = ({currentUser, logOut, showMenu, setShowMenu}) => {
    return (
        <div className="navbar-nav ml-auto flex flex-row">
            
            <li className="list-none">
                <a className="uppercase hover:shadow text-l px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mt-2  ease-linear transition-all duration-150"
                    type="button"
                    href={"/order_request"}>
                    New NFT
                </a>
            </li>

            <li className="list-none">
                <a className="uppercase hover:shadow  text-l px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mt-2  ease-linear transition-all duration-150"
                    type="button"
                    href={"/badge_design"}>
                    Badge Design
                </a>
            </li>


            <li className="list-none nav-item" onMouseLeave={() => setShowMenu(false)}
                onMouseEnter={() => setShowMenu(true)}>
                <Link
                    to={"/profile"}
                    className="font-medium text-purple-600 hover:text-gray-200
                       px-4 py-3 flex items-center transition duration-150 ease-in-out"

                >
                    {currentUser.username}
                </Link>

                {/*place showMenu in logOut div, because different length of username will cause the menu to disappear*/}
            </li>
            <li className="list-none nav-item" onMouseLeave={() => setShowMenu(false)}>
                <a
                    href="/signin"
                    className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                    onClick={logOut}
                >
                    LogOut
                </a>
                {showMenu && (
                    <CSSTransition
                        in={showMenu}
                        timeout={300}
                        classNames="menu"
                        unmountOnExit
                    >
                        <div className="menu" onMouseEnter={() => setShowMenu(true)}>
                            <ul>
                                <li><a
                                    className="uppercase font-bold   text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1  ease-linear transition-all duration-150"
                                    type="button"
                                    href={"/reset_password"}
                                >
                                    Reset Password
                                </a></li>

                                <li><a
                                    className="uppercase font-bold   text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1  ease-linear transition-all duration-150"
                                    type="button"
                                    href={"/edit_profile"}
                                >
                                    Edit Profile
                                </a></li>


                                {/*TODO Need to set ShowMenu=false when click delete button*/}
                                <DeleteButton userId={currentUser.id}/>


                            </ul>
                        </div>
                    </CSSTransition>
                )}
            </li>
        </div>
    );
};

export default UserProfile;
