import React, { useState } from 'react';

const SocialMediaLinksEditor = () => {
    const [links, setLinks] = useState({
        discord: '',
        telegram: '',
        youtube: '',
        twitch: '',
        linkedin: '',
        instagram: '',
        facebook: '',
        twitter: '',
        tiktok: '',
        pinterest: ''
    });

    const handleChange = (platform: string, value: string) => {
        setLinks({ ...links, [platform]: value });
    };

    return (
        <div>
            <h2>Social Media Links</h2>
            {Object.keys(links).map((platform) => (
                <div key={platform}>
                    <label>{platform.charAt(0).toUpperCase() + platform.slice(1)}:</label>
                    <input
                        type="text"
                        value={links[platform as keyof typeof links]}
                        onChange={(e) => handleChange(platform, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

export default SocialMediaLinksEditor;