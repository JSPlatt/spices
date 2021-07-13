import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1 style={{color: "burlywood"}}>CONTACT US</h1>
            <br/>
            <form className="contact__form" >
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="First Name..."/><br/>
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="Last Name..."/><br/>
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="E-mail..."/><br/>
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="Street Address..."/><br/>
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="City..."/><br/>
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="State..."/><br/>
                    <input style={{height: "25px", width: "300px", display:"box"}} placeholder="Zip..."/><br/>
                    <input placeholder="What's on your mind?" 
                        style={{
                            height: "60px",
                            width: "250px"
                        }}
                    />
                <button style={{backgroundColor: "burlywood",fontWeight: "bolder"}}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact
