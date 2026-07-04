# Himani Sharma Portfolio

A modern, responsive personal portfolio for showcasing my full-stack development work, technical skills, achievements, professional experience, education, and contact details. The site is built with React, Vite, Tailwind CSS, Framer Motion, Lucide icons, and EmailJS.

## Live URL

[View Portfolio](https://himanisharma18.vercel.app/)

## About

I am Himani Sharma, a Full Stack Developer focused on building accessible, responsive, and performance-friendly web applications. This portfolio brings together my work across frontend, backend, dashboards, e-commerce clones, healthcare apps, admin tools, and data-driven projects.

## Features

- Fully responsive layout for mobile, tablet, laptop, and desktop screens
- Hero section with profile card, social links, and call-to-action buttons
- About section with profile summary and development focus areas
- Skills section grouped by frontend, backend, database, and tools
- Certifications and achievements section
- Work experience and education timeline
- Featured project slider with responsive controls
- Full project grid for browsing all projects
- Contact section with email, phone, location, GitHub, and LinkedIn links
- Contact form powered by EmailJS with a direct email fallback
- Polished dark UI with gradients, glass-style cards, and smooth animations

## Portfolio Sections

- Home
- About
- Skills
- Achievements
- Experience
- Education
- Projects
- Contact

## Featured Projects

Some of the projects included in this portfolio:

- Prime Health
- PowerX CRM
- Nomichi Trip Desk
- WaiverPro Compliance Agent
- Avidus Task Manager
- Spur Chatbot
- Expense Tracker
- GitHub User Explorer
- Invoice Extraction AI
- MediaNV Candidate Management
- MediaNV Database Interface
- India Data Hub
- Library Management
- Health Connect
- Weather App
- E-commerce and clone projects

## Project Skills & Highlights

### Nomichi Trip Desk

Trip enquiry and operations tool for Nomichi. Travellers can browse live open trips, view destination, dates, and GST-inclusive pricing, then submit an enquiry with validation and a clear success state. The admin side includes secure login, lead management, search, filtering, lead ownership, pipeline tracking, notes, touchpoints, dashboard overview, and trip create/edit/open/close controls.

Skills used: Next.js App Router, JavaScript, Supabase, PostgreSQL, Gemini API, Vercel, authentication, admin dashboards, public enquiry flows, AI-assisted WhatsApp draft generation.

### WaiverPro Compliance Agent

AI compliance audit tool that checks the live WaiverPro app against PDF guidelines. The backend reads guideline rules from PDF files, logs in to the live app, scrapes rendered UI text, captures screenshots, sends evidence to Gemini or OpenAI for comparison, and stores reports plus coverage records.

Skills used: React, Vite, Node.js, PDF parsing, Puppeteer scraping, Gemini/OpenAI comparison, MongoDB, Mongoose, report generation, screenshot evidence, compliance workflows.

### Avidus Task Manager

Full-stack RBAC task management app with Admin and User roles. Users can create, update, complete, and delete their own tasks. Admins can manage users, change account status, view all tasks, delete records, inspect activity logs, and review dashboard charts.

Skills used: React, React Router DOM, Axios, Tailwind CSS v4, Recharts, Node.js, Express.js, MongoDB, Mongoose, JWT, Bcryptjs, RBAC, activity tracking.

### Spur Chatbot

AI chatbot application with a React client and TypeScript Express backend. The client supports routed pages, API calls, and markdown-rendered chat responses. The backend uses Prisma for the data layer and Google Generative AI for chatbot replies.

Skills used: React 19, Vite, Tailwind CSS, Axios, React Router DOM, React Markdown, Express.js, TypeScript, Prisma, Google Generative AI, CORS, dotenv, Vercel.

### Expense Tracker App

Mobile-first personal finance app built to match a strict 375px mobile design. It supports transaction management, analytics, local data persistence, search, filtering, category grouping, and optimized state updates without heavy external state tools.

Skills used: React, Vite, plain CSS, CSS variables, Context API, useReducer, useMemo, localStorage, Recharts, mobile-first UI, performance optimization.

### Invoice Extraction AI

AI-powered invoice extraction app for images and PDFs. It supports file upload, multimodal invoice parsing, structured JSON extraction, validation, Supabase storage, analytics dashboards, format detection, and duplicate invoice checks.

Skills used: React, Tailwind CSS, FastAPI, Google Gemini, Supabase, PostgreSQL, file storage, Pydantic validation, analytics dashboards, duplicate detection.

### MediaNV Candidate Management System

Recruitment management system designed to replace spreadsheet-based hiring workflows with structured candidate records, cleaner data handling, and better process visibility.

Skills used: React, candidate tracking, data management, dashboard UI, workflow organization, responsive admin interfaces.

### MediaNV Database Management Interface

Web-based database management interface for simplifying PostgreSQL database creation and migration tasks without requiring direct command-line access.

Skills used: React, PostgreSQL, database administration UI, migration workflows, admin tooling, structured data operations.

### India Data Hub

Authenticated data dashboard with visualizations, filtering, and sorting for exploring India-focused data.

Skills used: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT authentication, dashboard visualizations, Vercel frontend deployment, Render backend deployment.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS
- ESLint

## Project Structure

```text
.
|-- public/
|   `-- images/
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Achievements.jsx
|   |   |-- Contact.jsx
|   |   |-- ContactForm.jsx
|   |   |-- Education.jsx
|   |   |-- Experience.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- Projects.jsx
|   |   `-- Skills.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Himani1805/Himani1805.github.io.git
cd Himani1805.github.io
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If EmailJS is not configured or the email provider connection expires, the form shows a direct email fallback.

## Deployment

This portfolio is deployed on Vercel:

[https://himanisharma18.vercel.app/](https://himanisharma18.vercel.app/)

To create a production build locally:

```bash
npm run build
```

The optimized output is generated in the `dist/` folder.

## Contact

- Email: [hinusharma18@gmail.com](mailto:hinusharma18@gmail.com)
- GitHub: [Himani1805](https://github.com/Himani1805)
- LinkedIn: [himani1805](https://www.linkedin.com/in/himani1805)

## Author

Designed and developed by Himani Sharma.
