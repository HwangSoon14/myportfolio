import React from 'react';
import "./TabDesc.scss"
const TabDesc = ({desc}) => {
    return (
        <div className="tab-desc">
            <p>{desc}</p>
        </div>
    );
};

export default TabDesc;