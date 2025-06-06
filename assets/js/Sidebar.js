import React, { useState } from 'react';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div data-sidebar className={isActive ? 'active' : ''}>
            <button data-sidebar-btn onClick={toggleSidebar}>Toggle Sidebar</button>
            {/* Add sidebar content here */}
        </div>
    );
};

export default Sidebar;
