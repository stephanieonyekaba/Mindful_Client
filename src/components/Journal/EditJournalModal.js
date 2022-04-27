import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import JournalForm from '../shared/JournalForm'

const EditJournalModal = (props) => {
    const { user, show, handleClose, journal, setJournal, updateJournal, msgAlert, triggerRefresh } = props
    // const [journal, setJournal] = useState(props.journal)

    const handleChange = (e) => {
        // e === event
        // e.persist()
        console.log("THIS IS PROPS.JOURNAL", props.journal)
        const updatedJournal = props.journal
        updatedJournal.entry = e.target.value
        console.log("THIS IS NEW JOURNAL.ENTRY", updatedJournal.entry  )
        setJournal( (prevJournal) => {
        prevJournal.entry = e.target.entry
            // const entry = e.target.entry
            // // const date = e.target.date
            // let value = e.target.value
            // console.log("THIS IS THE CONSOLE.LOG FOR FOR VALUE", value)

            // const updatedValue = { entry: value }
            // console.log('etarget type', e.target.type)
            // console.log('updatedValue', updatedValue)
            // // if (e.target.entry === 'string') {
            // //     value = parseInt(e.target.value)
            // // }
            // return { updatedJournal}
            return prevJournal

        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the journal to submit', journal)
        updateJournal(user, journal)
        // updateJournal(journal)
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