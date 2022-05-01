import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
	font: "Gelasio",
    color: '#c4bda9',
    textDecoration: 'italics',
	margin: '30px'
	
	
}

const brandStyle = {
	font: "Gelasio",
    color: '#595751',
	
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='/home' style={linkStyle}>
                Home  
            </Link>
			<Link to='/my_journal' style={linkStyle}>
                Journal  
            </Link>


			<Link to='/yoga_poses' style={linkStyle}>
                Yoga  
            </Link>

			<Link to='/affirmations' style={linkStyle}>
                Daily Affirmation  
            </Link>

			<Link to='/my_favorites' style={linkStyle}>
                Favorites  
            </Link>

			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change password
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
		    <Link to='/' style={linkStyle}>Sign In</Link>
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


	
	<Navbar bg='light' variant='light' expand='md'>

	<Navbar.Brand style={brandStyle}>

      Mindful
      </Navbar.Brand>





		{/* <Navbar.Brand>
                Mindful 
        </Navbar.Brand> */}
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)} */}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}

			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header




