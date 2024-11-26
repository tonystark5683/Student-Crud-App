# Frontend - Student Management System

This is the frontend of the Student Management System built using Angular. It interacts with the backend to perform CRUD operations on student records.

## Features
- Display a list of students
- Add a new student
- View details of a student
- Edit a student's information
- Delete a student

## Prerequisites

- Node.js (v16 or above)
- Angular CLI (v14 or above)

## Installation

1. Clone the repository to your local machine.

2. Install dependencies by running:
   - `npm install`

3. Update the API URL:
   - In the `src/app/services/student.service.ts` file, update the `apiUrl` to point to the backend server.
     For example:
     ```typescript
     apiUrl = "http://localhost:3000"; 
     ```

4. Run the application locally:
   - To start the development server, use:
     - `ng serve`

   - The application will be accessible at `http://localhost:4200`.

## Usage

Once the app is running, you can perform the following actions:

- **View all students:** The home page displays a list of all students.
- **Add a new student:** Fill out the form and click "Add Student" to add a student.
- **View student details:** Click on a student from the list to view their details.
- **Edit a student:** Click the "Edit" button on a student's details page to update their information.
- **Delete a student:** Click the "Delete" button to remove a student.

