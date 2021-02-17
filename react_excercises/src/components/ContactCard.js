import React from 'react';

function ContactCard(props) {
console.log(props)
    return (
        <div>
            <img style={{width: 100}} src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>phone: {props.contact.phone}</p>
            <p>email: {props.contact.email}</p>
        </div>

    )
}

export default ContactCard;