import React, {useState, useEffect} from 'react'
import { getOneYoga} from '../../api/yoga_api.js'
import { useParams } from 'react-router-dom'
import { Image, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const ShowYogas = (props) => {
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


    return (

        <>
            <Container className="m-5">
                <p className="pic-title">"{yoga.english_name}"</p>
                <Image src={yoga.img_url} className="img-fluid shadow-4"/><br/>


               
            </Container>

        
        </>
    )
}

export default ShowYogas

