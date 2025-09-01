# Note-Taking App
## Project Overview
This project is a full-stack note-taking application that allows users to sign in using Google OAuth,
create, read, update, and delete notes. It is designed to be secure, scalable, and user-friendly with
authentication and
rate limiting to prevent abuse.
## Features
- User authentication via Google OAuth
- Create, edit, delete, and view notes
- Responsive UI built with React
- Secure backend with Express, Helmet, and rate limiting
- MongoDB for data persistence
- CORS configured for local development and deployed frontend
## Tech Stack
- Frontend: React, JavaScript/TypeScript
- Backend: Node.js, Express, TypeScript
- Database: MongoDB (Atlas)
- Authentication: Google OAuth via Google Identity Services
- Deployment: Railway (backend), Vercel (frontend)
## Getting Started
### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas account
### Installation
1. Clone the repository: `git clone `
2. Install dependencies: `npm install`
3. Set up environment variables (see below)
4. Run the app: `npm run dev`
## Environment Variables
Create a `.env` file in the backend with the following:
- MONGO_URI=your_mongo_connection_string
- GOOGLE_CLIENT_ID=your_google_client_id
- GOOGLE_CLIENT_SECRET=your_google_client_secret
- JWT_SECRET=your_jwt_secret
- FRONTEND_URL=http://localhost:3000
## Available Scripts
- npm run dev: Start development server
- npm run build: Build project
- npm start: Start production server
## API Endpoints
- POST /api/auth/google — Google OAuth login
- GET /api/notes — Get all notes
- POST /api/notes — Create a note
- PUT /api/notes/:id — Update a note
- DELETE /api/notes/:id — Delete a note
## Frontend
- React with functional components and hooks
- Axios for API calls
- React Router for navigation
## Backend
- Express server with TypeScript
- MongoDB with Mongoose ODM
- Helmet for security headers
- Rate limiting middleware
## CORS Configuration
- Allow requests from the frontend URL (Vercel deployment)
- Local development: allow http://localhost:3000
## Google OAuth Setup
1. Go to Google Cloud Console.
2. Create a project and enable OAuth 2.0 credentials.
3. Add authorized redirect URIs (for local and production).
4. Use client ID and secret in `.env` file.
## Deployment
- Backend deployed on Railway
- Frontend deployed on Vercel
## License
This project is licensed under the MIT License.
