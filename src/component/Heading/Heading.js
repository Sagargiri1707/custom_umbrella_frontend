import React from 'react';
import HeadingCss from './Heading.module.css'
function Heading(props) {
    return (
        <div className={HeadingCss.heading}>
            <h1>Custom Umbrella</h1>
        </div>
    );
}

export default Heading;