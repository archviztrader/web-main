import React, { useState } from 'react';

const CodeEditorSection: React.FC = () => {
    const [code, setCode] = useState<string>('<h1>Your HTML Code Here</h1>');

    const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    const handleSaveDraft = () => {
        // Logic to save the code as a draft
        console.log('Draft saved:', code);
    };

    const handlePublish = () => {
        // Logic to publish the code
        console.log('Code published:', code);
    };

    return (
        <div className="code-editor-section">
            <h2>Code Editor</h2>
            <textarea
                value={code}
                onChange={handleCodeChange}
                rows={10}
                cols={50}
                placeholder="Edit your code here..."
            />
            <div className="editor-actions">
                <button onClick={handleSaveDraft}>Save as Draft</button>
                <button onClick={handlePublish}>Publish</button>
            </div>
        </div>
    );
};

export default CodeEditorSection;