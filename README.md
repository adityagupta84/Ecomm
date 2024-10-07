# 🛒 Ecomm - React E-Commerce Platform

Welcome to **Ecomm**, a modern e-commerce platform built with **React** and powered by **Redux**, **Material UI**, and **Firebase**. This project demonstrates a clean and functional design with features such as user authentication, shopping cart management, and a secure checkout process.

## 🎉 Live Demo

Check out the live version of the project here: [Ecomm Live Demo](https://adityagupta84-ecomm.netlify.app/)

## 🌟 Features

- **User Authentication**: Secure login and registration system with Firebase authentication.
- **Product Listing**: Dynamic homepage displaying a list of products.
- **Shopping Cart**: Add and remove items from the cart, with real-time price calculations.
- **Protected Checkout**: Only logged-in users can access the checkout page.
- **Responsive Design**: Optimized for both mobile and desktop devices.

## 🛠️ Technologies Used

- **React**: Front-end framework for building user interfaces.
- **Redux**: State management for handling global application state.
- **React Router DOM**: Routing for seamless navigation between pages.
- **Firebase**: Used for user authentication.
- **Material UI**: For a modern and responsive design system.

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**
- **pnpm** or **npm**
- **Firebase account** (for authentication)

### Installation

1. **Clone the repository**:

   git clone https://github.com/adityagupta84/ecommerce.git

2. **Navigate to the project directory**:

   
   cd ecommerce


3. **Install dependencies**:

   If you’re using `pnpm` (recommended):
   
   pnpm install

   Or, if you prefer `npm`:
   
   npm install

4. **Set up Firebase**:

   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and enable Firebase Authentication.
   - Get your Firebase config details and create a `.env` file in the root directory with your Firebase keys:

  
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
  

5. **Run the app locally**:

   pnpm run dev


   The app should now be running at `http://localhost:3000`.

## 🏗️ Building for Production

To create a production build, run:

pnpm run build


The build files will be generated in the `dist` folder.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project or fix any bugs, feel free to submit a pull request.

### Steps to Contribute:

1. **Fork the repository**.
2. **Create a new branch**:

   git checkout -b feature/your-feature-name


3. **Commit your changes**:

   git commit -m 'Add some feature'


4. **Push to the branch**:

   git push origin feature/your-feature-name

5. **Open a pull request**.

