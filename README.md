# 101393080_comp3133_assignment2

## Assignment Overview

This project is for COMP3133 - Assignment 2. It involves creating a full-stack application with a frontend built using Angular and a backend using GraphQL. The frontend allows users to perform CRUD operations, while the backend provides a GraphQL API for data manipulation. MongoDB is used as the database to store employee information.

## Features

### Frontend
- **CRUD Operations**: The frontend allows users to create, read, update, and delete employee records.
- **Search Functionality**: Users can search for employees based on their department and position.
- **GraphQL Integration**: The frontend interacts with the backend using GraphQL to fetch and manipulate data.

### Backend
- **GraphQL API**: The backend provides a GraphQL API with the `getAllEmployees` query and mutation to add, update, or delete employee data.
- **MongoDB**: Employee data is stored in a MongoDB database.

### Technologies Used
- **Frontend**: Angular, Apollo Client, RxJS
- **Backend**: Node.js, Apollo Server, MongoDB, GraphQL
- **Testing**: Postman, Browser

## Setup Instructions

### 1. Frontend Setup

To run the frontend, follow these steps:

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/DongryeolPark/101393080_comp3133_assignment2.git
   cd frontend
Install dependencies:

bash
Copy
npm install
Start the Angular development server:

bash
Copy
ng serve
Navigate to http://localhost:4200 in your browser.

2. Backend Setup
To run the backend, follow these steps:

Clone the backend repository:

bash
Copy
git clone https://github.com/DongryeolPark/101393080_comp3133_assignment2.git
cd backend
Install dependencies:

bash
Copy
npm install
Start the backend server:

bash
Copy
node index.js
The GraphQL API will be available at http://localhost:4000/graphql.

Test User
To test the system, use the following credentials:

Email: testuser@domain.com

Password: password1234

Screenshots
MongoDB Data: (Screenshot of MongoDB showing employee data)

GraphQL API Tests: (Postman API test screenshots)

Frontend CRUD Operations: (Screenshots of the frontend CRUD operations)

Search Functionality: (Screenshots of the search screen)

Notes
The node_modules folder is excluded from the repository to reduce the file size.

Please ensure to remove the node_modules folder before creating the ZIP file for submission.

GitHub Repository
Frontend Repository: GitHub - Frontend

Backend Repository: GitHub - Backend
