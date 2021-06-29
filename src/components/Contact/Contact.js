import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function Contact() {

    const [state, handleSubmit] = useForm("xvodqrrg");
    if (state.succeeded) {
        return <p>Your message has been sent!</p>;
    }
    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Get in touch!</h2>
                <div id="contact-form__name-email-container">

                    <label className="contact-form__label" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <label className="contact-form__label" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <label className="contact-form__label" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;