import React from 'react';

import Navbar from '../common/Navbar';

const Page = ({ children }) => {
    return (
        <div>
            <Navbar />
            <section className='card-panel content row'>
                <div className='col s12'>{ children }</div>
            </section>
        </div>
    );
};

export default Page;
