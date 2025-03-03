"use client"
import { cn } from "@/lib/utils"

interface CellProps {
  value: number
}

/**
 * Cell Component
 *
 * Renders a single cell in the Connect Four game board.
 *
 * TODO for candidate:
 * 1. Implement animations for piece dropping
 * 2. Add visual feedback for winning pieces
 * 3. Improve the styling of the game pieces
 */
export function Cell({ value }: CellProps) {
  return (
    <div className="w-12 h-12 bg-blue-600 p-2 relative">
      <div
        className={cn(
          "w-full h-full rounded-full",
          value === 0 ? "bg-slate-200" : value === 1 ? "bg-red-500" : value === 2 ? "bg-yellow-400" : "",
        )}
      >
        {/* TODO: Add animations and effects here */}
      </div>
    </div>
  )
}

