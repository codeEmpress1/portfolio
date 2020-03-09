import React, { useState } from 'react'





const ContactForm = () => {
    const [Email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    
    }
    
    const handleChange = (event) => {
        setEmail(event.currentTarget.value);
    }
    return (
        <form onSubmit={handleSubmit} className=''>
            <h2>Subscribe to my email list!</h2>
            <div className=''>
                <input
                placeholder="Email address"
                name="email"
                type="text"
                onChange={handleChange}
                />

                <input
                placeholder="Phone number"
                name="phone number"
                type="text"
                onChange={handleChange}
                />

                <textarea
                placeholder="Enter your message here"
                name="message"
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </div>

        </form>

    );
};

export default ContactForm