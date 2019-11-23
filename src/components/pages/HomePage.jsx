import React from 'react';
import { Link } from 'react-router-dom';

import Page from './Page';

const HomePage = () => {
    return (
        <Page>
            <h2 className='center-align'>This is the Home Page</h2>
            <h3 className='center-align'>
                <Link to='/todo'>Try the Todo Page</Link>
            </h3>
        </Page>
    );
};

export default HomePage;