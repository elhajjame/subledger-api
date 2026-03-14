# SubLedger Backend API

## Project Overview

SubLedger is a backend API designed for managing digital subscriptions.  
The goal of this project is to build a secure REST API with authentication, authorization, and subscription management.

The system allows users to register, log in, and manage their personal subscriptions while providing administrators with access to special routes.

---

## Features

### Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication

### Authorization

- Role-based access control (User / Admin)
- Protected routes for authenticated users
- Admin-only routes

### Subscription Management

Authenticated users can manage their subscriptions:

- Create a subscription
- View all their subscriptions
- View a single subscription
- Update a subscription
- Delete a subscription

Each subscription contains:

- name
- price
- billingCycle (monthly / yearly)
- createdAt
- userId

### Validation

Input validation is implemented using:

- Express-validator

Examples:

- Valid email required
- Password required
- Subscription name required
- Price must be greater than 0
- Billing cycle must be monthly or yearly

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Express-validator
