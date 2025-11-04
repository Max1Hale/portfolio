export type FileSystemNode = {
  type: "file" | "directory";
  content?: string;
  children?: { [key: string]: FileSystemNode };
};

export type FileSystem = {
  [key: string]: FileSystemNode;
};

// File system structure
export const fileSystem: FileSystem = {
  "about.txt": {
    type: "file",
    content: `I am an Engineering Co-Founder and full-stack developer who thrives on building systems that work and solving hard problems through code. I have been coding for over 10 years and still get that spark every time an idea turns into something real, fast, and scalable.

I hold a master's degree in Physics, where I developed simulations and remote-controlled laser experiments to automate data collection and validate experimental results. Working with Monte Carlo simulations for nuclear decay taught me how to design systems that connect theory with real-world performance. That same curiosity and pragmatism now drives the way I build products and teams.

As Engineering Co-Founder of Meritt, I lead all engineering and product development. I built the entire SaaS platform from scratch, evolving it from Angular and Spring Boot into a modern Next.js and React stack on Vercel and AWS. I designed an AI-powered vector search using pgVector and LLM explanations, implemented end-to-end monitoring, and built a testing framework to keep everything reliable at scale.

Before Meritt, I joined Cirqul as a Senior Software Engineer, where I built a creative collaboration platform for digital creators and a large-file transfer product called Sendit. I architected the stack with Next.js, PostgreSQL, and FFmpeg and built a media pipeline capable of handling 100 GB uploads.

Earlier, I tutored Mathematics and Physics through MyTutor, delivering over 600 hours of one-on-one lessons. All of my A-Level students achieved at least an A grade, and many went on to study STEM at top universities.

I care deeply about code quality and reliability, but I also embrace the chaos that comes with startups. I am not afraid to get scrappy, learn fast, and move faster. I am also a massive Neovim nerd who believes great engineering sits perfectly at the intersection of structure, curiosity, and creativity.

At the end of the day, I just love coding, learning, and building awesome products with great people.`,
  },
  "experience.txt": {
    type: "file",
    content: `WORK EXPERIENCE
===============

meritt - Engineering Co-Founder
Nov 2024 - Present | United Kingdom (Remote) | Full-time

Built Meritt from concept to production, a modern recruiting SaaS platform connecting companies with top sales talent through intelligent AI‑powered search and collaboration. Defined and executed the entire technical strategy, architecture, and delivery lifecycle.

- Owned full‑stack architecture and production reliability, operating as both engineering lead and on‑call engineer responsible for uptime, incident response, and performance monitoring across all environments.

- Scaled the platform from 8,000 to 20,000+ users across 20 recruiting teams while maintaining 99.9% uptime, leading incident‑free releases over consecutive quarters.

- Designed and implemented a Clean, Hexagonal architecture, enforcing clear boundaries between domain, application, and infrastructure layers to enable rapid iteration and robust testing.

- Re‑architected the legacy Angular/Spring Boot stack into a Next.js + React system running on Vercel + AWS, improving performance and cutting infra costs by 80%.

- Delivered an AI‑driven vector search engine using pgVector and LLM‑based ranking, indexing over 1M+ LinkedIn profiles with measurable gains in candidate match accuracy.

- Built secure authentication services supporting password, LinkedIn, and Google OAuth.

- Automated deployment pipelines via CI/CD, reducing release times from 20 min to 5 min and establishing blue‑green deployment strategies with rollback support.

- Monitored and optimised production systems using Sentry, BetterStack, and PostHog, translating error data into actionable engineering insights during weekly reliability reviews.

- Partnered in investor demos and fundraising pitches to 25+ angels, highlighting quantifiable recruiter time savings of 25 hours per user per month through AI screening automation.

Tech: Next.js, React, TypeScript, Node.js, PostgreSQL, pgVector, Neon, AWS (S3, ECS, EC2, CloudFront), Vercel, Jest, Playwright, Docker, Sentry, BetterStack, PostHog

---

Cirqul - Senior Software Engineer 
August 2024 - February 2025 | United Kingdom (Remote) | Full-time

Joined as the sole engineer to lead technical strategy and build Cirqul’s first working prototypes - a creative collaboration platform for artists and digital creators to share and showcase their work.

- Delivered production‑ready prototypes that powered fundraising and validated the product vision.

- Architected the tech stack and built a distributed video encoding and compression pipeline capable of processing up to 100 GB uploads.

- Developed Sendit by Cirqul, a secure high‑speed file transfer platform built using Next.js, Kafka, FastAPI, and S3 (Backblaze).

- Utilised Clean Architecture patterns to enforce separation between business logic and services, reducing coupling and improving maintainability as the system evolved.

Tech: Next.js, PostgreSQL, FFmpeg, TypeScript, Kafka, FastAPI, S3 (Backblaze)

---

MyTutor - Part-Time Tutor
Oct 2021 - Feb 2025

Tutored school and college students across GCSE, A-Level, and University levels, focusing on developing strong conceptual understanding and problem-solving skills through tailored lessons and exam-focused strategies.

• Delivered over 600 hours of tutoring, primarily in A-Level Mathematics and Physics.

• Worked with students over 6 months to 1 year on average, providing consistent support and measurable progress.

• All A-Level students achieved at least an A grade, with several progressing to study STEM subjects at leading universities.

• Created personalized learning plans and targeted revision materials to strengthen analytical thinking and exam technique.

• Experienced in online tutoring, using interactive tools to make complex concepts intuitive and engaging.
`,
  },
  "education.txt": {
    type: "file",
    content: `EDUCATION
=========

University of St Andrews
MPhys, Physics
Sep 2021 - Jun 2025

Completed an integrated master's degree in Physics with a focus on quantum optics, quantum field theory, general relativity, and computational physics. Combined deep theoretical study with hands-on experimentation and software development.

• Master's thesis: "Beam Shaping for Information Transfer", I designed and ran experiments studying vortex and vector laser beams for high-efficiency optical communication.

• Built custom simulations in Python to model beam dynamics and compare optical performance across configurations.

• Explored how advanced beam shaping could improve data transfer speed and resilience in noisy environments.

• Balanced completing my dissertation with co-founding and leading engineering at a startup, running production systems while conducting experimental research.

• Developed strong problem-solving, programming, and project management skills rooted in scientific rigour.`,
  },
  projects: {
    type: "directory",
    children: {
      "hunori.txt": {
        type: "file",
        content: `Project: Hunori
================
22/8/24

https://hunori.com

The Idea
My girlfriend is about to start her PhD in History and over the summer she told me how she wanted to start a blog to document her research and share her thoughts. She also wanted to have a place where she could share her social media links and other projects she's working on. She just wanted something simple and easy to use.

The Tech
I decided to build Hunori using Next.js and MDX. I've been using Next.js for a while now instead of plain React and I love it. It's so east to use with server side rendering and the file based routing is amazing. I used Prisma and PostgreSQL for the database, and Vercel for hosting. I also used Tailwind CSS for styling.

I used a few really great libraries as well, shout out to shadcn/ui, lucide-react and novel.sh.

The Product
Hunori is a simple blog and LinkInBio builder. You can create a blog post, add your social media links and other projects you're working on. You can also add a profile picture and a cover image, get a custom subdomain or use your own domain. It's super easy to use and you can get started in minutes. I'm really proud of how it turned out and I can't wait to see what people build with it.`,
      },
      "meritt.txt": {
        type: "file",
        content: `Project: meritt
================

Company: meritt
Role: Engineering Co-Founder
Status: Live Production

Description:
A platform that helps companies identify and hire top sales talent faster through intelligent search and workflow automation.

My Contributions:
• Full technical stack ownership from conception to production
• Migrated legacy system from Angular + Spring Boot to modern Next.js + React
• Designed and implemented AI-powered vector search using pgVector and LLMs
• Built LinkedIn profile search with intelligent explanations
• Implemented email and SMS delivery systems
• Created comprehensive testing framework (unit, integration, E2E)
• Set up end-to-end monitoring and observability
• Architected scalable infrastructure on Vercel and AWS

Tech Stack:
Next.js, React, TypeScript, PostgreSQL, pgVector, AWS S3, Vercel, Jest, Playwright

Impact:
Enabled companies to find qualified sales candidates faster with AI-powered matching and explanations.`,
      },
      "readme.txt": {
        type: "file",
        content: `Projects Directory
=================

This directory contains information about my key projects.

Available Projects:
• meritt.txt - My current startup and main project
• hunori.txt - Previous project work

Use 'cat <filename>' to read more about each project.`,
      },
    },
  },
};
