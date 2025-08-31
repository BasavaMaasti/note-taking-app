import React from 'react';
import { Note } from '../../types/note';

interface NoteCardProps {
  note: Note;
  onDelete: (noteId: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h3>
      <p className="text-gray-600 text-sm">{note.content}</p>
    </div>
  );
};

export default NoteCard;
