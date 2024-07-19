import React, {useEffect, useRef, useState} from 'react';

import PageIllustration from '../partials/PageIllustration';

import Footer from "../partials/Footer";

import AuthService from "../services/auth.service";

import axios from "axios";
import usePageTitle from '../../src/hooks/usePageTitle';

axios.defaults.withCredentials = true;
const EditProfile = () => {
    usePageTitle("Edit Profile"); 

    const currentUser = AuthService.getCurrentUser();

    // const [metadata, setMetadata ] = useState('');
    const [university, setUniversity] = useState('');
    const [major, setMajor] = useState('');
    const [description, setDescription] = useState('');
    const [profilePhoto, setProfilePhoto] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    // const metadataInputRef = useRef(null);

    //TODO add useRef()
    const form = useRef()


    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await axios.get('http://localhost:8080/api/profiles/'+id);
                setData(response.data);
            } catch (error) {
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



    //constraint of the file upload
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file && validateImage(file)) {
            previewFile(file);
        } else {
            setProfilePhoto("");
            setPreviewSource("");
            e.target.value = ""; // clear the file input field
            alert("Please select a valid image file (JPEG/JPG/PNG) less than 500kb.");
        }
    };

    const validateImage = (file) => {
        const validTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!validTypes.includes(file.type)) {
            return false;
        }
        if (file.size > 500000) {
            return false;
        }
        return true;
    };

    const previewFile = (coverPhoto) => {
        const reader = new FileReader();
        reader.readAsDataURL(coverPhoto);
        reader.onloadend = () => {

            const base64 = reader.result;
            // do something with the base64-encoded string
            setProfilePhoto(base64);
            setPreviewSource(reader.result);
        };
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8080/api/profiles/${currentUser.id}`,
            {
                university: university,
                major: major,
                description: description,
                profilePhoto: profilePhoto,
            })
            .then((data) => {
                alert('Profile placed successfully!');
                // clear inputs in form
                setDescription('');
                setUniversity('');
                setMajor('');
                setProfilePhoto('');
            }).catch((error) => {
            console.error(error);
            alert('Failed to place Profile. Please try again later.');
        });
    };


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="grow">
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration/>
                </div>
                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">


                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1">Edit Profile</h1>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form ref={form} onSubmit={handleSubmit}>







                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> University</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="university"
                                            placeholder={data.university}
                                            id="university"
                                            onChange={(e) => setUniversity(e.target.value)}
                                            required

                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Major</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="major"
                                            placeholder={data.major}
                                            id=" major"
                                            onChange={(e) => setMajor(e.target.value)}
                                            required


                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Description</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="description"
                                            placeholder={data.description}
                                            id="description"
                                            onChange={(e) => setDescription(e.target.value)}/>
                                    </div>




                                    {/*This is where I want users to be limited to uploading files in image format and no more than 500kb in size*/}

                                    <div>
                                        <label className="block text-gray-700 font-bold">Profile Photo:</label>
                                        <input
                                            type="file"
                                            name="qualification_file"
                                            onChange={handleFileInputChange}
                                        />
                                        {previewSource && (
                                            <img src={previewSource} alt="chosen" style={{height: "300px"}}/>
                                        )}
                                    </div>




                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit" value="Send"
                                        >
                                            Submit
                                        </button>
                                    </div>


                                </form>
                                <div>
                                    {/* will uncomment when form is finished*/}
                                    {/* <MintSection/> */}
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
export default EditProfile;

