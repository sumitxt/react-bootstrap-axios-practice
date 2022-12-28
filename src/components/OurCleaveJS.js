import React from 'react';
import Cleave from 'cleave.js/react'
const OurCleaveJs = () => {
    return (
        <div>
            <Cleave
            options={{creditCard: true}}></Cleave>
            <br/>
            <Cleave
                options={{date: true,
                    delimiter: '-',
                    datePattern: ['Y', 'm', 'd']}}></Cleave>
        </div>
    );
};

export default OurCleaveJs;