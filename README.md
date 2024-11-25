# INFR3120 Assignment 3 - Recipe Application

## Project Overview
This project is a **Recipe Management Application** built with **ExpressJS**. It allows users to manage recipes through CRUD operations (Create, Read, Update, Delete). The application is styled using **custom CSS** and **Bootstrap** to give it a clean, professional look and feel. The goal of this application is to provide a user-friendly interface for managing recipe data efficiently.

## The Code Source 

The template for this project was provided by my professor; however, I took full responsibility for writing all the code, including the implementation, styling, and CSS. Additionally, the idea and design for the project, including the concept and layout, were entirely my own. The professor's template served only as a starting point, and all customizations, features, and creative decisions were independently developed by me. This has been appropriately cited in the README file as part of the internal documentation.

## link to my word doc of project plan:
https://1drv.ms/w/c/78d015aeef614e89/EbIJD9gE_fFMtKikVJ7C50wBZZd2yPEIF9WgQRlotKrpdg?e=rtd9I0

## Features and Application Requirements
### 1. Project Plan
- **Idea**: A Recipe Management Application for users to store, view, and manage their favorite recipes.
- **Visuals**: The project plan includes mockups for the homepage and the recipe management interface. The visuals are available in the attached Word file.
- **Goal**: To demonstrate proficiency in building a fully functional web application with a professional design and complete CRUD operations.

### 2. New ExpressJS Application
- The application is built from scratch using **ExpressJS**.
- Folder structure:
  - `routes`: Contains route handlers.
  - `views`: Contains EJS templates for dynamic content rendering.
  - `public`: Contains static assets like CSS and images.
  - `model`: Contains Mongoose schemas for MongoDB collections.

### 3. Site Design
- **Custom CSS**: The application uses custom styles defined in `app.css` for unique branding and aesthetics.
- **Bootstrap Framework**: For responsive design and quick implementation of professional UI components.

### 4. Database Configuration
- The application uses **MongoDB Atlas** as its database.
- Database credentials are securely stored in a `config` file and not hardcoded in `app.js`.

### 5. Homepage
- A **splash page** serves as the homepage, showcasing the application's purpose and a navigation menu.

### 6. Shared Header and Footer
- A **shared header** and **footer** are implemented for consistency across all pages using EJS partials.

### 7. Public Page for Recipe List
- A dedicated page displays a **list of recipes** from the MongoDB collection.
- Each recipe includes its title, ingredients, steps, and a brief description.

### 8. Full CRUD Functionality
- Users can:
  - **Create**: Add new recipes.
  - **Read**: View a list of recipes.
  - **Update**: Edit existing recipes.
  - **Delete**: Remove recipes with a confirmation dialog.

### 9. Delete Confirmation Message
- A delete confirmation message is implemented to prevent accidental deletion of recipes.

### 10. Code Comments
- The code is thoroughly commented to explain the functionality of each section.

## Evaluation Criteria and Fulfillment
| **Criteria**          | **Fulfillment**                                                                 |
|------------------------|---------------------------------------------------------------------------------|
| **Project Plan**       | Fully explained in the Word file with visuals included.                         |
| **Home Page**          | Splash page designed with a navigation menu and a professional layout.          |
| **Routing/Controllers**| Full CRUD operations implemented for recipe management.                         |
| **CSS**                | Custom CSS and Bootstrap used for complete, professional styling.               |
| **Code Commenting**    | Code includes detailed comments for easy understanding.                        |
| **Version Control**    | Project is hosted on GitHub with a public repository, README file, and commits. |

## How to Run the Application
### Prerequisites
- **Node.js** installed on your system.
- A **MongoDB Atlas** account for database connection.

## My repository link 
https://github.com/Zainab1027/Assignment_3

Feel free to contact me if you have any questions @zainab.syed1@ontariotechu.net
