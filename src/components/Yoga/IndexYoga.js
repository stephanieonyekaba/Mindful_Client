import React, {useState, useEffect, useRef } from 'react'
import {getAllYogas} from "../../api/yoga_api"
import {Link} from "react-router-dom"
import { Card } from 'react-bootstrap'

//This is the function that handles showing the yoga object

const IndexYogas = (props) => {
    //this sets the original state for yoga poses
    const [yogas, setYogas] = useState(null)
    useEffect(() => {
        //this is the axios call function made to our mindufl_api that
        //allows us to use the get getAllYogas function 
        getAllYogas()
        //this is the promise chain that sets the state of the object returned from the axios call
        //(remember the setState function above?) or it will return an error if no object is found (.catch)
                .then(res => {
                    console.log('this is the object returned from yogas ', res.data.yogas)
                    setYogas(res.data.yogas)
                })
                .catch(console.error)
            }, [])
            //here we are saying if there is no yoga poses that shows show a loading text
            if (!yogas) {
                return <p> LOADING...</p>
            }
            //here we are saying if we dont have any yogas in the array show no yoga poses
            else if (yogas.length == 0 ) {
                return <p>No Yoga Poses to Display </p>
            }
            //here we are saying if there are yoga poses in the object, map each on to a key and display it 
            if (yogas.length > 0) {
                yogas.Jsx = yogas.map(yogas => (
                    <Card key={yogas.id} style={{width: '50%' }} className='m-2'>
                    <Card.Body>
                    <Link to={`./${yogas._id}`}><img src= {yogas.img_url} height="100"  /></Link>
                     <span> {yogas.english_name}</span>
                    </Card.Body>
                </Card>
                ))

            } 
        
            return (
            <>           
            <div className="container"> 
            <h3>Yoga Poses</h3>
            {/* <ul>
                <li className="card">{yogas.Jsx}</li>
            </ul> */}

            {yogas.Jsx}
        </div>
    

            </>
        )    
    
    }

    export default IndexYogas
