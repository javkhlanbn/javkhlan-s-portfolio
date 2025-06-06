import React, { useState } from 'react';

const Navigation = ({ pages }) => {
    const [activePage, setActivePage] = useState(pages[0]);

    const handleNavigation = (page) => {
        setActivePage(page);
        window.scrollTo(0, 0);
    };

    return (
        <nav>
            {pages.map((page, index) => (
                <button
                    key={index}
                    data-nav-link
                    className={activePage === page ? 'active' : ''}
                    onClick={() => handleNavigation(page)}
                >
                    {page}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;
