import React, { useState } from 'react';

const ToggleOptions: React.FC = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [showSections, setShowSections] = useState(true);

    const handleToggleHeader = () => {
        setShowHeader(!showHeader);
    };

    const handleToggleFooter = () => {
        setShowFooter(!showFooter);
    };

    const handleToggleSections = () => {
        setShowSections(!showSections);
    };

    return (
        <div>
            <h2>Toggle Page Elements</h2>
            <div>
                <label>
                    <input type="checkbox" checked={showHeader} onChange={handleToggleHeader} />
                    Show Header
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={showFooter} onChange={handleToggleFooter} />
                    Show Footer
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={showSections} onChange={handleToggleSections} />
                    Show Sections
                </label>
            </div>
        </div>
    );
};

export default ToggleOptions;