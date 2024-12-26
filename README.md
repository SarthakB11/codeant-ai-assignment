# CodeAnt AI Assignment
The application is deployed using Vercel. You can access the live deployment at:

Dashboard Link: <a href="https://codeant-ai-assignments.vercel.app" style="font-size: 14px;">Dashboard</a> <br> Sign In Link: <a href="https://codeant-ai-assignments.vercel.app/sign-in" style="font-size: 14px;">Sign In</a>
  
![image1](https://github.com/user-attachments/assets/e7910e1f-6bb1-43d0-adbe-0dc6594d7d5e)
![image2](https://github.com/user-attachments/assets/51b3c323-9cc6-4698-9dc9-c3b9e90ab025)
![image3](https://github.com/user-attachments/assets/e4e5d052-3e10-423a-939d-81a3afdd8f3f)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The CodeAnt AI Assignment project is a web application designed to showcase the capabilities of CodeAnt AI in detecting and auto-fixing code quality issues, bugs, and security vulnerabilities. This project includes a dashboard for visualizing repositories and their statistics, as well as a sign-in page for user authentication.

## Features

- **Dashboard**: Visualize repository statistics and metrics.
- **Sign-In**: Authenticate users through various providers like GitHub, Bitbucket, Azure DevOps, and GitLab.
- **Repository Management**: List, search, and filter repositories based on various criteria.
- **Responsive Design**: Mobile and desktop-friendly layouts.

## Technology Stack

- **Frontend**:
  - **Next.js**: A React framework for building server-side rendered (SSR) and static web applications.
  - **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
  - **React**: A JavaScript library for building user interfaces.
  - **TypeScript**: A statically typed superset of JavaScript that adds optional typing and class-based object-oriented programming to the language.

- **State Management**:
  - **React Context API**: For managing global state in the application.

- **Authentication**:
  - **NextAuth.js**: A complete open-source authentication solution for Next.js applications.

- **UI Components**:
  - **Radix UI**: A low-level UI component library with unstyled, accessible components.
  - **Lucide React**: A set of simple, consistent, and accessible icons for React applications.

- **Utilities**:
  - **clsx**: A utility for constructing `className` strings conditionally.
  - **tailwind-merge**: A utility for merging Tailwind CSS classes.

- **Code Quality**:
  - **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
  - **Prettier**: An opinionated code formatter.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SarthakB11/codeant-ai-assignment.git
   cd codeant-ai-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the necessary environment variables for authentication and other configurations.

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

The application is deployed using Vercel. You can access the live deployment at:
- [Dashboard](https://codeant-ai-assignments.vercel.app)
- [Sign In](https://codeant-ai-assignments.vercel.app/sign-in)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
