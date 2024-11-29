[DEMO-LINK] - (https://stepan-r.github.io/ToDoApp-reactTS/)

# Overview: 
  The React Todo App is a single-page application designed to help users manage their tasks efficiently. It allows users to create, read, update, and delete todo items, providing a seamless and interactive experience. The application leverages an external API for data management, ensuring that user data is persistent and can be accessed across sessions.

## Technologies Used:

### React: 
  The core library for building the user interface, utilizing components to create a dynamic and responsive layout.

### JavaScript (ES6+): 
  The programming language used for writing the application logic, including handling user interactions and managing state.

### CSS: 
  For styling the application, ensuring a clean and user-friendly design.

### Axios: 
  A promise-based HTTP client used to make API requests to fetch and manipulate todo data.

### RESTful API: 
  The backend service that provides the necessary endpoints for CRUD (Create, Read, Update, Delete) operations on todo items.


## How I Built It: As a front-end developer, I followed a structured approach to build the Todo App:

### Project Setup: 
  I initialized the project using Create React App, which provided a boilerplate setup with all the necessary configurations for a React application.

### Component Structure: 
  I designed a modular component structure, breaking down the application into reusable components such as TodoList, TodoItem, TodoForm, and Header. This approach enhances maintainability and scalability.

### State Management: 
  I utilized React's built-in state management using hooks (like useState and useEffect) to handle the application's state. This allowed me to manage the list of todos and their individual states effectively.

### API Integration: 
  I integrated the external API using Axios to handle data fetching. I implemented functions to retrieve the initial list of todos, add new todos, update existing ones, and delete todos. This involved making GET, POST, PUT, and DELETE requests to the API endpoints.

### User Interaction: 
  I implemented event handlers to manage user interactions, such as submitting the todo form, marking todos as complete, and deleting todos. This ensured a smooth user experience with real-time updates to the UI.

### Styling: 
  I applied CSS to enhance the visual appeal of the application. I focused on creating a clean and intuitive layout that makes it easy for users to navigate and manage their tasks.

### Testing and Debugging: 
  I thoroughly tested the application to identify and fix any bugs, ensuring that all functionalities worked as intended. I also optimized the performance of the app by minimizing unnecessary re-renders.


## Instructions to Run the Project Locally

### Prerequisites
### Node.js: 
  Make sure you have Node.js installed on your machine. It is recommended to use Node.js version 14.x or higher. You can check your Node.js version by running: node -v

#### Step 1: Clone the Repository
  Open your terminal and run the following command to clone the repository to your local machine: 
  git clone https://github.com/stepan-r/ToDoApp-reactTS.git

#### Step 2: Navigate to the Project Directory
  Change your working directory to the cloned repository: 
  cd ToDoApp-reactTS

#### Step 3: Install Dependencies
  Install the required dependencies using npm or yarn. You can use either of the following commands:
  npm install

#### Step 4: Start the Development Server
  Once the dependencies are installed, you can start the development server by running:
  npm start

  This command will start the application, and it should automatically open in your default web browser at http://localhost:3000. If it doesn't open automatically, you can manually navigate to that URL.

#### Step 5: Explore the Application
  You can now explore the ToDo App, create new tasks, edit existing ones, and delete tasks as needed.

## Conclusion: 
  The React Todo App demonstrates my ability to build a fully functional front-end application that interacts with a backend API. It showcases my skills in React, state management, and API integration, all while providing a user-friendly interface for task management. This project not only serves as a practical tool for users but also highlights my proficiency as a front-end developer.
