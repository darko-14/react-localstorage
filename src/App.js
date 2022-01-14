import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';


function App() {
  const [contacts, setContacts] = useState([]) 

  const getContacts = JSON.parse(localStorage.getItem("Contacts"))

  useEffect(() => {
    getContacts == 0 ? setContacts([]) : setContacts(getContacts)
  }, [])

  


  return (
    <div className='App'> 
      <Header />
      {
        contacts.length > 0 ? <Contacts /> : <h3>No Contacts</h3>
      }
      <Contacts />
    </div>
  );
}

export default App;
