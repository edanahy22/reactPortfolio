import React from 'react';

export default function Contact() {
    return (
        <div id='contact'>
            <h1>Contact Page</h1>
            <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="name" className="form-control w-75" id="name" placeholder="Elaine Danahy" />
            </div>
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control w-75" id="email" placeholder="name@example.com" />
            <div class="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control w-75" id="message" rows="3"></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
            </form>
        </div>
        
    );
}