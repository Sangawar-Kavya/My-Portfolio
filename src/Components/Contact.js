import React from 'react'
import './Contact.css'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "398dc6d4-6e3b-4901-9bd6-7c890ae116f3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

    }

    return (
        <div className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's Talk</h1>
                    <p>I'm currently avaliable for Frontend Developer Roles, so feel free to send me a message about anything that you want to work on, You can contact anytime.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt='' />
                            <>kavyasangawar22@gmail.com</>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt='' />
                            <p>Hyderabad,India</p>
                        </div>
                    </div>
                </div>
                <form className='contact-right' onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label >Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label >Write Your Message</label>
                    <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
            <span>{result}</span>
        </div>
    )
}

export default Contact
