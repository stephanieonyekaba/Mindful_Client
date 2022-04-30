import Header from './shared/Header'
import { Container } from './styles/Container.styled'
import {Link} from "react-router-dom"
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
	<Container> 
	 <span>Welcome Back, [insert user here]</span>
	 <Link to={'./affirmations'}><h3 > Lets start the day with a daily affimration </h3></Link> 
{/* 
	 {user.email} */}
	</Container>

		</>

	)
}

export default Home
