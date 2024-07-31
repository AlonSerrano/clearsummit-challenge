
# Clearsummit Challenge

## Project Overview

This project is a REST API built using Node.js with TypeScript. The API includes an endpoint to create users with specific fields and includes validation, testing, and documentation.

### Technologies Used

- Node.js
- TypeScript
- TypeORM
- Express
- PostgreSQL (or any other relational database supported by TypeORM)
- Swagger for API documentation
- Jest for testing

## Setup Instructions

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Running the Application with Docker Compose

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AlonSerrano/clearsummit-challenge.git
   cd clearsummit-challenge
   ```

2. **Create a `.env` file in the root directory with the following content:**

   ```env
   NODE_ENV=development
   DB_HOST=db
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_DATABASE=mydatabase
   ```

3. **Build and start the Docker containers:**

   ```bash
   docker-compose up --build
   ```

4. **The application should now be running on `http://localhost:3000`.**

## How to Run Tests

1. **Ensure the application and database are running (you can use Docker Compose to run them).**

2. **Run the tests inside the Docker container:**

   ```bash
   docker exec -it clearsummit-challenge-app-1 sh
   npm run test
   ```

3. **Jest will execute the tests and provide the results in the terminal.**

## How to View API Documentation

The API documentation is generated using Swagger. You can view the API documentation by navigating to the following URL:

```
http://localhost:3000/api-docs
```

This documentation provides detailed information about the available endpoints, request parameters, and response formats.

## Contact

For any questions or support, please contact [luis_alonso@outlook.com].
