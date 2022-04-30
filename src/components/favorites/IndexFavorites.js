import React, {useState, useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import { Container } from 'react-bootstrap'
//This is the function that handles showing the afffirmation object
import { StyledHeader } from '../styles/Header.styled'
import ShowYogas from '../yoga/ShowYoga'


const Favorite = (props) => {
	// const { msgAlert, user } = props
	console.log('props in favorite', props)

	return (
		<>

            <div className="container"> 
                   <StyledHeader>  <h1>My Favorites</h1></StyledHeader>
                   


                </div>

		</>

	)
}

export default Favorite
