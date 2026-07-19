# AGENTS.md

## Project Overview

This project is a personal portfolio website built with:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- Lucide React
- React Hot Toast
- Swiper
- EmailJS
- React Intersection Observer
- @react-three/fiber (3D)
- @react-three/drei (3D)
- Three.js (3D)

The purpose of this project is to showcase:

- Personal information
- About Me
- Skills
- Projects
- Certificates
- Education
- Contact
- Social Links
- Resume (CV)

The website should represent a modern software developer portfolio with premium UI/UX.

---

# Main Goal

Always prioritize

- Clean Code
- Reusable Components
- Accessibility
- Performance
- Responsive Design
- Smooth Animations

---

# Folder Structure

src/

assets/
components/
data/
hooks/
layouts/
pages/
routes/
services/
types/
utils/

Every new feature should respect this structure.

Never place business logic inside UI components.

---

# Components

Components should be:

- Small
- Reusable
- Typed
- Easy to understand

Avoid creating very large components.

If a component exceeds approximately 250 lines,
consider splitting it.

---

# Styling

Use Tailwind CSS only.

Avoid inline styles.

Avoid duplicated Tailwind classes.

Use clsx + tailwind-merge whenever necessary.

---

# Animations

Preferred animation library:

1. Framer Motion

Animations should be subtle.

Avoid excessive motion.

Use Intersection Observer for scroll animations.

---

# Routing

Use React Router.

Pages:

/

about

skills

projects

certificates

education

contact

404

---

# Data

Static data should live inside

src/data

Examples:

about.ts

skills.ts

projects.ts

certificates.ts

education.ts

contact.ts

---

# TypeScript

Never use

any

Always define interfaces or types.

Prefer strict typing.

---

# Icons

Use Lucide React.

Avoid mixing multiple icon libraries.

---

# Images

Optimize images.

Lazy load whenever possible.

Prefer WebP.

---

# Performance

Use lazy loading.

Avoid unnecessary re-renders.

Use React.memo only when necessary.

Use dynamic imports for large pages.

---

# Accessibility

Every image must include alt text.

Buttons should have proper labels.

Keyboard navigation should work correctly.

Maintain sufficient color contrast.

---

# Naming Convention

Components

PascalCase

Example

ProjectCard.tsx

Hooks

useSomething.ts

Utils

camelCase

Types

PascalCase

Interfaces begin with I only when necessary.

---

# Git

Commit messages

feat:

fix:

refactor:

style:

docs:

perf:

chore:

Example

feat: add animated hero section

---

# Code Quality

Always

- remove unused imports
- remove dead code
- avoid duplicated logic
- keep components modular
- write readable code

---

# Don't

Don't use inline CSS.

Don't use any.

Don't repeat code.

Don't hardcode repeated values.

Don't install unnecessary libraries.

Don't overcomplicate solutions.

---

# Expected Design

Modern

Minimal

Premium

Elegant

Interactive

Smooth

Responsive

Fast

Professional
