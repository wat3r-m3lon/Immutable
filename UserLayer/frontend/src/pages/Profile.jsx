// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import usePageTitle from '../../src/hooks/usePageTitle';
import Footer from "../partials/Footer";
import PageIllustration from "../partials/PageIllustration";
import AuthService from "../services/auth.service";
import Connect from "./Connect";
import axios from "axios";
import NFTs from './NFTs';
import BadgeDrawer from '../partials/BadgeDrawer';

axios.defaults.withCredentials = true;
export default function Profile() {
    // add title
    usePageTitle("Profile");
    
    const currentUser = AuthService.getCurrentUser();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await axios.get('http://localhost:8080/api/profiles/'+id);
                setData(response.data);
                // console.log(response.data) 
            } catch (error) {
                console.log(data);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData(currentUser.id);
    }, []);


    //TODO need to beatify this loading component
    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (

        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*<Navbar transparent />*/}
            {/*<Footer/>*/}

            <main className="profile-page">
                {/*  Page illustration */}
                <div
                    className="relative max-w-6xl mx-auto h-0 pointer-events-none"
                    aria-hidden="true"
                >
                    <PageIllustration/>
                </div>
                
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-6 ">
                            <div className="px-6 ">
                                <div className="flex flex-wrap justify-center ">

                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">

                                            {/*IMPORTANT NOTICE: Buttons have been moved to APP.jsx*/}

                                            <div
                                                className="uppercase font-bold text-xs px-4 py-2"
                                                style={{
                                                    display: "center",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Connect/>

          </div>
                                            
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        
                                            <div className="mr-4 p-3 text-center">
                                           
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                199
                                                </span>
                                                                        <span className="text-sm text-blueGray-400">
                                                World Ranking
                                                </span>
                                                                    </div>
                                                                    <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                10
                                                </span>
                                                                        <span className="text-sm text-blueGray-400">
                                                Awarded badges
                                                </span>
                                                                    </div>
                                                                    <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                22
                                                </span>
                                                                        <span className="text-sm text-blueGray-400">
                                                Completed courses
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-3">
                                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                        {currentUser.username}
                                        {currentUser.roles.includes("ROLE_ADMIN") ? " (ADMIN)" : ""}
                                        {currentUser.roles.includes("ROLE_INSTITUTION") ? " (INSTITUTION)" : ""}
                                    </h3>
                                    
                                    {(JSON.stringify(data) != "{}")
                                    ?<img className={"rounded-full shadow-lg mb-10 mt-10 mx-auto max-w-150-px "}
                                    style={{  height: "150px", width: "auto"}}
                                    src={`data:image/png;base64,${data.profilePhoto}`}
                                    alt="base64 image"/>: 
                                    <div className='my-12'>
                                        <a href='/edit_profile'>You Haven't Set Up Your Profile, Go to Set It!</a>
                                    </div>
                                    }
                                    {/* <img className={"rounded-full shadow-lg mb-10 mt-10 mx-auto max-w-150-px "}
                                        style={{  height: "150px", width: "auto"}}
                                        src={`data:image/png;base64,${data.profilePhoto}`}
                                        alt="base64 image"
                                    /> */}
                                    <NFTs/>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-xl not-italic text-blueGray-400">
                                            University:
                                        </i>
                                        <i className='font-sans not-italic text-xl antialiased'>
                                            {data.university}
                                        </i>
                                         
                                    </div>

                                    <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-briefcase mr-2 text-xl not-italic text-blueGray-400">
                                            Major: 
                                        </i>
                                        <i className='font-sans not-italic text-xl antialiased'>
                                            {data.major}
                                        </i>

                                        
                                    </div>
                                </div>

                                
                                
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                {data.description}
                                                
                                            </p>
                                            <BadgeDrawer/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
