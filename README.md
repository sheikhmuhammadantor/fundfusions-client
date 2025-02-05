# FundFusions - Crowdfunding Platform

## Project Overview
FundFusions is an innovative crowdfunding platform that bridges visionary entrepreneurs, social activists, and everyday individuals with a passionate community of backers, empowering them to bring their ideas to life.

## Screenshot
![FundFusions Screenshot](./assets/demo-image.png)

## Technologies Used
- **Frontend:** React.js, TailwindCSS, Firebase Authentication
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** dotenv for environment variables

## Core Features
- **User Registration & Authentication**: Secure login for both backers and project creators.
- **Project Listings**: Entrepreneurs can list their projects with funding goals.
- **Funding System**: Backers can pledge money to support projects.
## Core Features (Coming Soon)
- **Admin Panel**: Admins can manage projects and users. (Under Develop)
- **Real-time Updates**: Donors and project owners receive live updates on their contributions. (Under Develop)
  
## Dependencies
- `react`: React framework for the frontend.
- `express`: Web server for handling backend requests.
- `mongoose`: MongoDB object modeling for Node.js.
- `jsonwebtoken`: JWT-based authentication.
- `dotenv`: Loads environment variables from `.env` files.
- `tailwindcss`: Utility-first CSS framework for styling.
- `firebase`: Firebase for user authentication and database.

## Running the Project Locally

### Prerequisites:
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Step-by-Step Guide:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sheikhmuhammadantor/fundfusions-client
   ```

2. **Navigate to the project folder:**
   ```bash
   cd fundfusions-client
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env.local` file and add your environment variables, e.g., MongoDB URI, Firebase credentials, and JWT secret.
   
5. **Start the server:**
   ```bash
   npm run dev
   ```

6. **Access the project:**
   Open your browser and go to `http://localhost:5173`.

## Live Project Links & Resources:
- **Live Demo:** [FundFusions Demo](https://fundfusions.netlify.app/)
- **Server Repository:** [FundFusions Server](https://github.com/sheikhmuhammadantor/fundfusions-server)
