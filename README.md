# Advanced Transportation Management System

## Overview

The **Advanced Transportation Management System** is designed to optimize transportation logistics in warehouse operations. Developed during Codeutsava 7.0, this system enhances route efficiency and reduces delivery times and costs through advanced route optimization techniques.

## Technologies

- **Frontend:** ReactJS
- **Backend:** NodeJS
- **Database:** MongoDB
- **Framework:** ExpressJS

## Features

- **Enhanced Route Optimization:** Streamlines delivery routes to minimize travel time and operational costs.
- **Efficient Data Management:** Optimizes warehouse data for improved logistics and resource utilization.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/advanced-transportation-management-system.git
### Navigate to the project directory

```bash
  cd FarmToFleet
```

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for both frontend and backend simultaneously, use split terminals.

Install frontend dependencies
```bash
cd Client
npm install
```

Install backend dependencies

```bash
cd Server
npm install
```
### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values
```bash
# Database connection string
MONGO_URI="mongodb://localhost:27017/your-database-name"

# Frontend URL (adjust if needed)
ORIGIN="http://localhost:3000"
```
**Important:**

- **Separate terminals**: Run the commands in separate terminal windows or use `split terminal` to avoid conflicts.
- **Nodemon required**: Ensure you have `nodemon` installed globally to run the backend development servers using `npm run dev`. You can install it globally using `npm install -g nodemon`.

#### Start the backend server
- Navigate to the `backend` directory: `cd backend`
- Start the server: `npm run dev` (or npm start)
- You should see a message indicating the server is running, usually on port 7134.
     
#### Start the frontend server:
- Navigate to the `frontend` directory: `cd frontend`
- Start the server: `npm start`
- You should see a message indicating the server is running, usually on port 3000.
### Accessing the Application
Once both servers are running, you can access them at the following URL's:
- Backend: http://localhost:7134
- Frontend: http://localhost:3000
## Authors
- [Yash Gupta](https://github.com/YashGupta2111)
