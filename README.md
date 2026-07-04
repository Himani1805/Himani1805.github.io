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
