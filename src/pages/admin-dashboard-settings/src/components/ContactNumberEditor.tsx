import React, { useState } from 'react';

const ContactNumberEditor: React.FC = () => {
    const [contactNumber, setContactNumber] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactNumber(event.target.value);
    };

    const handleSave = () => {
        // Logic to save the contact number
        console.log('Contact number saved:', contactNumber);
    };

    return (
        <div>
            <h2>Edit Contact Number</h2>
            <input
                type="text"
                value={contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default ContactNumberEditor;