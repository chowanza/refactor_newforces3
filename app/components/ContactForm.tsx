import React, { useState} from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import '../components/ContactForm.css'; // Ensure this path is correct
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'query':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !lastName || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    const formData = {
      name,
      lastName,
      email,
      phone,
      message,
    };

    emailjs
      .send('service_ih9parg', 'template_god7cuo', formData, '4l9lg7uEBWREWNjzG')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSuccess('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section className="contact-section" id="contact">
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
      <h2 className="contact-title">Contact Us</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="query">Message:</label>
          <textarea
            id="query"
            value={message}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <div className="submit-button-container">
        <button type="submit" className="submit-button rounded-lg">Send</button>
      </div>
    </form>
    <img src="/contact-form.webp" alt="Contact" />
    </section>
  );
};

export default ContactForm;
