import React from 'react';

function FAQStructure({ faq, index, toggleFAQ }) {
    return (
        <div className={"faq " + (faq.open ? 'open' : '')}>
            <button 
                className="faq-question" 
                aria-expanded={faq.open}
                onClick={() => toggleFAQ(index)}
            >
                {faq.question}
                <span className="toggle-icon"></span> {/*new toggle button */}
            </button>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    );
}

export default FAQStructure;
