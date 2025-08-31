import { api } from './api';
import { CreateNoteData } from '../types/note';

export const notesService = {
  getNotes: async () => {
    const response = await api.get('/notes');
    return response.data;
  },

  createNote: async (data: CreateNoteData) => {
    const response = await api.post('/notes', data);
    return response.data;
  },

  updateNote: async (id: string, data: CreateNoteData) => {
    const response = await api.put(`/notes/${id}`, data);
    return response.data;
  },

  deleteNote: async (id: string) => {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
  }
};
