import React, {useRef, useState} from 'react';
import PageIllustration from '../partials/PageIllustration';
import Footer from "../partials/Footer";
import AuthService from "../services/auth.service";
import moment from 'moment';
import emailjs from '@emailjs/browser';
import { Route,Routes,useNavigate } from 'react-router-dom'
import { Button, message, Space } from 'antd';
import usePageTitle from '../../src/hooks/usePageTitle';

import axios from "axios";
axios.defaults.withCredentials = true;
const OrderRequest = () => {
    usePageTitle("NFT Request"); 

    const currentUser = AuthService.getCurrentUser();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate(); // Used to jump to request history page after submitted a new NTF
    //const [educationType, setEducationType] = useState('');
    //const [holderName, setHolderName] = useState('');
    //const [qualificationName, setQualificationName] = useState('');

    //const [contactEmail, setContactEmail] = useState('');
    //const [comments, setComments] = useState('');
    const [certification, setCertification] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const [title, settitle] = useState("");
    const [provider, setprovider] = useState("");
    const [dateofDelivery, setdateofDelivery] = useState("");
    const [description, setdescription] = useState("");
    const [language, setlanguage] = useState("");

    const [learningOutcome, setlearningOutcome] = useState("");

    const [learnerEffort, setlearnerEffort] = useState("");
    const [inherentRequirements, setinherentRequirements] = useState("");

    const [assessment, setassessment] = useState("");
    const [credit, setcredit] = useState("");
    const [qualityAssurance, setqualityAssurance] = useState("");

    const [price, setprice] = useState("");
    const [MicrocredentialDate, setMicrocredentialDate] = useState("");

    const [DepthofLearning, setDepthofLearning] = useState("");
    const [Jurisdiction, setJurisdiction] = useState("");
    const [IndustrySupport, setIndustrySupport] = useState("");
    const [RecommendedPrior, setRecommendedPrior] = useState("");
    const [Stackability, setStackability] = useState("");
    const [IndustryOccupation, setIndustryOccupation] = useState("");
    const [IndustryAlignment, setIndustryAlignment] = useState("");
    const [institutionEmail, setInstitutionEmail] = useState('');

    // Jump to request history page after submitted a new NTF
    const go = () => {
        setTimeout(() => {
            navigate('/user/' + currentUser.id);
          }, 2000);
    };

    //TODO add useRef()
    const form = useRef()

    // The success message
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Your Request has Submitted Successfully'
        });
      };

    //constraint of the file upload
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file && validateImage(file)) {
            previewFile(file);
        } else {
            setCertification("");
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

    const previewFile = (certification) => {
        const reader = new FileReader();
        reader.readAsDataURL(certification);
        reader.onloadend = () => {
            const base64 = reader.result;
            // do something with the base64-encoded string
            console.log(base64);
            setCertification(base64);
            setPreviewSource(reader.result);
        };
    };


    //email format check
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleEmailBlur = (e) => {
        const email = e.target.value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        }
    };

    //check blank input
    const [errors, setErrors] = useState({});
    

    // TODO: update post content
    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset errors
        setErrors({});

        //const requestTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const status = 'pending';
        
        // Validation
        let validationErrors = {};
        if (!title) validationErrors.title = 'Title is required';
        if (!provider) validationErrors.provider = 'Provider is required';
        if (!dateofDelivery) validationErrors.dateofDelivery = 'Date of delivery is required';
        if (!description) validationErrors.description = 'Description is required';
        if (!language) validationErrors.language = 'Language is required';
        if (!learningOutcome) validationErrors.learningOutcome = 'Learning outcome is required';
        if (!learnerEffort) validationErrors.learnerEffort = 'Learner effort is required';
        if (!inherentRequirements) validationErrors.inherentRequirements = 'Inherent requirements is required';
        if (!assessment) validationErrors.assessment = 'Assessment is required';
        //if (!certification) validationErrors.certification = 'Certification is required';
        if (!credit) validationErrors.credit = 'Credit is required';
        //if (!contactEmail || !validateEmail(contactEmail)) validationErrors.contactEmail = 'A valid Authority Contact Email is required';
        if (!qualityAssurance) validationErrors.qualityAssurance = 'Quality assurance is required';
        if (!price) validationErrors.price = 'Price and Financial Assistance are required';
        //Recommended 
        if (!MicrocredentialDate) validationErrors.MicrocredentialDate = 'MicrocredentialDate are required';
        if (!DepthofLearning) validationErrors.DepthofLearning = 'DepthofLearning are required';
        if (!Jurisdiction) validationErrors.Jurisdiction = 'Jurisdiction are required';
        if (!IndustrySupport) validationErrors.IndustrySupport = 'IndustrySupport are required';
        if (!RecommendedPrior) validationErrors.RecommendedPrior = 'RecommendedPrior are required';
        if (!Stackability) validationErrors.Stackability = 'Stackability are required';
        if (!IndustryOccupation) validationErrors.IndustryOccupation = 'IndustryOccupation are required';
        if (!IndustryAlignment) validationErrors.IndustryAlignment = 'IndustryAlignment are required';
        // If there are validation errors, update the state and stop the form submission
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // emailjs.sendForm('service_ffifa7j', 'template_h97oayn', form.current, '-y7ErJyUi20RfWi0Q')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
            // If you want to send an email to institution, sign up an account for EmailJS


        // Reset the form
        //form.current.reset();

        console.log({
            status: status,
            title: title,
            provider: provider,
            dateofDelivery: dateofDelivery,
            description: description,
            language: language,
            learningOutcome: learningOutcome,
            learnerEffort: learnerEffort,
            inherentRequirements: inherentRequirements,
            assessment: assessment,
            credit: credit,
            qualityAssurance: qualityAssurance,
            price: price,
            MicrocredentialDate: MicrocredentialDate,
            DepthofLearning: DepthofLearning,
            Jurisdiction: Jurisdiction,
            IndustrySupport: IndustrySupport,
            RecommendedPrior: RecommendedPrior,
            Stackability: Stackability,
            IndustryOccupation: IndustryOccupation,
            IndustryAlignment: IndustryAlignment,
            certification: certification, //cover photo
        });
        
        axios.post(`http://localhost:8080/api/order/${currentUser.id}`, {
            status: status,
            title: title,
            provider: provider,
            institutionEmail: institutionEmail,
            dateofDelivery: dateofDelivery,
            description: description,
            language: language,
            learningOutcome: learningOutcome,
            learnerEffort: learnerEffort,
            inherentRequirements: inherentRequirements,
            assessment: assessment,
            credit: credit,
            qualityAssurance: qualityAssurance,
            price: price,
            MicrocredentialDate: MicrocredentialDate,
            DepthofLearning: DepthofLearning,
            Jurisdiction: Jurisdiction,
            IndustrySupport: IndustrySupport,
            RecommendedPrior: RecommendedPrior,
            Stackability: Stackability,
            IndustryOccupation: IndustryOccupation,
            IndustryAlignment: IndustryAlignment,
            certification: certification,  //all "cover photo" change to "certification"
        

            }).then((data) => {
                success();
                go();
            }).catch((error) => {
                console.error(error);
                alert('Failed to place order. Please try again later.');
            });
    };


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* The contextHolder is for the success message prompt after submission */}
            {contextHolder} 
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

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Qualification Data</label>
                                        <p>Please enter the data you want to store in your qualification</p>

                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Title<span className="text-red-500">*</span></label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="title"
                                            placeholder="brief description"
                                            id="title"
                                            onChange={(e) => settitle(e.target.value)}
                                            required
                                        />{errors.title && (
                                            <div className="text-red-500 mt-2">{errors.title}</div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Provider<span className="text-red-500">*</span></label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="provider"
                                            placeholder="provided name"
                                            id="provider"
                                            onChange={(e) => setprovider(e.target.value)}
                                            required
                                        />{errors.provider && (
                                            <div className="text-red-500 mt-2">{errors.provider}</div>
                                        )}
                                    </div>

                                                                <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Institution Email<span className="text-red-500">*</span></label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="email"
                                            name="Institution_email"
                                            placeholder="Enter institution email"
                                            id="institutionEmail"
                                            onChange={(e) => setInstitutionEmail(e.target.value)}
                                            onBlur={handleEmailBlur}  // Reuse the existing email validation function
                                            required
                                        />
                                        {errors.institutionEmail && (
                                            <div className="text-red-500 mt-2">{errors.institutionEmail}</div>
                                        )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="dateofDelivery">
                                            Date of Delivery<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="dateofDelivery"
                                            placeholder="DD-MM-YYYY"
                                            id="dateofDelivery"
                                            onChange={(e) => setdateofDelivery(e.target.value)}
                                            required
                                        />{errors.dateofDelivery && (
                                            <div className="text-red-500 mt-2">{errors.dateofDelivery}</div>
                                        )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Description<span className="text-red-500">*</span></label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="description" 
                                            placeholder="key content that will be taught" 
                                            id="description"
                                            onChange={(e) => setdescription(e.target.value)}
                                            />
                                            {errors.description && (
                                                <div className="text-red-500 mt-2">{errors.description}</div>
                                            )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Language<span className="text-red-500">*</span></label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="language"
                                            placeholder="language"
                                            id="language"
                                            onChange={(e) => setlanguage(e.target.value)}
                                            required
                                        />{errors.language && (
                                            <div className="text-red-500 mt-2">{errors.language}</div>
                                        )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Learning Outcome<span className="text-red-500">*</span></label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="learningOutcome" 
                                            placeholder="The knowledge, skills or competencies a student will acquire upon completing a microcredential." 
                                            id="learningOutcome"
                                            onChange={(e) => setlearningOutcome(e.target.value)}
                                            />
                                            {errors.learningOutcome && (
                                                <div className="text-red-500 mt-2">{errors.learningOutcome}</div>
                                            )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Learner Effort<span className="text-red-500">*</span></label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="learnerEffort" 
                                            placeholder="input hours, i. Number of hours of in-person face-to-face contact with teaching staff. ii. Number of hours of synchronous online contact with teaching staff. iii. Number of hours of peer-to-peer engagement and its mode. iv. Estimated number of hours of asynchronous online content and reading/viewing of audiovisual material, etc. v. Estimated number of hours spent on assessment." 
                                            id="learnerEffort"
                                            onChange={(e) => setlearnerEffort(e.target.value)}
                                            />
                                            {errors.learnerEffort && (
                                                <div className="text-red-500 mt-2">{errors.learnerEffort}</div>
                                            )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Inherent Requirements<span className="text-red-500">*</span></label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="inherentRequirements"
                                            placeholder="The resource/s (if any) needed to undertake a specific microcredential, i.e. a laptop, specific software, textbooks"
                                            id="inherentRequirements"
                                            onChange={(e) => setinherentRequirements(e.target.value)}
                                            required
                                        />{errors.inherentRequirements && (
                                            <div className="text-red-500 mt-2">{errors.inherentRequirements}</div>
                                        )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Assessment<span className="text-red-500">*</span></label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="assessment" 
                                            placeholder="list, competency vs proficiency, onsite or off site, input location if onsite" 
                                            id="assessment"
                                            onChange={(e) => setassessment(e.target.value)}
                                            />
                                            {errors.assessment && (
                                                <div className="text-red-500 mt-2">{errors.assessment}</div>
                                            )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Certification<span className="text-red-500">*</span></label>
                                        <input
                                            type="file"
                                            name="certification"
                                            onChange={handleFileInputChange}
                                        />
                                        {previewSource && (
                                            <img src={previewSource} alt="chosen" style={{height: "300px"}}/>
                                        )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Credit/Other Recognition<span className="text-red-500">*</span></label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="credit" 
                                            placeholder="The type of recognition (credit towards award courses, credit towards vendor/industry certifications, pathways or other recognition) that can be given upon completion of a microcredential." 
                                            id="credit"
                                            onChange={(e) => setcredit(e.target.value)}
                                            />
                                            {errors.credit && (
                                                <div className="text-red-500 mt-2">{errors.credit}</div>
                                            )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Quality Assurance<span className="text-red-500">*</span></label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="qualityAssurance" 
                                            placeholder="input statement of quality assurance processes applied to the microcredential such as provider or CRICOS" 
                                            id="qualityAssurance"
                                            onChange={(e) => setqualityAssurance(e.target.value)}
                                            />
                                            {errors.qualityAssurance && (
                                                <div className="text-red-500 mt-2">{errors.qualityAssurance}</div>
                                            )}
                                    </div>


                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Price and Financial Assistance<span className="text-red-500">*</span></label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="price"
                                            placeholder="payment methods"
                                            id="price"
                                            onChange={(e) => setprice(e.target.value)}
                                            required
                                        />{errors.price && (
                                            <div className="text-red-500 mt-2">{errors.price}</div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="MicrocredentialDate">
                                            Expiration of the Microcredential Date 
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="MicrocredentialDate"
                                            placeholder="DD-MM-YYYY"
                                            id="MicrocredentialDate"
                                            onChange={(e) => setMicrocredentialDate(e.target.value)}
                                            required
                                        />{errors.MicrocredentialDate && (
                                            <div className="text-red-500 mt-2">{errors.MicrocredentialDate}</div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Depth of Learning </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="DepthofLearning" 
                                            placeholder="The mastery level of a learner upon achievement of learning outcomes." 
                                            id="DepthofLearning"
                                            onChange={(e) => setDepthofLearning(e.target.value)}
                                            />
                                            {errors.DepthofLearning && (
                                                <div className="text-red-500 mt-2">{errors.DepthofLearning}</div>
                                            )}
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Jurisdiction </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="Jurisdiction" 
                                            placeholder="The institutions or jurisdictions where the microcredential is applicable or recognised." 
                                            id="Jurisdiction"
                                            onChange={(e) => setJurisdiction(e.target.value)}
                                            />
                                            {errors.Jurisdiction && (
                                                <div className="text-red-500 mt-2">{errors.Jurisdiction}</div>
                                            )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Industry Support </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="IndustrySupport" 
                                            placeholder="A statement of support from industry. " 
                                            id="IndustrySupport"
                                            onChange={(e) => setIndustrySupport(e.target.value)}
                                            />
                                            {errors.IndustrySupport && (
                                                <div className="text-red-500 mt-2">{errors.IndustrySupport}</div>
                                            )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Recommended Prior</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="RecommendedPrior" 
                                            placeholder="Staffs recommended to complete before attempting to undertake the microcredentia" 
                                            id="RecommendedPrior"
                                            onChange={(e) => setRecommendedPrior(e.target.value)}
                                            />
                                            {errors.RecommendedPrior && (
                                                <div className="text-red-500 mt-2">{errors.RecommendedPrior}</div>
                                            )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Stackability</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="Stackability" 
                                            placeholder="Any other microcredentials that a microcredential combines with." 
                                            id="Stackability"
                                            onChange={(e) => setStackability(e.target.value)}
                                            />
                                            {errors.Stackability && (
                                                <div className="text-red-500 mt-2">{errors.Stackability}</div>
                                            )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Industry/Occupation</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="IndustryOccupation" 
                                            placeholder="Industry/s that a microcredential sits within" 
                                            id="IndustryOccupation"
                                            onChange={(e) => setIndustryOccupation(e.target.value)}
                                            />
                                            {errors.IndustryOccupation && (
                                                <div className="text-red-500 mt-2">{errors.IndustryOccupation}</div>
                                            )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold">Industry Alignment </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="IndustryAlignment" 
                                            placeholder="Industry competency framework/s that a microcredential may be aligned to" 
                                            id="IndustryAlignment"
                                            onChange={(e) => setIndustryAlignment(e.target.value)}
                                            />
                                            {errors.IndustryAlignment && (
                                                <div className="text-red-500 mt-2">{errors.IndustryAlignment}</div>
                                            )}
                                    </div>
       
                                    <div className="flex items-center justify-between">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit" value="Send">
                                            Submit
                                        </button>
                                    </div>



                                    {/* <div className="mb-4">
                                    <label className="block text-gray-700 font-bold"> Education Type</label>
                                    <select 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="educationType"
                                        name="education_type"
                                        defaultValue={educationType}
                                        onChange={(e) => setEducationType(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select your option</option>
                                        <option value="Certificate I">Certificate I</option>
                                        <option value="Certificate II">Certificate II</option>
                                        <option value="Certificate III">Certificate III</option>
                                        <option value="Certificate IV">Certificate IV</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Advanced Diploma">Advanced Diploma</option>
                                        <option value="Associate Degree">Associate Degree</option>
                                        <option value="Bachelor Degree">Bachelor Degree</option>
                                        <option value="Graduate Certificate">Graduate Certificate</option>
                                        <option value="Graduate Diploma">Graduate Diploma</option>
                                        <option value="Masters Degree">Masters Degree</option>
                                        <option value="Doctoral Degree">Doctoral Degree</option>
                                    </select>
                                </div>
 */}
                                    {/* <div className="mb-4">
                                        <label className="block text-gray-700 font-bold"> Holder Name</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="holder_name"
                                            placeholder="Holder Name i.e., qualification owner name"
                                            id="holderName"
                                            onChange={(e) => setHolderName(e.target.value)}
                                            required
                                            //onChange={(e)=>(e.target.value)}

                                        />{errors.educationType && (
                                            <div className="text-red-500 mt-2">{errors.educationType}</div>
                                        )}
                                    </div>
 */}
                                    

                        

                                    {/* <div className="mb-4">
                                    <label className="block text-gray-700 font-bold"> Authority Contact Email</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="email"
                                        name="user_email"
                                        placeholder="Email for authority that issued your qualification"
                                        id="contactEmail"
                                        onChange={(e) => setContactEmail(e.target.value)}
                                        onBlur={handleEmailBlur}
                                        required
                                    />
                                    </div> */}


                                    {/*This is where I want users to be limited to uploading files in image format and no more than 500kb in size*/}

                                

                                   {/*  <div className="mb-4">
                                    <label className="block text-gray-700 font-bold"> Comments</label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="comment" placeholder="Submission comment" id="comments"
                                        onChange={(e) => setComments(e.target.value)}
                                    />{errors.comments && (
                                        <div className="text-red-500 mt-2">{errors.comments}</div>
                                    )}
                                    </div>
                                    */}


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
export default OrderRequest;

