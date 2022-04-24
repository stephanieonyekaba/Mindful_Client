import React, {useState, useEffect, useRef } from 'react'
import {getAllAffirmations} from "../../api/affirmations_api"
import {Link} from "react-router-dom"
import { Card } from 'react-bootstrap'

//This is the function that handles showing the afffirmation object

const IndexAffirmations = (props) => {
    //this sets the original state for affirmations
    const [affirmations, setAffirmations] = useState(null)
    useEffect(() => {
        //this is the axios call function made to our mindufl_api that
        //allows us to use the get allAffirmation function 
        getAllAffirmations()
        //this is the promise chain that sets the state of the object returned from the axios call
        //(remember the setState function above?) or it will return an error if no object is found (.catch)
                .then(res => {
                    console.log('this is the object returned from affirmation ', res.data.affirmations)
                    setAffirmations(res.data.affirmations)
                })
                .catch(console.error)
            }, [])
            //here we are saying if there is no affirmation that shows show a loading text
            if (!affirmations) {
                return <p> LOADING...</p>
            }
            //here we are saying if we dont have any affirmations in the array show no affirmations
            else if (affirmations.length == 0 ) {
                return <p>No Affirmations today</p>
            }
            //here we are saying if there are affirmations in the object, map each on to a key and display it 
            if (affirmations.length > 0) {
                affirmations.jsx = affirmations.map(affirmations => (
                    <Card key={affirmations.id} style={{ width: '30%' }} className="m-2">
                    {/* <Card.Header>{affirmation.bird}</Card.Header> */}
                    <Card.Body>
                        <p>{affirmations}</p>
                    </Card.Body>
                </Card>
                ))

            } 
        
            return (
            <>
            <h2> MANTRA OF THE DAY</h2>
            {/* <div style={cardContainerLayout}>
                {affirmations.Jsx}
            </div> */}
            </>
        )    
    
    }

    export default IndexAffirmations
