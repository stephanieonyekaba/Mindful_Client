import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createJournal } from '../../api/journals_api'
import {createJournalSuccess, createJournalFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import journalForm from '../shared/JournalForm'
import JournalForm from '../shared/JournalForm'

// create journal renders a form and calls createJournal function
// maybe redirect(navigate) to the new journal show page
// props we'll need are user, msgAlert
const CreateJournal = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [journal, setJournal] = useState({entry: '', date: '' })
    console.log('journal in create', journal)
    //  an empty journal object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist()

        setJournal(prevJournal => {
            const entry = e.target.entry
            let value = e.target.value
            console.log('etarget type', e.target.type)


            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { entry: value }

            console.log('prevJournal', prevJournal)
            console.log('updatedValue', updatedValue)

            return {...prevJournal, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createJournal(user, journal)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/my_journal/${res.data.journal.id}`)})
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'New Journal Added! Success!',
                    message: createJournalSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Error',
                    message: createJournalFailure,
                    variant: 'danger',
                }))
        // console.log('this is the journal', journal)
    }

    return (
        <JournalForm 
            journal={journal}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new Journal!"
        />
    )
}

export default CreateJournal