# Connect Four Interview Challenge

This repository contains a partially implemented Connect Four game built with Next.js and React. The challenge is to complete the implementation of the game by adding the missing functionality.

## Project Overview

This Connect Four game includes:
- A game board with 6 rows and 7 columns
- Two players taking turns
- Game state management with React hooks
- A clean UI built with React components and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd connect-four-interview
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the game.

## Challenge Tasks

The Connect Four game is partially implemented, and your task is to complete the following:

1. **Game Logic Implementation**:
   - Complete the `dropPiece` function in `useGameState` hook
   - Implement the win detection algorithm in `checkForWin`
   - Add logic to handle game draws

2. **Game Board UI**:
   - Implement the UI for the game board and pieces
   - Add visual indication for player turns
   - Create animations for dropping pieces

3. **Game Management**:
   - Implement game reset functionality
   - (Bonus) Add undo move functionality
   - (Bonus) Implement a simple computer player with basic AI

## Project Structure

- `/app`: Next.js app directory with main page
- `/components`: React components for the game UI
  - `connect-four.tsx`: Main game component
  - `game-board.tsx`: Board representation
  - `cell.tsx`: Individual board cell
  - `game-status.tsx`: Game status display
- `/hooks`: Custom React hooks
  - `use-game-state.ts`: Game state management logic
- `/lib`: Utility functions and constants
  - `constants.ts`: Game constants (board size, player identifiers)
  - `game-utils.ts`: Game logic utilities

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## Evaluation Criteria

Your solution will be evaluated based on:
- Code quality and organization
- Correctness of game logic implementation
- UI/UX design and responsiveness
- Bonus features implementation (if attempted)

## Submission Guidelines

1. Fork this repository
2. Implement your solution
3. Submit a pull request or follow the specific submission instructions provided by the interviewer

Good luck with your implementation!