import React from 'react'
import './Contact.js'

function Contact() {
    return (
        <div className="contact">
            <h1 style={{color: "burlywood"}}>CONTACT US</h1>
            <br/>
            <form className="contact__form">
                <div className="contact__input">
                    <input placeholder="First Name..."/>
                    <input placeholder="Last Name..."/>
                    <input placeholder="E-mail..."/>
                    <input placeholder="Street Address..."/>
                    <input placeholder="City..."/>
                    <input placeholder="State..."/>
                    <input placeholder="Zip..."/>
                </div>
                <button style={{backgroundColor: "burlywood", fontWeight: "bolder"}}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact
