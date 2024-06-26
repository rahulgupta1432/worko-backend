Here's an updated `README.md` file that includes the provided data and information about using `npx` and `jest` for running tests:

```markdown
# Worko Backend API
Github

This project contains a collection of APIs for the Worko Backend Assignment. It includes endpoints for creating, fetching, updating, and soft-deleting user information. The testing of these APIs is done using Jest.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/worko-backend-api.git
    cd worko-backend-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the necessary environment variables:

    ```
    PORT=5000
    DB_NAME=your_db_name
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_HOST=your_db_host
    JWT_SECRET=your_jwt_secret
    ```

### Running the Tests

1. Ensure your MongoDB server is running.

2. Run the tests using Jest:

    ```bash
    npx jest --detectOpenHandles
    ```

   The `--detectOpenHandles` flag helps troubleshoot any asynchronous operations that may not have been stopped in your tests.

   Example console output when tests are run successfully:

   ```plaintext
   PASS  test/user.test.js
    User API
      √ Fetch All Users (232 ms)
      √ Fetch User By Id (30 ms)
      √ Create new User (79 ms)
      √ User Updation By Put Method (25 ms)
      √ User Updation By Patch Method (19 ms)
      √ Soft Delete By User Id (16 ms)
   
   Test Suites: 1 passed, 1 total
   Tests:       6 passed, 6 total
   Snapshots:   0 total
   Time:        2.057 s
   Ran all test suites.
   ```

   Ensure that your console logs, such as "Server running on port 5000" and "MongoDB connected...", are visible during the test run to confirm server and database connectivity.

## API Endpoints

### 1. Get All Users

- **Endpoint:** `GET /api/worko/user`
- **Headers:**
  - `Content-Type: application/json`
- **Description:** Fetches all users.
- **Response:**
  ```json
  {
    "code": 200,
    "message": "Users Fetched Successfully",
    "data": [
      {
        "_id": "667c547994b751bac85177f8",
        "email": "johndoe1@example.com",
        "name": "John Doe",
        "age": 25,
        "city": "New York",
        "zipCode": "10001",
        "isDeleted": false,
        "createdAt": "2024-06-26T17:48:41.481Z",
        "updatedAt": "2024-06-26T17:48:41.481Z",
        "__v": 0
      },
      {
        "_id": "667c640fa7f9f368268fa269",
        "email": "9w8hq4@example.com",
        "name": "John Doe",
        "age": 25,
        "city": "New York",
        "zipCode": "10001",
        "isDeleted": false,
        "createdAt": "2024-06-26T18:55:11.426Z",
        "updatedAt": "2024-06-26T18:55:11.426Z",
        "__v": 0
      }
    ]
  }
  ```

### 2. Get User by ID

- **Endpoint:** `GET /api/worko/user/:id`
- **Headers:**
  - `Content-Type: application/json`
- **Description:** Fetches a specific user by their ID.
- **Response:**
  ```json
  {
    "code": 200,
    "message": "User Id By Information Fetched Successfully",
    "data": {
      "_id": "667c5469d7e18c5e15f365e2",
      "email": "johndoe12@example.com",
      "name": "John Doe Hey",
      "age": 26,
      "city": "New York",
      "zipCode": "10001",
      "isDeleted": true,
      "createdAt": "2024-06-26T17:48:25.132Z",
      "updatedAt": "2024-06-26T18:55:11.488Z",
      "__v": 0
    }
  }
  ```

### 3. Create User

- **Endpoint:** `POST /api/worko/user`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "name": "John Doe",
    "age": 25,
    "city": "New York",
    "zipCode": "10001"
  }
  ```
- **Description:** Creates a new user.
- **Response:**
  ```json
  {
    "code": 200,
    "message": "User created successfully",
    "data": {
      "_id": "667c64332232b65bc4eaf179",
      "email": "h8sf8a@example.com",
      "name": "John Doe",
      "age": 25,
      "city": "New York",
      "zipCode": "10001",
      "isDeleted": false,
      "createdAt": "2024-06-26T18:55:47.922Z",
      "updatedAt": "2024-06-26T18:55:47.922Z",
      "__v": 0
    }
  }
  ```

### 4. Update User (PUT)

- **Endpoint:** `PUT /api/worko/user/:id`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "John Doe"
  }
  ```
- **Description:** Updates a user's details using the PUT method.
- **Response:**
  ```json
  {
    "code": 200,
    "message": "User updated successfully",
    "data": {
      "_id": "667c5469d7e18c5e15f365e2",
      "email": "johndoe12@example.com",
      "name": "John Doe",
      "age": 26,
      "city": "New York",
      "zipCode": "10001",
      "isDeleted": true,
      "createdAt": "2024-06-26T17:48:25.132Z",
      "updatedAt": "2024-06-26T18:55:47.953Z",
      "__v": 0
    }
  }
  ```

### 5. Update User (PATCH)

- **Endpoint:** `PATCH /api/worko/user/:id`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "city": "New York 2.0"
  }
  ```
- **Description:** Updates a user's details using the PATCH method.
- **Response:**
  ```json
  {
    "code": 200,
    "message": "User updated successfully",
    "data": {
      "_id": "667c5469d7e18c5e15f365e2",
      "email": "johndoe12@example.com",
      "name": "John Doe",
      "age": 26,
      "city": "New York 2.0",
      "zipCode": "10001",
      "isDeleted": true,
      "createdAt": "2024-06-26T17:48:25.132Z",
      "updatedAt": "2024-06-26T18:55:47.977Z",
      "__v": 0
    }
  }
  ```

### 6. Soft Delete User

- **Endpoint:** `DELETE /api/worko/user/:id`
- **Headers:**
  - `Content-Type: application/json`
- **Description:** Soft deletes a user by their ID.
- **Response:**
  ```json
  {
    "code": 200,
    "message": "User soft deleted successfully"
  }
  ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

- `PORT`: The port on which the server runs.
- `DB_NAME`: The name of your MongoDB database.
- `DB_USER`: The username for your MongoDB database.
- `DB_PASSWORD`: The password for your MongoDB database.
- `DB_HOST`: The host address for your MongoDB database.
- `JWT_SECRET`: The secret key for JSON Web Token (JWT) authentication.

## Authentication

You must log in to perform any tasks. The API uses JWT for authentication.