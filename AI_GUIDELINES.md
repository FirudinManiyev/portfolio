# AI Guidelines

## General Rules

You are an experienced Senior Frontend Engineer.

Your goal is to build a premium personal portfolio website.

Always prefer maintainability over clever code.

Generate production-ready code.

Never generate placeholder code unless explicitly requested.

---

# Tech Stack

React 19

TypeScript

Vite

Tailwind CSS v4

Framer Motion

React Router DOM

Lucide React

Swiper

EmailJS

React Hot Toast

React Intersection Observer

@react-three/fiber (3D)

@react-three/drei (3D)

Three.js (3D)

---

# UI Style

The design should look similar to modern developer portfolios.

Keywords:

Minimal

Elegant

Glassmorphism

Dark Theme

Soft Shadows

Rounded Corners

Floating Elements

Micro Interactions

Smooth Animations

Modern Typography

Large Hero Section

Beautiful Cards

Premium Feel

3D Elements

Avoid generic templates.

Each section should have its own identity.

---

# Color Palette

Background

#09090B

Surface

#18181B

Text

#F4F4F5

Muted

#A1A1AA

Accent (Yellow)

#F59E0B

Success

#22C55E

Danger

#EF4444

---

# Typography

Use modern typography.

Large headings.

Comfortable spacing.

Readable line height.

Consistent font weights.

---

# Responsive Design

Mobile First.

Support

1920px

1536px

1280px

1024px

768px

640px

480px

360px

Everything must work perfectly on mobile.

Never allow horizontal scrolling.

Cards should stack correctly.

Navbar should become mobile-friendly.

---

# Sections

Hero

About

Skills

Projects

Certificates

Education

Contact

Footer

---

# Hero Section

Include

Name

Role

Short description

3D Lanyard component

CTA buttons

Social icons

Typing animation

Smooth entrance animation

---

# About

Biography

Highlights

Quick Facts

Download CV

Contact section

---

# Skills

Animated progress

Categorized skills

Frontend

Backend

Database

Tools

Languages

---

# Projects

Every project card should include

Image

Title

Description

Tech Stack

GitHub Button

Hover Animation

---

# Certificates

Responsive grid.

Image preview with zoom overlay.

Modal.

Issue date.

Issuer.

---

# Education

Timeline layout.

Institution

Major

Degree

Date

Image

---

# Contact

EmailJS

Validation

Toast notification

Loading state

Success state

Error state

Social links

---

# Footer

Social links

Copyright

Back to Top button

---

# Animations

Use Framer Motion.

Animate

Fade

Slide

Scale

Stagger

Hover

Scroll Reveal

Keep animations smooth.

Duration between

0.4s - 0.8s

Avoid excessive animation.

---

# Performance

Lazy load pages.

Optimize images.

Split large components.

Avoid unnecessary renders.

Use memoization only when justified.

---

# Accessibility

Semantic HTML.

ARIA labels when needed.

Keyboard navigation.

Alt text for images.

Visible focus states.

---

# Code Style

Always use

Functional Components

Custom Hooks

Reusable Components

TypeScript Interfaces

Strict Types

Meaningful Names

---

# Imports

Group imports

React

Third-party

Components

Hooks

Services

Utils

Styles

---

# Error Handling

Always handle

Loading

Empty

Success

Failure

states.

---

# File Organization

One component per file.

Keep folders organized.

Avoid deeply nested folders.

---

# Preferred Component Order

Imports

Types

Constants

Hooks

Component

Helpers

Export

---

# AI Behavior

When generating code:

- Write complete, production-ready implementations.
- Avoid placeholder text unless explicitly requested.
- Prioritize clean architecture and scalability.
- Reuse existing components instead of duplicating logic.
- Keep files modular and maintainable.
- Ensure every feature is fully responsive across devices.
- Favor accessibility and performance alongside visual quality.
- Use modern React and TypeScript best practices.
- Build polished, premium UI with subtle, meaningful animations.
- Follow the data-driven approach using src/data files.