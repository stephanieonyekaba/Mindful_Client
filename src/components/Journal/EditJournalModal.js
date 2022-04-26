import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import JournalForm from '../shared/JournalForm'

const EditJournalModal = (props) => {
    const { user, show, handleClose, updateJournal, msgAlert, triggerRefresh } = props
    const [journal, setJournal] = useState(props.journal)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setJournal(prevJournal => {
            const entry = e.target.entry
            let value = e.target.value

            const updatedValue = { [entry]: value }

            console.log('prevJournal', prevJournal)
            console.log('updatedValue', updatedValue)

            return {...prevJournal, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the journal to submit', journal)
        updateJournal(user, journal)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Journal Updated! Success!',
                    message: 'u did it',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
                }))
        console.log('this is the journal', journal)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <JournalForm 
                    journal={journal}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit journal!"
                />
            </Modal.Body>
        </Modal>
    )
}
    
export default EditJournalModal