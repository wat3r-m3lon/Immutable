import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './LogoSVG';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import NavigationLinks from './NavigationLinks';

const Header = ({ showModeratorBoard, showAdminBoard,showInstitutionBoard, currentUser, logOut }) => {
    const items = [
        {
            key: '1',
            label: (
                <Link to="/order_request" className='text-black hover:text-sky-600' rel="noopener noreferrer">
                    NEW NFT
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/badge_design" className='text-black hover:text-sky-600' rel="noopener noreferrer">
                    Badge Design
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to="/reset_password" className='text-black hover:text-sky-600' rel="noopener noreferrer">
                    Reset Password
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to="/edit_profile" className='text-black hover:text-sky-600' rel="noopener noreferrer">
                    Edit Profile
                </Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link to="/signin" className='text-black hover:text-sky-600' rel="noopener noreferrer" onClick={logOut}>
                    Log Out
                </Link>
            ),
            danger: true,
        },
    ];


    return (
        <header className="bg-sky-600 w-full z-50">
            <div className="max-w-6xl mx-auto px-2 sm:px-5">
                <div className="flex items-center justify-between h-16">
                    <Logo className="h-6 w-6 sm:h-10 sm:w-10" />

                    <nav className="text-xs sm:text-sm md:text-base">
                        <ul className="flex space-x-2 sm:space-x-4">
                            <li><Link to="/" className="text-white hover:text-black">Home</Link></li>
                            <li><Link to="/faqs" className="text-white hover:text-black">FAQs</Link></li>
                            <li><Link to="/subscription" className="text-white hover:text-black">Subscription</Link></li>
                            <li>
                                <NavigationLinks 
                                    showModeratorBoard={showModeratorBoard} 
                                    showAdminBoard={showAdminBoard} 
                                    showInstitutionBoard={showInstitutionBoard}
                                />
                            </li>
                            <li>
                                {currentUser ? (
                                    <Dropdown menu={{ items }} trigger={['hover']}>
                                        <Link to="/profile" className="text-white hover:text-black">
                                            <Avatar className="cursor-pointer" style={{ backgroundColor: '#32CD32' }} size="small" icon={<UserOutlined />} />
                                        </Link>
                                    </Dropdown>
                                ) : (
                                    <Link to="/signin" className="text-white hover:text-black">LogIn</Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
