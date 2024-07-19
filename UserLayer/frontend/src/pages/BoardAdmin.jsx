import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import PageIllustration from '../partials/PageIllustration';
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Footer from "../partials/Footer";
import axios from "axios";
import Modal from '../partials/Modal';
import EditProfileModal from '../utils/EditModel';
import ViewProfileModal from '../utils/ViewModel';
import usePageTitle from '../../src/hooks/usePageTitle';

axios.defaults.withCredentials = true;
function BoardAdmin() {
    usePageTitle("Admin Dashboard"); 

    const [user, setUser] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [resultData, setResultData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/admin");
        setUser(result.data);
    };

    const [deleteConfirmed, setDeleteConfirmed] = useState(false);

    const handleDelete = async (id) => {
        try {
            if (!deleteConfirmed) {
                const confirmed = window.confirm("Are you sure you want to delete this item?");
                if (confirmed) {
                    setDeleteConfirmed(true);
                } else {
                    return;
                }
            }

            await axios.delete(`http://localhost:8080/api/order/${id}`);
            // loadUser();
            alert("Item deleted");
        } catch (error) {
            console.log(error);
        }
    };

    const handleVerify = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/order/${id}`, {
                status: "Verified"
            });
            loadUser();
            alert("Verification successful");
        } catch (error) {
            console.log(error);
        }
    };

    const handleRefuse = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/order/${id}`, {
                status: "Invalid"
            });
            loadUser();
            alert("Request refused");
        } catch (error) {
            console.log(error);
        }
    };


    const OnManage = async (id) => {
        try {
            const result = await axios.get(`http://localhost:8080/api/order/${id}`);
            console.log(result);
            setResultData(result.data);
            setShowModal(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            {/*<Header />*/}

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
                                <h1 className="h1">Admin Dashboard</h1>
                            </div>

                            <button onClick={() => setShowModal(false)} style={{ display: !showModal ? 'none' : 'block' }}>
                                BACK
                            </button> 
                            {showModal ? (
                            <Modal show={showModal} onClose={() => setShowModal(false)} data={resultData} onDelete={handleDelete} onVerify={handleVerify} onRefuse={handleRefuse}/>
                            ) : (
                            <div className="flex items-center justify-center h-full">
                                <div className="py-4 ">
                                    <table className="table w-full border shadow mx-auto">
                                        <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {user.map((user, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center space-x-2">
                                                        <ViewProfileModal name={user.username} email={user.email} id={user.id}/>
                                                        
                                                        <EditProfileModal name={user.username} email={user.email} id={user.id}/> 
                                                        <button
                                                            className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500"
                                                            onClick={() => OnManage(user.id)}>
                                                            Manage request
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>                                    
                                </div>
                            </div>
                        )}
                            

                        
 



                        </div>
                    </div>
                </section>

            </main>

            <Footer/>

        </div>

    );
}

export default BoardAdmin;