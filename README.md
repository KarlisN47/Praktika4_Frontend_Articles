# Frontend Overview
This frontend project is designed to complement the backend API by providing a user interface for authentication, article management, and commenting functionality. The application is built using React.js.

## Features
- **User Authentication**: Register and log in with an email and password.
- **Article Management**:
  - Create, view, edit, and delete articles.
- **Comment Management**:
  - Add, edit, and delete comments on articles.

## Setup Instructions

### Prerequisites
1. Node.js (v16 or higher)
2. A terminal or IDE with a terminal.

### Local Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd frontend
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:** Create a .env file in the root directory and provide the following variable:
   ```dotenv
   REACT_APP_API_URL=http://localhost:3000/api
   ```
   Replace http://localhost:3000 with the URL of your backend API if it’s running on a different host or port.

4. **Run the Application:**
   ```bash
   npm start
   ```
   Replace http://localhost:3000 with the URL of your backend API if it’s running on a different host or port.

5. **Access the Application:** he application will be available at http://localhost:3000.

## Development

### Running in Development Mode

For live reloading during development, run:
```bash
npm install
```

### Adding New Features
- Components are located in the src directory.
- API requests are made using Axios; the base URL is configured in the .env file.
- Update the state management as necessary to reflect new features.

## Deployment

1. Build the application for production:
```bash
npm run build
```

2. Deploy the contents of the build directory to a web server or hosting provider.

## Troubleshooting
- **Connection Errors:** Ensure the backend is running and the API URL in the .env file is correct.
- **UI Issues:** Check the browser console for error messages.