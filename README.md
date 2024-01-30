# Task Manager Application

This project is a simple Task Manager application with a React frontend and Express.js backend using SQLite.

### This is Backend Code link - https://github.com/vundelavamsi/task-manager-backend

## Getting Started

### Prerequisites

- Node.js and npm installed
- SQLite database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vundelavamsi/claim-zippy.git
   cd claim-zippy
   ```

   ### Install dependencies for both frontend and backend

      ```bash
      # Install backend dependencies
      cd backend
      npm install

      # Install frontend dependencies
      cd ../frontend
      npm install
      ```

### Configuration
   1. **Set up the SQLite database:**
      - Open a terminal in the backend directory.
       - Run the following command to create the database file and tables:
       ```
       npm run setup-db
       ```

### Running the Application
   1. Start the Express.js backend:
    - Open a terminal in the backend directory.
    - Run the following command:
      ```bash
      npm start
      ```
      The backend will start on http://localhost:3001.

   2. Start the React frontend:
    - Open a terminal in the frontend directory.
    - Run the following command:
      ```bash
      npm start
      ```
      The React development server will start on http://localhost:3000.
   3. Open your web browser and navigate to http://localhost:3000 to access the Task Manager application.



### Usage
 - Create a New Task:
      - Enter the task title and description in the provided form.
      - Click the "Create Task" button.
 - Read Task List:
      - View the list of tasks displayed on the page.
 - Update a Task:
      - Click the "Edit" button next to a task.
      - Modify the task details in the form.
      - Click the "Update Task" button.
 - Delete a Task:
      - Click the "Delete" button next to a task.