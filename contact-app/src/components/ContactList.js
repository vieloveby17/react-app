import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';
import "./ContactList.css";

const ContactList = (props) =>{
    
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
           <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id}/>
        );
    }) 
    return(
        <div className="">
            <h2>Contact List</h2>
            <Link to="/add"><button className="ui button blue">Add Contact</button></Link>
            
             <div className="ui celled list">
            {renderContactList}
        </div>

        </div>
       
    );
}

export default ContactList; 