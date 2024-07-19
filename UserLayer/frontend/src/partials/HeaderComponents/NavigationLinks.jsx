import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import AuthService from '../../services/auth.service';


const NavigationLinks = ({ showModeratorBoard, showAdminBoard, showInstitutionBoard, currentUser }) => {

    const user = AuthService.getCurrentUser();
   
    return (
        <div className="navbar-nav mr-auto">
            <ul className='flex'>
                {showModeratorBoard && (
                    <li className="nav-item list-none">
                        <Link to={"/mod"} className="text-white px-0 uppercase ...">
                            User Board
                        </Link>
                    </li>
                )}
                
                {showAdminBoard && (
                    <li className="nav-item list-none">
                        <Link to={"/admin"} className=" text-white px-2 sm:mr-2 mt-2 hover:text-black hover:underline">
                            Admin Board
                        </Link>
                    </li>
                )}

                {showInstitutionBoard && (
                    <li className="nav-item list-none">
                        <Link to={"/institution"} className=" text-white px-2 sm:mr-2 mt-2 hover:text-black hover:underline">
                            Institution Board
                        </Link>
                    </li>
                )}

                

                

                {user && ( 
                    <li className="nav-item list-none">
                        <Link to={`/user/${user.id}`} className="text-white px-2 sm:mr-2 mt-2 hover:text-black hover:underline">
                            My Request
                        </Link>
                    </li>
                )}
            </ul>

        </div>
    );
};

export default NavigationLinks;
