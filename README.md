# Quiz Application Documentation
Here is an updated README.md file with a detailed breakdown of the tech stack:

This project was bootstrapped with [Vite](https://vitejs.dev/).

## Technologies Used

### Core

- **React** - Frontend library to build user interfaces. Used for all UI components.

- **Redux** - State management. Used to manage shared state between components.

  - Redux Toolkit used to simplify Redux setup.

- **React Router** - Routing and navigation.

- **Axios** - Promise based HTTP client for API calls.

- **MUI** - Component library for responsive UI.

### Build Tools

- **Vite** - Next gen frontend build tool, alternative to Create React App. Provides fast dev server and optimized builds.

- **ESLint** - Linter for identifying and reporting on patterns in JavaScript. Ensures code quality and consistency.

- **Prettier** - Code formatter for consistent style. Integrates with ESLint.

### Testing

- **Jest** - JavaScript testing framework.

- **React Testing Library** - Lightweightlibrary for testing React components.

### Styling

- **Tailwind CSS** - Utility first CSS framework for rapid styling.

- **PostCSS** - Transforming CSS with JavaScript. Allows advanced features like nesting, variables etc.

### Deployment

- **Vercel** - Platform for deploying and hosting frontends. Provides serverless functions and edge network.

## Project conventions

- **Folders** - `/screens`, `/components`, `/utils` etc

- **File naming** - `Home.jsx`, `Navbar.jsx`, `api.js`

- **Component naming** - `Home`, `Navbar`, `ApiUtils`

## Table of Contents
1. [Introduction](#introduction)
2. [Business Perspective](#business-perspective)
3. [Project Setup](#project-setup)
4. [Directory and File Structure](#directory-and-file-structure)
5. [Application Flow](#application-flow)
6. [Additional Details](#additional-details)
7. [Conclusion and Further Development](#conclusion-and-further-development)

<a name="introduction"></a>
## Introduction
This document offers a comprehensive guide to the Quiz application. It's designed for both technical understanding and business insight, focusing on functionalities for students and administrators.

<a name="business-perspective"></a>
## Business Perspective
### Student Capabilities
- **Lesson Access**: Students can access various lessons, preparing them for quizzes.
- **Quiz Participation**: After completing lessons, quizzes unlock, allowing students to test their knowledge.
- **Progress Tracking**: The app tracks student progress, unlocking subsequent quizzes based on performance.

### Admin Capabilities
- **Content Management**: Admins can add and manage lessons and quizzes, including content in different languages.
- **User Management**: They have the capability to manage student profiles and track their progress.
- **Quiz Customization**: Admins can create quizzes with various formats, including image-based options.

<a name="project-setup"></a>
## Project Setup
### Environment Configuration
- **Node.js version**: Specify the required version.
- **Global Packages**: Detail any global packages needed.

### Running the Project
```bash
npm install
npm start
```

<a name="directory-and-file-structure"></a>
## Directory and File Structure
### Root Level Files
- `.DS_Store`: macOS system file for folder attributes.
- `.env`: Environment variables for project configuration.
- `.eslintrc.cjs`: Ensures code quality through ESLint rules.
- `.gitignore`: Lists files/directories ignored by Git.
- `GlobalConstants.js`: Global constants for the app.
- `index.html`: Main HTML file for the app.
- `output.txt`: Log file (specifics needed).
- `package.json` & `package-lock.json`: Manages dependencies and scripts.
- `README.md`: General documentation.
- `vercel.json`: Vercel deployment configuration.
- `vite.config.js`: Vite build tool configuration.

### Public Folder
- **vite.svg**: SVG file used in UI.

### Src Folder
- **App.css**: Global styling.
- **App.jsx**: Main React component.
- **HeaderFooterLayout.jsx**: Layout with header and footer.
- **index.css**: Basic styling.
- **Loader.jsx**: Loading indicator.
- **main.jsx**: React entry point.
- **Url_Routes.jsx**: Manages application routes.

#### Redux Folder
- **action.js**: Redux actions.
- **actionTypes.js**: Types of Redux actions.
- **reducer.js**: Redux reducers.
- **root-reducer.js**: Combines all reducers.
- **store.js**: Configures Redux store.

#### Screens Folder
- **Dashboard.jsx**: Main dashboard view.
- **Home.jsx**: Home/landing page.
- **Login.jsx**: Handles user login.
- **MultiSelect.jsx**: Multi-option selection component.
- **Profile.jsx**: User profile management.
- **QuizListing.jsx**: Lists available quizzes.
- **Users.jsx**: Manages user accounts.

##### Quiz Subfolder
- **CreateLesson.jsx**: For creating lessons.
- **LessonIndex.jsx**: Lists lessons.
- **LessonView.jsx**: Individual lesson view.
- **QuizPage.jsx**: Quiz interface.
- **QuizResults.jsx**: Displays quiz results.

##### Statistics Subfolder
- **BarchartAdmin.jsx**: Admin statistics.
- **Barchart_user.jsx**: User statistics.
- **Card.css**: Styles for card component.
- **Card.jsx**: Reusable card component.
- **DashboardRedirection.jsx**: Dashboard navigation logic.


## Application Flow

### Admin/Teacher Flow

#### Quiz Creation

- Admin can create a new quiz by going to the Create Quiz page. 

- They enter a title and add multiple choice questions with 4 options each.

- For each question, they select the correct answer. 

- They can upload images and diagrams if needed.

- Once all questions are added, they can submit the quiz.

- This will make an API call to save the quiz in the backend.

#### Managing Quizzes

- Existing quizzes can be edited or deleted from the Quiz Listing page.

- Quizzes can be activated/deactivated to control visibility.

#### Managing Users

- Admins can create new student accounts by providing details like name, email etc.

- They can view a listing of all student accounts.

- Accounts can be activated/deactivated.

### Student Flow

#### Taking Lessons

- Students can see a list of available lessons on the Lessons page. 

- Each lesson card shows if it's locked or unlocked for that user.

- They can click on an unlocked lesson to open it.

- The lesson content is displayed within the app itself.

- Once the lesson is completed, they can mark it as done.

#### Taking Quizzes

- Based on lesson completion, related quizzes get unlocked.

- Students can start the quiz from the Lessons page.

- Each question is displayed one by one with a timer and options.

- They select an answer option and proceed to the next question.

- At the end, all responses are submitted together. 

- The Quiz Results summarizes their score and shows which questions they got right/wrong.

#### Progress Tracking

- The student dashboard shows overall progress and statistics.

- It displays quizzes attempted, total score, accuracy etc.

- Upcoming lessons and quizzes are also visible.

## Grading Policy

- Each quiz has a configured passing marks, say 8/10. 

- Students must score above this to be considered passed.

- Passing a quiz unlocks the next set of lessons/quizzes as configured.

- Students can retake failed quizzes to improve their score.

Let me know if you would like me to explain any other flow or functionality!

<a name="additional-details"></a>
## Additional Details
### Responsive Design
- Explanation of responsive UI/UX design strategies.

### Multilingual Support
- How the application supports multiple languages.

<a name="conclusion-and-further-development"></a>
## Conclusion and Further Development
- Summary of the application's capabilities.
- Suggestions for future enhancements.

---
