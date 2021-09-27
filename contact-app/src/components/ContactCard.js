import React from "react";

const ContactCard = (props) =>{
    const { id, firstName, lastName, email, enterPrise, birthday } = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{firstName +" "+ lastName }</div>
            <div>Email: {email}</div>
            <div>Enterprise ID: {enterPrise}</div>  
            <div>Birthday: {birthday}</div>       
        </div>
        <i className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", fontSize:"20px"}}
            onClick={() => props.clickHander(id)}></i>
    </div>
    );
}
export default ContactCard;