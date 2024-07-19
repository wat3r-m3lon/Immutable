import { Link } from 'react-router-dom';
import LogoSVG from './LogoSVG';
import NavigationLinks from './NavigationLinks';
import UserProfile from './UserProfile';
import AuthButtons from './AuthButtons';

const Navigation = ({ showModeratorBoard, showAdminBoard, showInstitutionBoard, currentUser, showMenu, setShowMenu, logOut }) => {
    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    <nav className="hidden md:flex md:grow">
                        <NavigationLinks
                            showModeratorBoard={showModeratorBoard}
                            showAdminBoard={showAdminBoard}
                            showInstitutionBoard={showInstitutionBoard}
                            currentUser={currentUser}
                        />
                        {currentUser && <UserProfile currentUser={currentUser} showMenu={showMenu} setShowMenu={setShowMenu} logOut={logOut} />}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;
