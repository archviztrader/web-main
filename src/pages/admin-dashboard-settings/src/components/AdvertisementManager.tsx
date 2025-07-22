import React, { useState } from 'react';

const AdvertisementManager = () => {
    const [adProviders, setAdProviders] = useState([
        { name: 'ExoClick', code: '' },
        { name: 'Google AdSense', code: '' },
        { name: 'Fileaxa', code: '' },
        { name: 'Dummy Provider 1', code: '' },
        { name: 'Dummy Provider 2', code: '' },
        { name: 'Dummy Provider 3', code: '' },
        { name: 'Dummy Provider 4', code: '' },
        { name: 'Dummy Provider 5', code: '' },
        { name: 'Dummy Provider 6', code: '' },
        { name: 'Dummy Provider 7', code: '' },
        { name: 'Dummy Provider 8', code: '' },
        { name: 'Dummy Provider 9', code: '' },
        { name: 'Dummy Provider 10', code: '' },
        { name: 'Dummy Provider 11', code: '' },
        { name: 'Dummy Provider 12', code: '' },
        { name: 'Dummy Provider 13', code: '' },
    ]);

    const [pipSettings, setPipSettings] = useState({
        location: 'bottom-right',
        width: 300,
        height: 200,
    });

    const handleCodeChange = (index, value) => {
        const updatedProviders = [...adProviders];
        updatedProviders[index].code = value;
        setAdProviders(updatedProviders);
    };

    const handlePipSettingChange = (e) => {
        const { name, value } = e.target;
        setPipSettings((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Advertisement Manager</h2>
            {adProviders.map((provider, index) => (
                <div key={provider.name}>
                    <label>{provider.name}:</label>
                    <input
                        type="text"
                        value={provider.code}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                    />
                </div>
            ))}
            <h3>PIP Settings</h3>
            <div>
                <label>Location:</label>
                <select name="location" value={pipSettings.location} onChange={handlePipSettingChange}>
                    <option value="bottom-right">Bottom Right</option>
                    <option value="top-left">Top Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                </select>
            </div>
            <div>
                <label>Width:</label>
                <input
                    type="number"
                    name="width"
                    value={pipSettings.width}
                    onChange={handlePipSettingChange}
                />
            </div>
            <div>
                <label>Height:</label>
                <input
                    type="number"
                    name="height"
                    value={pipSettings.height}
                    onChange={handlePipSettingChange}
                />
            </div>
        </div>
    );
};

export default AdvertisementManager;