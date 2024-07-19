import {Link} from "react-router-dom";
import React from "react";

const AuthButtons = () => {
    return (
        <div className="navbar-nav ml-auto flex flex-row">
            <li className="font-medium ...">
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
    );
};

export default AuthButtons;