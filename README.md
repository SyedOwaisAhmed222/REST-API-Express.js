# REST API on Express for Courses

This is a simple RESTful API built with Node.js and Express to manage courses. It includes CRUD operations and is a demonstration of basic API development principles.

## Requirements

- Node.js
- NPM

# Installation
Clone the repository:

terminal>

git clone [your-repo-url]

cd [your-project-name]

npm install

node index.js

## API Endpoints

# Get all courses

Method: GET

Endpoint: /api/courses

Response: Array of courses

# Get a specific course

Method: GET

Endpoint: /api/courses/:id

Response: Single course object

# Add a new course

Method: POST

Endpoint: /api/courses

Body: name field is required

# Update an existing course

Method: PUT

Endpoint: /api/courses/:id

Body: name field is required

# Delete a course

Method: DELETE
Endpoint: /api/courses/:id

# Validation
This API uses Joi for input validation. Course names should be at least 3 characters long.
