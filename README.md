# Bookstore MERN Stack Project

A full-stack Bookstore web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication (signup, login)
- Browse and view books
- Responsive UI with dark/light mode
- Contact form and About section
- Protected routes for authenticated users
- Modern navigation bar and footer

## Technologies Used

- **Frontend:** React.js, Tailwind CSS, DaisyUI, Axios, React Router
- **Backend:** Node.js, Express.js, Mongoose, MongoDB

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally (or provide a MongoDB Atlas URI)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd Bookstore
   ```

2. **Install backend dependencies:**

   ```sh
   cd Backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```sh
   cd ../Frontend
   npm install
   ```

4. **Set up environment variables:**

   - In `Backend/.env`, set:
     ```
     PORT=4001
     MongoDBURI=mongodb://localhost:27017/bookstore
     ```

5. **Start the backend server:**

   ```sh
   cd ../Backend
   npm start
   # or
   npx nodemon index.js
   ```

6. **Start the frontend dev server:**

   ```sh
   cd ../Frontend
   npm run dev
   ```

7. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:4001](http://localhost:4001)

## Folder Structure

```
Bookstore/
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── route/
│   ├── .env
│   └── index.js
├── Frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── courses/
│   │   ├── home/
│   │   ├── context/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

## Usage

- Sign up and log in to access protected routes.
- Browse available books and view details.
- Use the Contact page to send a message (frontend only).
- Switch between dark and light mode using the toggle in the navbar.

## License

This project is for educational purposes.
