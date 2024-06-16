# ContactManagementUI

This project implements basic CRUD operations to manage user data including their first name, last name, and email address. It allows users to:

Create: Add new user entries with their details.
Read: View existing user information.
Update: Modify user details such as first name, last name, or email.
Delete: Remove user records from the database.
The application provides a straightforward interface to interact with user data, ensuring efficient management and manipulation of user information.

Node Version used: 20.14.0
NPM version: 10.7.0
Angular CLI version:  CLI: 18.0.4
.Net version: 8.0

Table of Contents

Installation
Usage
Features

# Installation

Install Node (if not already installed):

to check version of Node,npm,angular use command -> ng version

Install Angular CLI (if not already installed):

npm install -g @angular/cli

Install Bootstrap:

npm install bootstrap

Install Angular Material:

ng add @angular/material


# Usage

To begin using the Contact Management Project, you need to start the API first.
After starting the API, go to the angular and,

- run 'npm install' in terminal to install all required dependencies.
- run 'ng serve' in terminal to start the angular application.
- use http://localhost:4200/ to access the frontend.

# Features

Create:Add new user data with fields like first name, last name, and email address.

Read:View a list of all users stored in the database.
View detailed information of a specific user by their unique identifier (e.g., ID).

Update:Modify existing user information such as first name, last name, or email address.

Delete:Remove user records from the database based on their unique identifier.

Sorting:Allow users to sort the list of users by different attributes such as first name, last name, or email address in ascending or descending order.

Searching:Provide a search functionality to quickly find users based on keywords entered by the user. The search can be performed on fields like first name, last name, or email address.

Pagination:Display a limited number of user records per page to improve performance and user experience.
Enable navigation through pages (e.g., next page, previous page) to view additional user records.

These features collectively enhance the usability and functionality of your CRUD application, providing users with efficient ways to manage and interact with user data.

# Design Decisions:
1. Angular Material for UI Design:

Reason: Chose Angular Material for its pre-built components that provide a consistent, modern UI design.
Benefits: Ensures a clean and responsive design across different devices and screen sizes.
Usability: Angular Material's components (like buttons, forms, dialogs) are intuitive for users, enhancing usability.

2.Simplicity in Design:

Reason: Prioritized ease of use and minimalism.
Benefits: Reduces cognitive load for users and makes navigation straightforward.
Implementation: Utilized clean layouts, clear navigation paths, and minimalistic styling to avoid clutter.
3. Popup Modals for Editing and Deleting Data:

Reason: Opted for popup modals to handle editing and deleting operations.
Benefits: Provides focused interaction, isolating the user's attention to the task at hand without navigating away.
Implementation: Used Angular Material's dialog component or custom modals to ensure consistency in user experience.

# Application Structure:
Backend: .NET Core:

Architecture: Followed MVC (Model-View-Controller) or Web API architecture.
API Endpoints: Organized API endpoints logically (e.g., /api/users, /api/products) to manage CRUD operations.
Data Layer: Used Entity Framework Core for data access, ensuring efficient and scalable database interactions.
Frontend: Angular:

Component-Based Structure: Organized components (e.g., user list, user details, product list) for modularity and reusability.
Services: Implemented Angular services to handle API calls and business logic.
Routing: Utilized Angular Router for navigation between views and components, ensuring a single-page application experience.
Integration with Angular Material:

Component Theming: Customized Angular Material's theme to match the application's design language.
Responsive Design: Ensured responsiveness using Angular Material's responsive utilities and grid system.
Deployment and Scalability:

Deployment: Deployed on a cloud platform (e.g., Azure, AWS) for scalability and availability.
Continuous Integration/Continuous Deployment (CI/CD): Implemented CI/CD pipelines to automate testing and deployment processes, ensuring rapid iteration and deployment.

# Summary:
This .NET Core and Angular application leverages Angular Material for a simple and user-friendly design, enhancing usability through intuitive UI components and popup modals for data editing and deletion. The application structure follows best practices, focusing on modularity, scalability, and a responsive design approach to deliver a seamless user experience.

This approach ensures that users can interact with your application effortlessly while maintaining flexibility and scalability for future enhancements.
