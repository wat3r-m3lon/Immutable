import React, {useRef, useState} from 'react';

import PageIllustration from '../partials/PageIllustration';

import Footer from "../partials/Footer";
import '../css/index.css';
import { Layout, theme, Avatar } from 'antd';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Col, Divider, Row, Image } from 'antd';
// import InfoBoard from './infoBoard';

import { useNavigate } from 'react-router';




const BadgeDesign = () => {
    const { Header, Content, Footer } = Layout;
    const {token: {colorBgContainer }} = theme.useToken();
    const [picindex,setpicindex] = useState(0);
    //
    // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    // const [showAdminBoard, setShowAdminBoard] = useState(false);
    // const [currentUser, setCurrentUser] = useState(undefined);
    // const [showMenu, setShowMenu] = useState(false);


    const navigate = useNavigate()
    const goDesign = ()=>{
        navigate('/design')
    }


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="grow">
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration/>
                </div>
                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">






                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
export default BadgeDesign;

