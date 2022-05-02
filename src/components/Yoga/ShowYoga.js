import React, {useState, useEffect} from 'react'
import { getOneYoga, favoriteYoga} from '../../api/yoga_api.js'
import { useParams } from 'react-router-dom'
import { Image, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import {favoriteYoga} from '../../api/yoga_api.js'

const ShowYogas = (props) => {
    console.log('WHAT THE F IS THIS PROP', props)
    const navigate = useNavigate()
    const [yoga, setYoga] = useState(null)
    // console.log('props in showYogas', props)
    const { id } = useParams()
    // console.log('id in showYogas', id)
    // empty dependency array in useEffect to act like component did mount
    
    useEffect(() => {            
        getOneYoga(id)
            .then(res => setYoga(res.data.yoga))
            .catch(console.error)
        }, [id])

    const handleClick = () => {
    
        console.log("THIS Is The id", id)
        favoriteYoga(props.user, id)
            .then(res => console.log(res))
            .catch(console.log("error"))
    }
        console.log('this is showyogas', yoga)
    if (!yoga) {
        return (
            <h1>Loading....</h1>
        )
    }
    
    if(yoga) {

        yoga.Jsx = (
        <p key={yoga.id}>
        <strong>{yoga.img_url}</strong></p>
    )}

    console.log('this is showyogas', yoga.sanskrit_name)
    return (

        <>
            <Container className="m-5">
                <h1> <p className="pic-title">{yoga.english_name}</p></h1>
                <Image src={yoga.img_url} className="img-fluid shadow-4"/><br/>
                
                <span> Sanskirt: {yoga.sanskrit_name}</span>
                <p>{yoga.pose_benefits}</p>
                <Button variant="outline-primary" onClick={handleClick}>Add to Favorites</Button>{' '}


               
            </Container>

        
        </>
    )
}

export default ShowYogas 