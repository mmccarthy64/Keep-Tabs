import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id='nav-bar'>
            <Link>
                <h1 id='library'>Library</h1>
            </Link>
            <Link>
                <h1 id='search'>Search for Books</h1>
            </Link>
            <Link>
                <h1 id='book-form'>Add a Book</h1>
            </Link>
        </div>
    );
}

export default NavBar;
