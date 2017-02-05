import React from 'react';
import { Link } from 'react-router';

const navRoutes = [
    { href: '/home', name: 'Home' },
    { href: '/todo', name: 'Todo' },
];

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <a href='' className='brand-logo center'>React Playground</a>
                <ul className='right hide-on-med-and-down'>
                    {
                        navRoutes.map((route, idx) => {
                            const isActive = (route.href === window.location.pathname);
                            return (
                                <li className={isActive ? 'active' : ''} key={idx}>
                                    <Link to={route.href}>{route.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
