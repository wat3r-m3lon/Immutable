import React from 'react';
import usePageTitle from '../../src/hooks/usePageTitle';
// import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Intro from './HomePage/Components/Intro';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import SubscriptionBlocks from "../partials/SubscriptionBlocks";
import AuthService from "../services/auth.service";

function Subscription() {
    usePageTitle("Subscription"); 

    const currentUser = AuthService.getCurrentUser();



    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            {/*<Header />*/}

            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>

                {/*  Page sections */}
                {/*<Intro />*/}
                <SubscriptionBlocks />
                            {/*<FeaturesZigZag />*/}
                {/*<Testimonials />*/}
                {/*<Newsletter />*/}
            </main>

            {/*<Banner />*/}

            {/*  Site footer */}
            <Footer />
        </div>
    );
}

export default Subscription;