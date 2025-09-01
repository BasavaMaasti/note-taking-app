import { api } from './api';
import { CreateNoteData } from '../types/note';

export const notesService = {
  getNotes: async () => {
    const response = await api.get('/api/notes');
    return response.data;
  },

  createNote: async (data: CreateNoteData) => {
    const response = await api.post('/api/notes', data);
    return response.data;
  },

  updateNote: async (id: string, data: CreateNoteData) => {
    const response = await api.put(`/api/notes/${id}`, data);
    return response.data;
  },

  deleteNote: async (id: string) => {
    const response = await api.delete(`/api/notes/${id}`);
    return response.data;
  }
};
