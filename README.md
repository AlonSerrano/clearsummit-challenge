
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
![image](https://github.com/user-attachments/assets/bf197381-01fa-4870-8aa2-4023a3bd33fc)

4. **The application should now be running on `http://localhost:3000`.**

## Test end-point

 ```bash
curl --location 'localhost:3000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name":"Luis",
    "last_name":"Serrano",
    "email":"luis_alonso@outlook.com",
    "date_of_birth":"1991-11-22",
    "accept_terms_of_service":false
}'
 ```

![image](https://github.com/user-attachments/assets/8ecfab4c-1ad8-42d9-8fbb-63093c3d8e8a)


## How to Run Tests

1. **Ensure the application and database are running (you can use Docker Compose to run them).**

2. **Run the tests inside the Docker container:**

   ```bash
   docker exec -it clearsummit-challenge-app-1 sh
   npm run test
   ```

3. **Jest will execute the tests and provide the results in the terminal.**

![image](https://github.com/user-attachments/assets/eefc6e7b-893c-42d0-89f5-612a410d154e)


## How to View API Documentation

The API documentation is generated using Swagger. You can view the API documentation by navigating to the following URL:

```
http://localhost:3000/api-docs
```

This documentation provides detailed information about the available endpoints, request parameters, and response formats.

![screencapture-localhost-3000-api-docs-2024-07-31-17_36_11](https://github.com/user-attachments/assets/5f118629-02b0-46de-8639-a22a63b6f1bb)

## Contact

For any questions or support, please contact [luis_alonso@outlook.com].
