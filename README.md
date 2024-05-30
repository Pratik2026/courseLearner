CourseLearner
CourseLearner is a web application built with React, Redux, and Keepreact for the UI. It allows users to view and manage enrolled courses. The project uses Firebase Firestore as the database.

Features :

DashBoard
CourseList
COurseDetails
can Like the course
can Enroll in the course
can filter the course by title & Instructor name
can sort the course by most Liked
Responsive UI
Global state management using Redux


Prerequisites
Node.js and npm installed on your machine
Firebase Firestore setup (optional if using your own database)

Getting Started
1. Populate the Database
If you are not using the provided Firebase Firestore database, you need to populate the database first.

- node src/db/populatedb.js

2. Install Dependencies

- npm install

3. Run the Development Server

- npm run dev