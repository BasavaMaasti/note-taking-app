import { useState, useEffect } from 'react';
import { Note, CreateNoteData } from '../types/note';
import { notesService } from '../services/notes';
import { toast } from 'react-hot-toast';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const notesData = await notesService.getNotes();
      setNotes(notesData);
    } catch (error: any) {
      toast.error('Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };

  const createNote = async (data: CreateNoteData) => {
    try {
      const newNote = await notesService.createNote(data);
      setNotes(prev => [newNote, ...prev]);
      toast.success('Note created successfully!');
      return newNote;
    } catch (error: any) {
      toast.error('Failed to create note');
      throw error;
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await notesService.deleteNote(id);
      setNotes(prev => prev.filter(note => note._id !== id));
      toast.success('Note deleted successfully!');
    } catch (error: any) {
      toast.error('Failed to delete note');
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return {
    notes,
    loading,
    createNote,
    deleteNote,
    refetch: fetchNotes
  };
};
