import React from 'react';

function HowItWorks(props) {
    return (
        <div className="image">
            <img src={props.src} width="70%" height="70%" alt={props.alt} />
        </div>
    );
}

export default HowItWorks;
