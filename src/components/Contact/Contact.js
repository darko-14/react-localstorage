import React from 'react'
import './Contact.css'

const Contact = ({key, contact, onDelete, onEdit}) => {
    return (
        <div>
            <div className='contact'>
                <p>{key}</p>
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                <p>Edit </p>
                <p>Delete</p><br />
            </div>
        </div>
    )
}

export default Contact
