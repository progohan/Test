# Project: Eduardo Fernández Ortiz Portfolio

## Project Overview

This project is a responsive single-page portfolio for Project Director Eduardo Fernández Ortiz. It is built using React and Vite, creating a modern and fast web application. The project follows a component-based architecture, with different sections of the portfolio like "Hero," "Expertise," "Experience," etc., encapsulated in their own components.

A key feature of this project is the separation of data from the UI. All the textual content, including personal information, experience, and skills, is stored in a structured JavaScript file at `src/data/resumeData.js`. This makes the content easy to update and manage without altering the application's code.

## Building and Running

### Prerequisites

- Node.js and npm installed.

### Installation

To install the project dependencies, run the following command in the project's root directory:

```bash
npm install
```

### Running the Development Server

To start the local development server, use the following command. This will open the portfolio in your default web browser and automatically reload the page when you make changes to the code.

```bash
npm run dev
```

### Building for Production

To build a production-ready version of the portfolio, run:

```bash
npm run build
```

This command will generate a `dist` folder containing the optimized and minified files for deployment.

### Previewing the Production Build

To preview the production build locally, use the following command after running the build script:

```bash
npm run preview
```

## Development Conventions

### Component-Based Architecture

The project is structured using React components, located in the `src/components` directory. Each major section of the portfolio is its own component (e.g., `Header.jsx`, `Experience.jsx`).

### Styling

The main stylesheet is located at `src/styles/main.css`. The project does not seem to use a specific CSS framework, so styling is likely done with plain CSS.

### Data Management

As mentioned earlier, all the portfolio's content is managed in `src/data/resumeData.js`. When updating the portfolio's information, this is the primary file to modify.
