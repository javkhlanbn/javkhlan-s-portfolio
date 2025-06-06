import React, { useState } from 'react';

const Testimonials = ({ testimonials }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (testimonial) => {
        setModalContent(testimonial);
        setIsModalActive(true);
    };

    const closeModal = () => {
        setIsModalActive(false);
    };

    return (
        <div>
            {testimonials.map((testimonial, index) => (
                <div key={index} data-testimonials-item onClick={() => openModal(testimonial)}>
                    <img data-testimonials-avatar src={testimonial.avatar} alt={testimonial.name} />
                    <h3 data-testimonials-title>{testimonial.title}</h3>
                    <p data-testimonials-text>{testimonial.text}</p>
                </div>
            ))}
            {isModalActive && (
                <div data-modal-container className="active">
                    <button data-modal-close-btn onClick={closeModal}>Close</button>
                    <img data-modal-img src={modalContent.avatar} alt={modalContent.name} />
                    <h3 data-modal-title>{modalContent.title}</h3>
                    <p data-modal-text>{modalContent.text}</p>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
