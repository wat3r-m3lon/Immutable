import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageIllustration from '../partials/PageIllustration';
import usePageTitle from '../../src/hooks/usePageTitle';
import Footer from "../partials/Footer";
import Modal2 from '../partials/Modal2';
 
axios.defaults.withCredentials = true;
 
function BoardInstitution() {
    usePageTitle("Institution Dashboard");
 
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
 
    useEffect(() => {
        const loadUsers = async () => {
            // Adjust the URL to whatever your institution's endpoint is
            const result = await axios.get("http://localhost:8080/institution");
            setUsers(result.data);
        };
 
        loadUsers();
    }, []);
 
    const onManage = async (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };
 
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="grow">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">Institution Dashboard</h1>
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <div className="py-4">
                                <table className="table w-full border shadow mx-auto">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <button
                                                        onClick={() => onManage(user)}
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Manage request
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>                                    
                            </div>
                        </div>
                        <button onClick={() => setShowModal(false)} style={{ display: !showModal ? 'none' : 'block' }}>
                            BACK
                        </button>
                        {showModal && (
                            <Modal2
                                show={showModal}
                                onClose={() => setShowModal(false)}
                                data={users} // Assuming `Modal2` expects an array of users
                                user={selectedUser} // This is the individual user for the modal
                                // Include any additional props needed by Modal2 for handling actions
                                //onDelete={handleDeleteUser}
                                //onVerify={handleVerifyUser}
                               //onRefuse={handleRefuseUser}

                                // Pass any additional props to Modal2 as needed
                            />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
 
export default BoardInstitution;
 
