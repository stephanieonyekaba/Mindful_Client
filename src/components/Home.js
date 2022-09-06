import Header from './shared/Header'
import { Container } from './styles/Container.styled'
import { Box } from './styles/Box.styled'
import {Link} from "react-router-dom"
import Reviews from './reviews/Reviews'
import IndexAffirmations from './affirmations/IndexAffirmations'
import '../Home.css'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)








	return (
		<>
	<Container> 
	 <span className='welcome_home'>Welcome To Mindful</span>
	 <Box> 
<div className='about_section'>
<bold>Daily Affirmation:</bold>

	 <p id="homeText">
<div className='quote_left'>
	 <ImQuotesLeft />
</div>
	 <IndexAffirmations/ >
<div className='quote_right'>
	 <ImQuotesRight />
</div>
	 </p>
	
{/* //PUT BUTTO HERE */}

</div>
	 
	 </Box>
{/* 
	 {user.email} */}
	</Container>

	<Reviews/ >

		</>

	)
}

export default Home
