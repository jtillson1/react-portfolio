import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        //validate the email information
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else { //vallidate the other inputs
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        //The name property of target in this expression actually 
        //refers to the name attribute of the form element.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input type="text" id="formInput" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />
                <input type="email" placeholder="Email" id="formInput" name="email" defaultValue={email} onBlur={handleChange} />
                <div>
                    <textarea placeholder="What do you want to say..." name="message" id="formInput" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;