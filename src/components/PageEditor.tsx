import React, { useState } from 'react';

export interface SectionConfig {
  id: string;
  label: string;
  visible: boolean;
  content: React.ReactNode;
  onEdit?: () => void;
}

interface PageEditorProps {
  sections: SectionConfig[];
  onSectionToggle: (id: string, visible: boolean) => void;
  onSectionEdit: (id: string, newContent: React.ReactNode) => void;
  editMode: boolean;
  setEditMode: (edit: boolean) => void;
}

const PageEditor: React.FC<PageEditorProps> = ({
  sections,
  onSectionToggle,
  onSectionEdit,
  editMode,
  setEditMode,
}) => {
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleEdit = (id: string, currentContent: React.ReactNode) => {
    setEditingSection(id);
    setEditValue(typeof currentContent === 'string' ? currentContent : '');
  };

  const handleSave = () => {
    if (editingSection !== null) {
      onSectionEdit(editingSection, editValue);
      setEditingSection(null);
      setEditValue('');
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <label className="font-semibold">Edit Mode</label>
        <input
          type="checkbox"
          checked={editMode}
          onChange={e => setEditMode(e.target.checked)}
          className="w-5 h-5"
        />
      </div>
      {sections.map(section => (
        <div key={section.id} className="mb-6 border rounded-lg p-4 relative bg-white dark:bg-slate-800">
          {editMode && (
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={section.visible}
                  onChange={e => onSectionToggle(section.id, e.target.checked)}
                />
                <span className="text-xs">Show</span>
              </label>
              <button
                className="text-blue-600 hover:text-blue-800 text-xs border px-2 py-1 rounded"
                onClick={() => handleEdit(section.id, section.content)}
              >
                Edit
              </button>
            </div>
          )}
          {section.visible && (
            <div>
              {editingSection === section.id ? (
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border rounded mb-2"
                    rows={4}
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      className="bg-blue-600 text-white px-4 py-1 rounded"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="border px-4 py-1 rounded"
                      onClick={() => setEditingSection(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>{section.content}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PageEditor;
