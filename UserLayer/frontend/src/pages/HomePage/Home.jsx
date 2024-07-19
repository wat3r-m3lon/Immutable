import React, {useRef} from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import PageIllustration from '../../partials/PageIllustration';
import Intro from './Components/Intro';
import FeaturesBlocks from '../../partials/FeaturesBlocks';
import FeaturesZigZag from '../../partials/FeaturesZigzag';
import Newsletter from '../../partials/Newsletter';
import Footer from '../../partials/Footer';
import FAQ from './Components/FAQ/FAQ';
import HowItWorks from "./Components/HowItWorks";
import how_it_works from '../../images/How it works.png';

function Home() {

    // Scroll to the designated location of the page
    const refToHowItWorks = useRef(null);
    const handleButtonClick = () => {
        refToHowItWorks.current.scrollIntoView({behavior: 'smooth'});
    }

    usePageTitle("Home");

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration/>
                </div>

                {/*  Page sections */}
                <Intro onButtonClick={handleButtonClick}/>
                <FeaturesBlocks/>
                <FeaturesZigZag/>
                <div ref={refToHowItWorks} className="mb-8">
                    <HowItWorks src={how_it_works} alt="How the platform works - Steps"/>
                </div>
                {/*<FAQ/> moved to a single page*/}
                <Newsletter/>
            </main>

            {/*<Banner />*/}

            {/*  Site footer */}
            <Footer/>
        </div>

    )
       
}

export default Home;