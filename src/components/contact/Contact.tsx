
import { useRef } from 'react';
import "./contact.css"

import { MdOutlineEmail } from 'react-icons/md'
// import { BiMessageRoundedDetail } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from 'emailjs-com'
import React from 'react';

const Contact = () => {
    const form: any = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_43q50qz', 'template_cb8xglm', form.current,
            '6ADeAcyQ5S_gBfFGu')
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>clementayz@gmail.com</h5>
                        <a href="mailto:clementayz@gmail.com">Send a message</a>
                    </article>
                    {/* <article className="contact__option">
                        <BiMessageRoundedDetail className="contact__option-icon" />
                        <h4>Messager</h4>
                        <h5>clementayz</h5>
                        <a href="" target="_blank">Send a message</a>
                    </article> */}
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+65 91522754</h5>
                        <a href="https://web.whatsapp.com/send?phone=+6591522754" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* end of contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows={7} placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact