import { Link } from "react-router-dom";
import { Nav, Navbar, Button} from 'react-bootstrap';
// import { useState } from "react";

const NavBar = (props) => {

    // let [darkMode, setDarkMode] = useState(true)

    // const toggleDarkMode = (darkMode) => {
    //     if (darkMode === true){
    //         props.swapDarkMode(darkMode)
    //     } else if (darkMode === false){
    //         props.swapDarkMode(darkMode)
    //     }
    //     setDarkMode(!darkMode)
    // }

    return (
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Navbar.Brand><h2>Keep Tabs</h2></Navbar.Brand>
                    <Nav.Link as={Link} to='/library'><h2>My Library</h2></Nav.Link>
                    <Nav.Link as={Link} to='/books/new'><h2>Add Book</h2></Nav.Link>
                    <Nav.Link as={Link} to='/search'><h2>Search Google Books</h2></Nav.Link>
            </Nav>
            <Nav.Link as={Link} to='/library'><h2>Welcome, {props.user.username}</h2></Nav.Link>
            <Button onClick={() => props.handleLogoutClick()} >Logout</Button>
            {/* <Button variant='secondary' onClick={() => toggleDarkMode(darkMode)} >{darkMode ? 'Dark Mode' : 'Light Mode'}</Button> */}
        </Navbar>
    );
}

export default NavBar;