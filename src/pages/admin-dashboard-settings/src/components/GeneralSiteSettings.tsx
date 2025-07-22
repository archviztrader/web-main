import React, { useState } from 'react';

const GeneralSiteSettings: React.FC = () => {
    const [logo, setLogo] = useState<File | null>(null);
    const [websiteName, setWebsiteName] = useState<string>('');
    const [contactEmail, setContactEmail] = useState<string>('');
    const [siteDescription, setSiteDescription] = useState<string>('');
    const [geoTag, setGeoTag] = useState<string>('');
    const [seoSettings, setSeoSettings] = useState<string>('');

    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setLogo(event.target.files[0]);
        }
    };

    const handleSave = () => {
        // Logic to save the settings
    };

    return (
        <div>
            <h2>General Site Settings</h2>
            <div>
                <label>Upload Logo:</label>
                <input type="file" onChange={handleLogoChange} />
            </div>
            <div>
                <label>Website Name:</label>
                <input 
                    type="text" 
                    value={websiteName} 
                    onChange={(e) => setWebsiteName(e.target.value)} 
                />
            </div>
            <div>
                <label>Contact Email:</label>
                <input 
                    type="email" 
                    value={contactEmail} 
                    onChange={(e) => setContactEmail(e.target.value)} 
                />
            </div>
            <div>
                <label>Site Description:</label>
                <textarea 
                    value={siteDescription} 
                    onChange={(e) => setSiteDescription(e.target.value)} 
                />
            </div>
            <div>
                <label>Google Geo Tag Code:</label>
                <input 
                    type="text" 
                    value={geoTag} 
                    onChange={(e) => setGeoTag(e.target.value)} 
                />
            </div>
            <div>
                <label>SEO Settings:</label>
                <textarea 
                    value={seoSettings} 
                    onChange={(e) => setSeoSettings(e.target.value)} 
                />
            </div>
            <button onClick={handleSave}>Save Settings</button>
        </div>
    );
};

export default GeneralSiteSettings;