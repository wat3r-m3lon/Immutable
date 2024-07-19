// Not using???

import React, {useRef, useState} from 'react';
import PageIllustration from '../partials/PageIllustration';
import Footer from "../partials/Footer";
import AuthService from "../services/auth.service";
import moment from 'moment';
import emailjs from '@emailjs/browser';
import axios from "axios";

axios.defaults.withCredentials = true;
const AddRequest = () => {
    const currentUser = AuthService.getCurrentUser();

    const [metadata, setMetadata, file, setFile, name, setName, ] = useState('');
    const metadataInputRef = useRef(null);

    function handleChange(event){
        setFile(event.target.files[0])
    }
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f8g1gbv', 'template_rm6oyrl', form.current, 'HV0f_EcVZYSdhYEqu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });};

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const status = 'pending';
        const requestData = {
            status,
            requestTime,
            metadata,
            file,
        };
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestData),
        };
        emailjs.sendForm('service_f8g1gbv', 'template_rm6oyrl', form.current, 'HV0f_EcVZYSdhYEqu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        fetch('http://localhost:8080/api/order/'+currentUser.id, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // TODO: show success message
                // TODO: clear form inputs
            })
            .catch((error) => {
                console.error(error);
                // TODO: show error message
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
                                <h1 className="h1">New NFT Request</h1>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form ref={form} onSubmit={handleSubmit}>

                                    {/*<div className="mb-4">*/}
                                    {/*    <label className="block text-gray-700 font-bold mb-2" htmlFor="metadata">*/}
                                    {/*        Metadata*/}
                                    {/*    </label>*/}
                                    {/*    <input*/}
                                    {/*        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                                    {/*        id="metadata"*/}
                                    {/*        type="text"*/}
                                    {/*        placeholder="Enter metadata"*/}
                                    {/*        value={metadata}*/}
                                    {/*        onChange={(e) => setMetadata(e.target.value)}*/}
                                    {/*        ref={metadataInputRef}*/}
                                    {/*        required*/}
                                    {/*    />*/}
                                    {/*</div>*/}


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Qualification Data
                                        </label>
                                        <p>Please enter the data you want to store in your qualification</p>
                                    </div>

                                    
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="dateofDelivery">
                                            Date of Delivery
                                        </label>
                                        <input
                                            className="shadowtext appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="dateofDelivery"
                                            type=""
                                            value={moment().format('YYYY-MM-DD')}
                                            readOnly
                                        />
                                    </div>


                                    {/* <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Education Type
                                        </label>
                                        <input 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            name="education_type"
                                            placeholder="Education Type e.g., University, College..."           
                                        />
                                    </div> */}


                                   {/*  <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Holder Name
                                        </label>
                                        <input 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            name="holder_name"
                                            placeholder="Holder Name i.e., qualification owner name"
                                        />
                                    </div> */}


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Name
                                        </label>
                                        <input 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            name="qualification_name"
                                            placeholder="Qualification Name"
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Description
                                        </label>
                                        <textarea 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="description" placeholder="Description"
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Authority Contact Email
                                        </label>
                                        <input 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="email" name="user_email" placeholder="Email for authority that issued your qualification"
                                        />
                                    </div>
                        
                                   
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Cover Photo
                                        </label>
                                        <input 
                                            type="file" onChange={handleChange}
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> 
                                            Comments
                                        </label>
                                        <textarea 
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="comment" placeholder="Submission comment"
                                        /> 
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="dateofDelivery">
                                        Expiration of the Microcredential 
                                        </label>
                                        <input
                                            className="shadowtext appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="ExpirationoftheMicrocredential "
                                            type=""
                                            value={moment().format('YYYY-MM-DD')}
                                            readOnly
                                        />
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
export default AddRequest;