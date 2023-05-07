import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header Now </h1>
            <nav>
                <Link to={"/"} className='mr-5'>Home</Link>
                <Link to={"/user"}>User</Link>
            </nav>

        </div>
    );
};

export default Header;