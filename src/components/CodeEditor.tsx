import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language = 'javascript' }) => {
  return (
    <ControlledEditor
      value={value}
      options={{
        mode: language,
        theme: 'material',
        lineNumbers: true,
      }}
      onBeforeChange={(_editor, _data, value) => onChange(value)}
    />
  );
};

export default CodeEditor;
