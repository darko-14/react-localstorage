import React from 'react'
import './Header.css'
import { useState } from 'react'
import AddContact from '../AddContact/AddContact';

const Header = () => {
    const [addContact, setAddContact] = useState(false);

    return (
        <div className='header'>
            Contact List Header
            <button onClick={change => setAddContact(!addContact)}>Add New Contact</button>
            {addContact && <AddContact />}
        </div>
    )
}

export default Header
