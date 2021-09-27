import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import './App.css';
import api from "../api/contacts";
import AddContact from './AddContact';
import ContactList from "./ContactList"

function App() {
    //    const LOCAL_STORAGE_KEY = "contacts";
       const [contacts, setContacts] = useState([]);

       const retrieveUsers = async () => {
        const res = await api.get('/contacts');
        return res.data;
        }

        //Display DB
        useEffect(() => {
        const getAllUsers = async () => {
        const allUsers = await retrieveUsers();
        if (allUsers) setContacts(allUsers);
        }
        getAllUsers();
        }, []);

        const addContactHandler = async (contact) => {
        
            const newUser = { uuid_v4, ...contact };
        
            const res = await api.post('/contacts/', newUser);
        
            setContacts([...contacts, res.data]);
        
            alert('Successfully Save');
           
          }

       const removeContactHandler = async (id) =>{
        await api.delete(`/contacts/${id}`);
        
        
           const newContactList = contacts.filter((contact) => {
               return contact.id !== id;
           });

           setContacts(newContactList);
       }

    //    useEffect (() =>{
    //    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(LOCAL_STORAGE_KEY)));
    //   if(retriveContacts) setContacts(retriveContacts)
    // },[]);
    //    useEffect (() =>{
    //        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    //    },[contacts]);
       

    return (
        <div className="ui container">
            <Router>
            {/* <Header /> */}
            <Switch>
            <Route 
                   path="/" 
                   exact
                   render={(props) => (
                   <ContactList 
                   {...props} 
                   contacts={contacts} getContactId={removeContactHandler}
                   />
                   )}
                />
            <Route path="/add" 
            render= {(props) => (
                <AddContact 
                {...props} 
                addContactHandler={addContactHandler} />
            )}
            />
            
            </Switch>
            
            {/* <AddContact {...props} addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
            </Router>

            
            
        </div>
    );
}

export default App;
