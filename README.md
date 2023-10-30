# E-commerce Website

Welcome to the TotlityCorp E-commerce website project. This is an intermediate-level e-commerce website built with Vite + React.js, and Tailwind CSS. It features user authentication using Firebase, real-time cart updates, and admin capabilities for product management.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [User Authentication](#user-authentication)
- [Admin Panel](#admin-panel)

## Demo

You can see a live demo of the project here: https://totalitycorp-frontend-challenge-blond.vercel.app

## Features

- **Product Listing**:

  - Display a variety of products with images, names, prices, and "Add to Cart" buttons.
  - Implement filters to allow users to sort products by category and price.

- **Shopping Cart**:
  - Implement a cart section to display the added products, quantities, and total cost.
  - Allow users to remove items from the cart.
  - Display real-time updates of the cart total and item count.
- **Single Product Page**:

  - Implement dynamic sinple product page to display the product, image, desciption, and cost.

- **Orders Page**:
  - Implement orders page to display the placed orders.
- **Checkout**:

  - Implement a checkout process that calculates the total cost of items in the cart.
  - Allow users to enter shipping information and payment details.

- **User Authentication**:

  - User registration and login functionalities using Firebase Authentication.

- **Admin Panel**:

  - Admin can log in and access an admin panel.
  - Admin can upload and manage products, including images, names, and prices.

- **Responsive Design**:
  - Ensure the website is responsive and works seamlessly on both desktop and mobile devices.
  - Optimize the layout for different screen sizes using Tailwind CSS.

## Tech Stack

- Vite + React
- Tailwind CSS
- Firebase (Authentication and Storage)

## User Authentication

This project uses Firebase for user authentication. Users can register, log in, and access their account. Firebase Authentication is integrated into the project, so there's no need to implement custom authentication logic.

## Admin Panel

To access the admin panel:

1. Log in with your admin credentials. (admin@gmail.com , abc1234)
2. Visit `/dashboard` in the URL to access the admin panel.
3. From the admin panel, you can manage products, including uploading new products.
