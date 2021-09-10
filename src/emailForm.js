import React from 'react';
import emailjs from 'emailjs-com';
import './App.css'

const {EMAIL_JS_API} = process.env

function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'findtqc-submission', e.target, {EMAIL_JS_API})
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className='contactRight'>
            <form className='contactFormSection' onSubmit={sendEmail}>
                
                <div className='contactRightTop'>
                    <div className='contactNameDiv'>
                        <input className='emailName' placeholder="Name" name='from_name'/>
                    </div>
                    <div className='contactEmailDiv'>
                        <input className='emailAddress' placeholder='Email Address' name='email'/>
                    </div>
                </div>
                
                <div className='contactRightBottom'>
                    <div className='contactMessageDiv'>
                        <textArea className='emailMessage' placeholder='Your Message' name='message'/>
                    </div>
                    <div className='contactButtonDiv'>
                        <input type='submit' className='emailSubmit' value='Send Message'/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactUs