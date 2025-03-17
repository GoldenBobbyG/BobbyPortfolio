import '../styles/Contact.css';
import { useState } from 'react';



function Form() {
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'contactName') {
            setContactName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        console.log('Form submitted');
        alert(`Thank you for your message, ${contactName}!`);
        setContactName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h1>Contact Me</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                />
                <button type="submit">Submit
                    
                </button>
            </form>
        </div>
    );
}

export default Form;