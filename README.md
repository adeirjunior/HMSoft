# Hotel Management System (HMS)

This is an ongoing project for a Hotel Management System developed using NestJS, MongoDB, and GraphQL. The system is designed to streamline hotel administration tasks, providing features for user registration and hotel registration.

## Features

- **User Registration**: Users can register with the system, providing their personal information and credentials.

- **Hotel Registration**: Registered users can create and register their hotels, providing details such as hotel name, location, amenities, and room types.

- **Authentication and Authorization**: The system supports user authentication and authorization, ensuring secure access to registered features.

Please note that the project is still under development, and additional features will be implemented in future updates.

## Technologies Used

- **NestJS**: A scalable and efficient Node.js framework for building server-side applications, leveraging RESTful and GraphQL architectural principles.

- **MongoDB**: A highly flexible and scalable NoSQL database, suitable for storing hotel-related data such as user information, hotels, and more.

- **GraphQL**: A query language and data manipulation language that offers an efficient approach to client-server communication, enabling flexible and specific queries.

## Getting Started

To set up the project locally and run the existing functionality, follow these steps:

1. Ensure that you have Node.js and npm (or yarn) installed on your machine.

2. Clone this repository to your chosen directory using the following command:

   ```bash
   git clone https://github.com/adeirjunior/hms.git
   ```

3. Navigate to the project directory:

   ```bash
   cd hms
   ```

4. Install project dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

5. Configure the necessary environment variables, such as database connection information, API keys, etc. You can use the `.env.example` file as a reference.

6. Start the development server:

   ```bash
   npm run start:dev
   ```

   or

   ```bash
   yarn start:dev
   ```

7. The server will start on `http://localhost:3000`. You can test the user registration and hotel registration features using appropriate GraphQL queries.

## Contribution

As the project is still under development, contributions are welcome! Feel free to contribute by implementing new features, fixing bugs, or improving existing functionality. Follow these steps to contribute:

1. Fork this repository.

2. Create a branch for your new feature or bug fix:

   ```bash
   git checkout -b your-branch-name
   ```

3. Make the desired changes and commit:

   ```bash
   git commit -m "Description of your changes"
   ```

4. Push your changes to the remote repository:

   ```bash
   git push origin your-branch-name
   ```

5. Open a pull request in the original repository, describing your changes and the intended improvements.

Your contributions will be appreciated in advancing the project!

## License

This project is licensed under the [MIT License](LICENSE).
