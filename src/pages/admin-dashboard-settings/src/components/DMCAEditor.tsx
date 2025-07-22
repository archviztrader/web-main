import React, { useState } from 'react';

const DMCAEditor: React.FC = () => {
    const [dmcaContent, setDmcaContent] = useState<string>('');

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDmcaContent(event.target.value);
    };

    const handleSave = () => {
        // Logic to save the DMCA content
        console.log('DMCA content saved:', dmcaContent);
    };

    return (
        <div>
            <h2>DMCA Content Removal Policy</h2>
            <textarea
                value={dmcaContent}
                onChange={handleContentChange}
                rows={10}
                cols={50}
                placeholder="Edit your DMCA policy here..."
            />
            <div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default DMCAEditor;