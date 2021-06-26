import React from 'react';
import { Link } from "react-router-dom";
import { Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><h2>Keep Tabs</h2></Navbar.Brand>
                <Link to='/library'><h2>Library</h2></Link>
                <Link to='/search'><h2>Search</h2></Link>
                <Link to='/books/new'><h2>Add New Book</h2></Link>
        </Navbar>
    );
}

export default NavBar;
