import Header from './shared/Header'
import { Container } from './styles/Container.styled'
import { Box } from './styles/Box.styled'
import {Link} from "react-router-dom"
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
	<Container> 
	 <span>Welcome Back, [insert user here]</span>
	 <Box> 
	 <p id="homeText"> Welcome to Mindful! </p> <br/>
	 <p id="homeText">This is an interactive app that allows users to find their morning groove
	 In this app you will be able to view yoga poses to practice everyday and journal your thoughts</p>
	 <Link to="/affirmations">
	 <button type="button" class="btn btn-outline-light btn-lg">Daily Affirmation   </button>
	 </Link>
	 

	 
	 </Box>
{/* 
	 {user.email} */}
	</Container>

		</>

	)
}

export default Home
