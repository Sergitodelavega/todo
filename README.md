# A Todo App from Scratch with React.js

A modern, responsive Todo application built with Next.js, React, and Tailwind CSS. This application allows you to manage your daily tasks with features like adding, editing, deleting, and marking todos as complete.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit todo titles inline
- ✅ Delete todos
- ✅ Progress tracking (completed vs total)
- ✅ Data persistence using localStorage
- ✅ Responsive design for mobile and desktop
- ✅ Clean, intuitive UI with Tailwind CSS

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 14+ (App Router)
- **Language:** TypeScript / JavaScript (JSX)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** SVG icons (custom)
- **State Management:** React useState, useEffect

## Project Structure

```
todo/
├── app/
│   ├── page.tsx          # Main page with todo state management
│   ├── layout.tsx        # Root layout
│   └── styles.css        # Global styles
├── src/
│   └── components/
│       ├── Header.jsx    # App header with logo
│       ├── Form.jsx      # Todo input form
│       ├── TodoList.jsx  # Todo list with items
│       └── TodoHero.jsx  # Progress stats display
├── public/               # Static assets
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Usage

### Adding a Todo
- Type your task in the input field
- Press Enter or click the add button to create a new todo

### Completing a Todo
- Click the circle icon next to a todo to mark it as complete/incomplete
- Completed todos show a green checkmark and strikethrough text

### Editing a Todo
- Click the edit icon (pencil) to enter inline edit mode
- Modify the text and press Enter or click outside to save
- Changes are automatically saved to localStorage

### Deleting a Todo
- Click the delete icon (trash) to remove a todo
- The todo will be permanently deleted

### Data Persistence
- All todos are saved to your browser's localStorage
- Your tasks will remain after refreshing the page

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Tailwind CSS documentation
- [React Documentation](https://react.dev) - React documentation

## Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
