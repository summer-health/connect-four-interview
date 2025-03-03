"use client"

import { cn } from "@/lib/utils"

interface GameStatusProps {
  currentPlayer: number
  winner: number | null
  gameOver: boolean
}

/**
 * Game Status Component
 *
 * Displays the current game status, including whose turn it is and the winner.
 *
 * TODO for candidate:
 * 1. Improve the visual design of the status display
 * 2. Add animations for status changes
 * 3. Implement a more engaging way to show the winner
 */
export function GameStatus({ currentPlayer, winner, gameOver }: GameStatusProps) {
  return (
    <div className="text-center p-4 rounded-lg bg-slate-100 w-full max-w-md">
      {winner ? (
        <div className="text-2xl font-bold">Player {winner} wins!</div>
      ) : gameOver ? (
        <div className="text-2xl font-bold">Game Over - It's a draw!</div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <span className="text-xl">Player {currentPlayer}'s turn</span>
          <div className={cn("w-6 h-6 rounded-full", currentPlayer === 1 ? "bg-red-500" : "bg-yellow-400")}></div>
        </div>
      )}
    </div>
  )
}

