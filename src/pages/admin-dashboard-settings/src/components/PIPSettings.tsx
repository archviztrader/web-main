import React, { useState } from 'react';

const PIPSettings = () => {
    const [location, setLocation] = useState('bottom-right');
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(200);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleWidthChange = (event) => {
        setWidth(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    return (
        <div>
            <h2>Picture-in-Picture Settings</h2>
            <div>
                <label htmlFor="location">Location:</label>
                <select id="location" value={location} onChange={handleLocationChange}>
                    <option value="bottom-right">Bottom Right</option>
                    <option value="top-left">Top Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                </select>
            </div>
            <div>
                <label htmlFor="width">Width:</label>
                <input
                    type="number"
                    id="width"
                    value={width}
                    onChange={handleWidthChange}
                />
            </div>
            <div>
                <label htmlFor="height">Height:</label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={handleHeightChange}
                />
            </div>
        </div>
    );
};

export default PIPSettings;