import { Link } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Navbar.Brand><h2>Keep Tabs</h2></Navbar.Brand>
                    <Nav.Link as={Link} to='/library'><h2>My Library</h2></Nav.Link>
                    <Nav.Link as={Link} to='/books/new'><h2>Add Book</h2></Nav.Link>
                    <Nav.Link as={Link} to='/search'><h2>Search Google Books</h2></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;