import React, {useState} from 'react';
import Header from './FAQHeader';
import FAQS from './FAQStructure';
import "./FAQ.css";
import usePageTitle from '../../../../hooks/usePageTitle';
import Footer from "../../../../partials/Footer";

function FAQ() {
    usePageTitle("FAQs"); 

    const [faqs, setfaqs] = useState([
        {
            question: 'What is the Blockchain?',
            answer: 'Immutable uses the Bitcoin Blockchain to create an unalterable record of credentials. The Blockchain is a secure digital ledger for economic transactions that can be programmed to document any valuable information, not limited to financial transactions. Any data written to the Blockchain is immutable and cannot be modified by any party in the future.',
            open: true
        },
        {
            question: 'What is the NFT?',
            answer: 'In NFT technology, a unique and non-fungible token is created to represent a credential, which is stored on the Blockchain. This creates an unchangeable record of the credential, as the token is one-of-a-kind and cannot be duplicated or altered. The Blockchain serves as a secure digital ledger for the token, ensuring that the credential remains immutable and verifiable. Any attempt to create a fraudulent NFT representing the same credential will fail verification against the Blockchain record.',
            open: false
        },
        {
            question: 'How Does the Blockchain Prevent Fraud?',
            answer: 'After a credential has been recorded on the Blockchain, it becomes immutable and cannot be tampered with, counterfeited, or impersonated. Any attempt to create a credential resembling yours will fail verification against the Blockchain record.',
            open: false
        },
        {
            question: 'How Does it Work?',
            answer: 'When a credential is created, the information provided is used to generate a JSON file that represents that information as a decentralized storage link. This information is then sent to the blockchain and stored there. When someone verifies a credential, we compare the stored link with the information generated from the credential today to ensure that they match.',
            open: false
        },
        {
            question: 'Is Private Information Available on the Blockchain?',
            answer: 'No private or personal information is stored on the Blockchain. The only thing stored on the Blockchain is a decentralised platform link derived from the credential information. We can use this series of numbers to verify that the content displayed matches the original record.',
            open: false
        },
        ,
        {
            question: 'Does Immutable Sell My Data To Third Parties?',
            answer: 'At Immutable, we do not sell our users\' data to third parties. We collaborate with a small number of third-party providers to offer essential services such as decentralized data backup hosting (IPFS). Our contractual agreements with each of these providers prohibit them from using or sharing user data with anyone else, and ensure that they take appropriate measures to safeguard the data. By prioritizing data privacy and security, Immutable strives to maintain the trust of our users and provide them with a secure platform for their credentials.',
            open: false
        },
        ,
        {
            question: 'What Does Immutable Do To Protect My Personal Data?',
            answer: 'Immutable utilizes a role-based access control framework that grants access to data only to authorized roles. We subject our security and data privacy controls, software, infrastructure, and systems to both internal and external audits annually to ensure their effectiveness. By maintaining robust security and privacy measures, Immutable prioritizes the protection of our users\' data and ensures that our platform remains a secure and trustworthy environment for managing credentials.',
            open: false
        },
        {
            question: 'How Can Recipients Retrieve Own Credentials?',
            answer: 'Profile is a page that will fetch any credentials associated with a recipients email address and display them links to each credential.',
            open: false
        },
        {
            question: 'How Do I Design a Digital Badge?',
            answer: 'Click on the Create Badge Design button at the top right-hand corner of the page. This will open the Badge Builder on a new page. If you want to create a new badge from scratch, use tabs in the sidebar menu to create your perfect badge.',
            open: false
        },
        {
            question:"Can I Transfer My Immutable Credentials to Another User?",
            answer: "Immutable credentials are tied to individual identities. While they cannot be directly transferred, they can be revoked and reissued to the new owner following a secure verification process.",
            open: false
        },
        {
            question: "What Happens if I Lose Access to My Immutable Account?",
            answer: 'In the event of account loss, Immutable provides recovery options. Users can follow a secure account recovery process to regain access, ensuring the safety of their credentials.',
            open: false
        },
        {
            question: "Can Credentials on the Blockchain be Revoked or Updated?",
            answer: "Immutable credentials on the Blockchain cannot be altered. However, revocation or updates may be managed by issuing a new credential with the updated information and linking it to the previous one.",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }


    return (
        <div className="FAQ">
            <div className="max-w-6xl mx-auto text-center pb-16 md:pb-16 grid place-items-center py-8">
                <div>
                    <h2 className="h1 mb-4 mt-8">FAQs.</h2>
                    <p className="text-xl text-gray-400">
                        Explore further the groundbreaking technology that is transforming the qualification landscape.
                    </p>
                </div>
                <div className="faqs">
                    {faqs.map((faq, i) => (
                        <FAQS key={i} faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;
