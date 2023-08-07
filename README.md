# Express Static Server with Directory Listing
This is a simple Node.js application that sets up an Express server to serve static files from a specified directory and provides a directory listing using the `serve-index` middleware. It also utilizes the `morgan` middleware for logging.

## Prerequisites

- Node.js installed on your machine
- Basic understanding of Node.js and Express.js

## Start the server:

node index.js

Access the served files and directory listing in your web browser by navigating to http://<IP>:<PORT>/.

## Features:
Serves static files from the specified directory.
Provides a directory listing with icons for each item using the serve-index middleware.
Logs incoming requests using the morgan middleware.

## Configuration
You can customize the behavior of this server by modifying the .env file.

PORT: The port on which the server will listen.
IP: The IP address to bind the server to.
DIRECTORY: The path to the directory you want to serve.

## Dependencies Used
dotenv: For loading environment variables from the .env file.
express: A minimal and flexible Node.js web application framework.
serve-index: Middleware for serving a directory listing.
morgan: Middleware for logging HTTP requests.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/cjfswd-experience/node-express-static-indexable/edit/main/LICENSE) file for details.
   
Feel free to modify this README to better suit your project's specific details and style. Remember to replace placeholders with actual values and filenames as needed.
