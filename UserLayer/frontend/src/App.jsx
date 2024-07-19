import {Routes, Route, useLocation, Link} from "react-router-dom";
import "aos/dist/aos.css";
import "./css/style.css";
import AOS from "aos";
import React, {useState, useEffect} from "react";
import BoardUser from "./pages/BoardUser";
import BoardModerator from "./pages/BoardModerator";
import Home from "./pages/HomePage/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Profile1 from "./pages/Profile";
import {CSSTransition} from "react-transition-group";
import Mint from "./pages/Mint";
import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";
import Subscription from "./pages/Subscription";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import BoardAdmin from "./pages/BoardAdmin";
import OrderRequest from "./pages/OrderRequest";


import EditProfile from "./pages/EditProfile";
import DeleteButton from "./partials/DeleteButton";
import BadgeDesign from "./pages/DesignPage/Home/app";
import BadgeDisplay from "./pages/DisplayPage/display";
import InfoPage from "./pages/InfoPage/InfoPage";
import FAQs from "./pages/HomePage/Components/FAQ/FAQ";
import Header from "./partials/HeaderComponents/Header";
import Navigation from "./partials/HeaderComponents/Navigation";
import BoardInstitution from './pages/BoardInstitution';


const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showInstitutionBoard, setShowInstitutionBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    });

    useEffect(() => {
        document.querySelector("html").style.scrollBehavior = "auto";
        window.scroll({top: 0});
        document.querySelector("html").style.scrollBehavior = "";
    }, [location.pathname]); // triggered on route change

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
            setShowInstitutionBoard(user.roles.includes("ROLE_INSTITUTION"));  
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };
    
    return (

        <div>  
            <Header
            showModeratorBoard={showModeratorBoard}
            showAdminBoard={showAdminBoard}
            showInstitutionBoard={showInstitutionBoard}
            currentUser={currentUser}
            logOut={logOut}
        />
           
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/profile" element={<Profile1/>}/>/
                    <Route path="/user/:userId" component={currentUser} element={<BoardUser/>}/>
                    <Route path="/mod" element={<BoardModerator/>}/>
                    <Route path="/admin" element={<BoardAdmin/>}/>
                    <Route path="/subscription" element={<Subscription/>}/>
                    <Route path="/faqs" element={<FAQs/>}/>         
                    <Route exact path="/addadmin" element={<AddUser/>}/>
                    <Route exact path="/editamin/:id" element={<EditUser/>}/>
                    <Route exact path="/order_request" element={<OrderRequest/>}/>
                    <Route exact path="/reset_password" element={<ResetPassword/>}/>
                    <Route exact path="/mint" element={<Mint/>}/>
                    <Route exact path="/edit_profile" element={<EditProfile/>}/>
                    <Route exact path="/info_page" element={<InfoPage/>}/>
                    <Route exact path="/badge_design" element={<BadgeDesign/>}/>
                    <Route exact path="/display" element={<BadgeDisplay/>}/>
                    <Route exact path="/institution" element={<BoardInstitution/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
