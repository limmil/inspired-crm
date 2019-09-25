# MERN CRM App

> CRM app built with the MERN stack. Used Redux for state management, Reactstrap and react-transition-group.

## Quick Start

Add your MONGO_URI to the default.json file for testing. Make sure you set an env var for MONGO_URI and the jwtSecret on deployment in server.js and auth.js

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Deployment

It has a post build script for Heroku in package.json. Just push to Heroku git and it will build within the host server.


## App Info

This is a CRM React App

### Author

Tunnel Snake Group

### Version

1.0.0

### License

This project is licensed under the MIT License
