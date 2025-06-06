import React from 'react';
import Sidebar from './Sidebar';
import Testimonials from './Testimonials';
import CustomSelect from './CustomSelect';
import ContactForm from './ContactForm';
import Navigation from './Navigation';

const App = () => {
    const testimonials = [
        // Sample testimonials data
        { avatar: 'path/to/avatar1.png', name: 'John Doe', title: 'Great Service', text: 'I had an amazing experience!' },
        { avatar: 'path/to/avatar2.png', name: 'Jane Smith', title: 'Highly Recommend', text: 'Fantastic quality and support!' },
    ];

    const pages = ['Home', 'About', 'Services', 'Contact'];

    return (
        <div>
            <Sidebar />
            <Navigation pages={pages} />
            <Testimonials testimonials={testimonials} />
            <CustomSelect options={['All', 'Category1', 'Category2']} onSelect={(value) => console.log(value)} />
            <ContactForm />
        </div>
    );
};

export default App;
