import React from 'react'
import './AddContact.css'

const AddContact = () => {
    return (
        <div className='add-contact'>
            <h3>Add New Contact</h3><hr/>
            <form action='' method='' onSubmit=''>
                <label>Contact Name</label>
                <input type='text' value='name'/><br/>
                <label>Contact Phone</label>
                <input type='text' value='phone'/><br/>
                <input type='submit' value='Add'/>
            </form>
        </div>
    )
}

export default AddContact
