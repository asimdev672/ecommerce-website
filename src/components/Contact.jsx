import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center my-3 pb-md-4">Contact Page</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.39173508575!2d72.80591136385284!3d33.616372281869026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1665486118111!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-3">
          <form
            action="https://formspree.io/f/xwkzqqyl"
            method="POST"
            className="w-50 mx-auto  d-flex flex-column justify-content-center align-content-center "
            style={{ gap: "15px" }}
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              className='inputTxt'
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className='inputTxt'
            />
            <textarea
              name="Message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              className='inputTxt'
            ></textarea>
            <input
              type="submit"
              value="send"
              className="w-50 form_btn inputTxt"
              
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
