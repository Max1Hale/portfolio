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
    content: `I am an Engineering Co‑Founder and full‑stack developer who loves building things that work and solving tough problems through code.

I have been coding for 10+ years and still get excited about turning ideas into scalable solutions.

I have a master's degree in physics, where I developed simulations and remote‑controlled laser experiments that automated data collection and validated real‑world results through simulation. That experience taught me how to design systems that bridge the gap between theory and real‑world performance. Whether it was writing Fortran simulations for nuclear decay using Monte Carlo methods or designing AI search algorithms and data pipelines, I have always focused on making systems both powerful and practical.

I am the Engineering Co‑Founder of Meritt, a startup that helps companies identify and hire top sales talent faster through intelligent search and workflow automation. I lead all engineering efforts and have built the platform from the ground up, migrating from Angular and Spring Boot to a modern Next.js and React stack on Vercel and AWS. I designed our AI vector search system using pgVector and LLM explanations, implemented end‑to‑end monitoring, and created a full testing framework for stability and reliability.

I care deeply about building robust systems, but I do not shy away from getting scrappy. I get curious about each challenge, dig into the details, and figure things out along the way.

I am also a huge Neovim nerd who loves a clean setup, and I see great engineering as the perfect mix of structure, curiosity, and creativity.

At the end of the day, I love coding, learning, and building awesome products with great people.`,
  },
  "experience.txt": {
    type: "file",
    content: `WORK EXPERIENCE
===============

meritt - Engineering Co-Founder
Nov 2024 - Present | United Kingdom (Remote) | Full-time

Owner of the entire technical stack. Built and migrated the platform from Angular + Spring Boot to a modern Next.js and React architecture. Implemented all systems using Next.js, PostgreSQL, pgVector, and S3, enabling vector search for LinkedIn profiles with LLM-driven explanations. Developed email and SMS delivery systems, end-to-end monitoring, and created a comprehensive testing framework covering unit, integration, and E2E tests.

• Collaborated closely with co-founders on product direction and platform development

Tech Stack: Next.js, React, Angular, Spring Boot, TypeScript, PostgreSQL, pgVector, AWS S3, Jest, Playwright

---

MyTutor - Part-Time Tutor
Oct 2021 - Feb 2025

Tutored school and college students in Mathematics, Further Mathematics, and Physics across GCSE, A‑Level, and University levels. Focused on building strong conceptual understanding and problem‑solving skills through clear explanations, tailored practice, and exam‑focused strategies.

All of my A‑Level students achieved at least an A grade, with several going on to study STEM subjects at top universities. Experienced in online tutoring, setting personalized lesson plans, and helping students gain confidence in applying mathematical and physical principles to challenging problems.
`,
  },
  "education.txt": {
    type: "file",
    content: `EDUCATION
=========

University of St Andrews
MPhys, Physics
Sep 2021 - Jun 2025

Completed an integrated master’s degree in physics with a focus on quantum optics, quantum field theory, general relativity, and computational physics. My work combined strong theoretical understanding with practical experimentation and programming.

For my master’s thesis, “Beam Shaping for Information Transfer,” I designed and ran experiments investigating vortex and vector laser beams for optical communication compared to traditional beam profiles. This included both hands‑on lab experimentation and detailed computational simulations using python. The project explored how beam shaping could enhance data transfer efficiency and resilience.

Alongside my research, I co‑founded and led engineering for a startup, balancing the demands of running live production systems with completing my dissertation. This experience strengthened my ability to manage complexity, context‑switch quickly, and apply rigorous problem‑solving techniques from physics to real‑world engineering challenges.`,
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
