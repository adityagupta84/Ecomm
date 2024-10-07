# 🛒 Ecomm - React E-Commerce Platform

Welcome to Ecomm, a modern e-commerce platform built with React and powered by Redux, Material UI, and Firebase.
The project demonstrates a clean and functional design with features like user authentication, shopping cart management, and checkout functionality.

## 🎉 Live Demo

You can check out the live version of the project here: (https://adityagupta84-ecomm.netlify.app/)

## 🌟 Features

User Authentication: Secure login and registration system with Firebase authentication.

Product Listing: A dynamic homepage displaying a list of products.

Shopping Cart: Add and remove items from your cart, with real-time price calculations.

Protected Checkout: Only logged-in users can access the checkout page.

Responsive Design: Optimized for both mobile and desktop devices.

## 🛠️ Technologies Used

React: Front-end framework for building user interfaces.

Redux: State management for handling global application state.

React Router DOM: Routing for seamless navigation between pages.

Firebase: Used for user authentication.

Material UI: For a modern and responsive design system.

## Getting Started

Follow these steps to run the project locally:

Prerequisites

Before you begin, ensure you have the following installed on your system:

Node.js
pnpm or npm
Firebase account (for authentication)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/adityagupta84/ecommerce.git
Navigate to the project directory:

bash
Copy code
cd ecommerce
Install dependencies: If you’re using pnpm (recommended):

bash
Copy code
pnpm install
Or, if you prefer npm:

bash
Copy code
npm install
Set up Firebase:

Go to Firebase Console.
Create a new project and enable Firebase Authentication.
Get your Firebase config details and create a .env file in the root directory with your Firebase keys:
env
Copy code
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
Run the app locally:

bash
Copy code
pnpm run dev
The app should now be running at http://localhost:3000.

Building for Production
To create a production build, run:

bash
Copy code
pnpm run build
The build files will be generated in the dist folder.

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project or fix any bugs, feel free to submit a pull request. Before you start, make sure to:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
