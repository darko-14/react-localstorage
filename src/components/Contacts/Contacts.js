import React from 'react'
import Contact from '../Contact/Contact'

const Contacts = ({contacts, onDelete, onEdit}) => {
    return (
        <div>
            <h3>Contact List</h3>
            {
                contacts.map(contact => {
                    <Contact key={contact.id} task={contact} onDelete={onDelete} onEdit={onEdit}/>
                })
            }
        </div>
    )
}

export default Contacts
