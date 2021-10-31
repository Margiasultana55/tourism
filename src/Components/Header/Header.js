import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './Header.css'
import useAuth from '../../hook/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar variant="dark" collapseOnSelect expand="lg" className='navbar fixed-top'>



                    <Navbar.Toggle />
                    <Navbar.Collapse className="ms-3">

                        <Nav.Link as={Link} to="/home" className='nav-link '>Home</Nav.Link>

                        <Nav.Link as={Link} to="/orders" className='nav-link'>My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/manage" className='nav-link'> Manage All Orders</Nav.Link>
                        <Nav.Link as={Link} to="/service" className='nav-link'> Add A New Service</Nav.Link>







                    </Navbar.Collapse>

                    <Navbar.Text>

                        {user?.email && <span className='ms-5 '>  <FaArrowAltCircleRight /> {user.displayName}</span>}
                    </Navbar.Text>

                    {user?.email && <Nav.Link as={Link} to="" className='nav-link ms-3 border me-4' onClick={logOut}> Logout</Nav.Link>}

                    {!user.email && <Nav.Link as={Link} to="/signup" className='nav-link border me-4 '> Sign up</Nav.Link>}




                </Navbar>

            </>
        </div>
    );
};

export default Header;