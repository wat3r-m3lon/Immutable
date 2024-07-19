import React from 'react';
import SubscriptionButton from "./subscriptionBtn";

function SubscriptionBlocks() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mt-16 md:mt-16 md:mb-10">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-16 md:pb-16">
                        <h1 className="h1">Choose Your Subscription
                        </h1>
                        {/*<p className="text-xl text-gray-400">Welcome to the era of decentralized academic*/}
                        {/*    credentialing.</p>*/}
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks>

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <h4 className="h4 mb-2">Free subscription</h4>
                            <p className="text-lg text-gray-400 text-center">Free</p>
                            <p className="text-lg text-gray-400 text-center">1 NFT limit</p>
                            <React.Fragment>
                                <br /> {/* 使用 React.Fragment 表示空行 */}
                                <br />
                                <br />
                                <br />
                                <br />
                            </React.Fragment>
                            <SubscriptionButton
                                className="uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            />


                        </div>


                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <h4 className="h4 mb-2">Plus subscription</h4>
                            <p className="text-lg text-gray-400 text-center">$9.99/month</p>
                            <p className="text-lg text-gray-400 text-center">100 NFTs limit</p>
                            <p className="text-lg text-gray-400 text-center">Faster certification speed</p>
                            <p className="text-lg text-gray-400 text-center">Priority support service</p>
                            <React.Fragment>
                                <br /> {/* 使用 React.Fragment 表示空行 */}
                                <br />
                                <br />
                            </React.Fragment>
                            <SubscriptionButton
                                className="uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            />
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <h4 className="h4 mb-2">Premium subscription</h4>
                            <p className="text-lg text-gray-400 text-center">$19.99/month</p>
                            <p className="text-lg text-gray-400 text-center">1000 NFTs limit</p>
                            <p className="text-lg text-gray-400 text-center">Faster certification speed</p>
                            <p className="text-lg text-gray-400 text-center">Personalized customization service</p>
                            <p className="text-lg text-gray-400 text-center">Advanced features</p>
                            <p className="text-lg text-gray-400 text-center">Priority support service</p>
                            <React.Fragment>
                                <br /> {/* 使用 React.Fragment 表示空行 */}
                            </React.Fragment>
                            <SubscriptionButton
                                className="uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            />
                        </div>


                        {/*4th item */}

                        {/*<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">*/}
                        {/*    <h4 className="h4 mb-2">Enterprise subscription</h4>*/}
                        {/*    <p className="text-lg text-gray-400 text-center">Custom pricing and features based on enterprise needs</p>*/}
                        {/*</div>*/}


                    </div>

                </div>
            </div>
        </section>
    );
}

export default SubscriptionBlocks;
