# Terminal Portfolio

A modern, interactive terminal-style portfolio website built with Next.js. Features a fully functional Linux-like terminal interface with file system navigation, custom commands, and a sleek glassmorphism design.

![Terminal Portfolio Preview](public/pcb.jpg)

## Features

- **Interactive Terminal Interface** - Fully functional command-line interface
- **File System Navigation** - Navigate through directories with `cd`, `ls`, and `cat` commands
- **Modern Design** - Glassmorphism effects with blurred PCB background
- **Fira Code Font** - Professional monospace font from Google Fonts
- **Responsive** - Works on all screen sizes
- **Fast** - Built with Next.js 16 and React
- **Type-Safe** - Written in TypeScript
- **Smooth Animations** - Fade-in and slide-up animations for commands

## Available Commands

- `ls` - List directory contents
- `cd <directory>` - Change directory (supports `..`, `~`, and nested paths)
- `cat <file>` - Display file contents
- `pwd` - Print working directory
- `clear` - Clear terminal screen
- `linkedin` - Open LinkedIn profile in new tab
- `help` - Show all available commands

## Tech Stack

- **Framework**: Next.js 16 (with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Fira Code (Google Fonts)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/terminal-portfolio.git
cd terminal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit `/components/terminal/FileSystem.ts` to customize:

1. **About Section** (`about.txt`):
   - Update with your bio and background

2. **Experience** (`experience.txt`):
   - Add your work experience
   - Include job titles, companies, dates, and descriptions

3. **Education** (`education.txt`):
   - List your degrees and institutions
   - Include relevant coursework and achievements

4. **Projects** (`projects/` directory):
   - Add your projects as `.txt` files
   - Include descriptions, tech stacks, and links

### Change LinkedIn URL

Update `/components/terminal/useCommandHandler.ts`:
```typescript
case "linkedin": {
  window.open("https://www.linkedin.com/in/your-profile/", "_blank");
  // ...
}
```

### Customize Colors

The design uses a neutral blue color scheme. To change colors, update:
- `/app/globals.css` - Scrollbar colors
- `/components/terminal/Terminal.tsx` - Border and shadow colors
- `/components/terminal/WelcomeBanner.tsx` - Banner text colors
- `/components/terminal/useCommandHandler.ts` - Command output colors

### Replace Background Image

Replace `/public/pcb.jpg` with your own background image. Update the reference in `/app/page.tsx` if you change the filename.

### Modify Banner

Update the ASCII art in `/components/terminal/WelcomeBanner.tsx`. You can generate ASCII art at:
- [patorjk.com/software/taag](https://patorjk.com/software/taag/)
- Choose a font style and paste your text

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Home page with background
│   └── terminal.tsx          # Terminal export
├── components/
│   └── terminal/
│       ├── FileSystem.ts     # File system data structure
│       ├── Terminal.tsx      # Main terminal component
│       ├── TerminalInput.tsx # Command input component
│       ├── TerminalOutput.tsx# Command output component
│       ├── WelcomeBanner.tsx # ASCII art banner
│       ├── useCommandHandler.ts  # Command logic
│       └── useFileSystem.ts  # File navigation logic
├── public/
│   └── pcb.jpg              # Background image
└── package.json             # Dependencies
```

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Hyprland and LazyVim aesthetics
- Built as a unique way to showcase developer portfolios
- Created by [Max Hale](https://www.linkedin.com/in/max-hale/)

## Support

If you found this helpful, consider:
- Starring the repository
- Reporting bugs
- Suggesting improvements

---

**Made with Next.js and TypeScript**
