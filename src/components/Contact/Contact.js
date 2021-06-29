import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

function Contact() {

    const [state, handleSubmit] = useForm("xvodqrrg");
    if (state.succeeded) {
        return <p>Your message has been sent!</p>;
    }

    const colors = ["#ff7694", "#2FE6DE", "#F5E0B7", "#8d8de0", "#FF6B6B", "#CBF7ED", "#CA907E", "#FAFAC6"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function changeBackground(e) {
        let number = getRandomInt(5)
        e.target.style.borderColor = colors[number];
        e.target.style.color = "white";

    }

    function changeBackground2(e) {
        e.target.style.borderColor = "#B0B3B8";
        e.target.style.color = "#B0B3B8";
    }


    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Get in touch!</h2>
                <div id="contact-form__name-email-container">
                    <div className="contact-form__flex">

                        <label className="contact-form__label" htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />

                    </div>
                    <div className="contact-form__flex" style={{marginLeft:"35px"}}>
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
                </div>
                <div className="contact-form__flex2">
                    <label className="contact-form__label" htmlFor="message" style={{marginTop:"30px"}}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder=""
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button className="contact-form-btn" type="submit" disabled={state.submitting} onMouseOver={changeBackground} onMouseLeave={changeBackground2}>
                    Send
                </button>
            </form>
        </div>
    )
}

export default Contact;