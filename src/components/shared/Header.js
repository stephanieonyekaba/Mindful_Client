import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>

			<Link to='/' style={linkStyle}>
                Home  
            </Link>

			<Link to='/yoga_poses' style={linkStyle}>
                Yoga  
            </Link>

			<Link to='/affirmations' style={linkStyle}>
                Daily Affirmation  
            </Link>

			<Link to='/my_journal' style={linkStyle}>
                Journal  
            </Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' style={linkStyle}>
				
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (



	// <Navbar bg='primary' variant='dark' expand='md'>
	// 	<Navbar.Brand>
    //             Mindful 
    //     </Navbar.Brand>
	// 	<Navbar.Toggle aria-controls='basic-navbar-nav' />
	// 	<Navbar.Collapse id='basic-navbar-nav'>
	// 		<Nav className='ml-auto'>
	// 			{user && (
	// 				<span className='navbar-text mr-2'>Welcome, {user.email}</span>
	// 			)}
	// 			{/* {alwaysOptions} */}
	// 			{user ? authenticatedOptions : unauthenticatedOptions}

	// 		</Nav>
	// 	</Navbar.Collapse>
	// </Navbar>
)

export default Header
