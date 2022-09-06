import React from 'react';
import './Contact.css'

export default function Contact() {
    return (
        <div id='contact'>
            <h1>Contact Page</h1>
            <form className='contact-form'>

                <div className="contact-form row">

                <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                </div>

                <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Message</span>
                    <textarea type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></textarea>
                    
                </div>
                <input className="btn" type="submit" value="Submit"></input>
                </div>       
            </form >
        </div >

    );
}


