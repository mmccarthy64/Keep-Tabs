import { Link } from "react-router-dom";
import { Nav, Navbar, Button} from 'react-bootstrap';
import { useState } from "react";

const NavBar = () => {

    // let [darkMode, setDarkMode] = useState(true)
    
    // const toggleDarkMode = () => {
    //     const backgroundColor = document.getElementsByClassName('library-light')[0]
    //     if ( darkMode === true){
    //         setDarkMode(false)
    //         backgroundColor.className='library-dark'
    //     } else {
    //         setDarkMode(true)
    //         backgroundColor.className='library-light'
    //     }
    //     console.log(darkMode)
    // }

    return (
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Navbar.Brand><h2>Keep Tabs</h2></Navbar.Brand>
                    <Nav.Link as={Link} to='/library'><h2>My Library</h2></Nav.Link>
                    <Nav.Link as={Link} to='/books/new'><h2>Add Book</h2></Nav.Link>
                    <Nav.Link as={Link} to='/search'><h2>Search Google Books</h2></Nav.Link>
            </Nav>
            {/* <Button onClick={(darkMode) => toggleDarkMode(darkMode)} >{darkMode ? 'Dark Mode' : 'Light Mode'}</Button> */}
        </Navbar>
    );
}

export default NavBar;