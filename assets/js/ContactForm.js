import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setIsValid(e.target.form.checkValidity());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // Handle form submission logic here
            console.log('Form submitted:', formData);
        }
    };

    return (
        <form data-form onSubmit={handleSubmit}>
            <input
                data-form-input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                data-form-input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                data-form-input
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button data-form-btn type="submit" disabled={!isValid}>Send Message</button>
        </form>
    );
};

export default ContactForm;
