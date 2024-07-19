import React from 'react';

import FeatImage01 from '../images/img.png';
import FeatImage02 from '../images/img_1.png';
import FeatImage03 from '../images/img_2.png';

function FeaturesZigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter
                        </div>
                        <h1 className="h2 mb-4">Secure Your Hiring with Blockchain</h1>
                        <p className="text-xl text-gray-400">Blockchain provides a secure platform for verifying
                            credentials, reducing risk of fraud and streamlining hiring. By leveraging the immutability
                            and transparency of the blockchain, employers can make more informed hiring decisions and
                            gain a competitive edge.</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="540"
                                     height="405" alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed.*/}
                                    {/*    Less spend*/}
                                    {/*</div>*/}
                                    <h3 className="h3 mb-3">Verified Credentials on Blockchain: Streamline Your
                                        Hiring</h3>
                                    {/*<p className="text-xl text-gray-400 mb-4">*/}

                                    {/*    </p>*/}
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Simplify and accelerate your recruitment process with blockchain-verified credentials.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Eliminate the need for time-consuming manual verification of qualifications.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Ensure the authenticity and integrity of candidate credentials with blockchain technology.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="540"
                                     height="405" alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed.*/}
                                    {/*    Less spend*/}
                                    {/*</div>*/}
                                    <h3 className="h3 mb-3">Trust Candidates' Credentials with Blockchain
                                        Transparency</h3>
                                    {/*<p className="text-xl text-gray-400 mb-4"></p>*/}
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Rest easy knowing that all candidate
                                        credentials are secure, tamper-proof, and transparent.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Verify the authenticity of qualifications in real-time with blockchain technology</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Build trust and confidence in your hiring process with immutable and transparent blockchain credentials</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="540"
                                     height="405" alt="Features 03"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed.*/}
                                    {/*    Less spend*/}
                                    {/*</div>*/}
                                    <h3 className="h3 mb-3">Informed Hiring with Accessible Blockchain Credentials</h3>
                                    {/*<p className="text-xl text-gray-400 mb-4"></p>*/}
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Simplify your recruitment process with easily accessible and interoperable blockchain credentials</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Ensure you have access to the most accurate and up-to-date candidate credentials</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Make informed hiring decisions based on reliable and verifiable blockchain-secured credentials.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturesZigzag;