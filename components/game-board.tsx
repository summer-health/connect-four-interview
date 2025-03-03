"use client"
import { Cell } from "@/components/cell"
import { COLUMNS, ROWS } from "@/lib/constants"

interface GameBoardProps {
  board: number[][]
  currentPlayer: number
  onColumnClick: (column: number) => void
  gameOver: boolean
}

/**
 * Game Board Component
 *
 * Renders the Connect Four game board with interactive columns.
 *
 * TODO for candidate:
 * 1. Implement the column hover effect to show where a piece will drop
 * 2. Add animations for dropping pieces
 * 3. Make the board responsive for different screen sizes
 * 4. Implement accessibility features
 */
export function GameBoard({ board, currentPlayer, onColumnClick, gameOver }: GameBoardProps) {
  // Function to handle column click
  const handleColumnClick = (column: number) => {
    if (!gameOver) {
      onColumnClick(column)
    }
  }

  return (
    <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: COLUMNS }).map((_, colIndex) => (
          <div
            key={colIndex}
            className="cursor-pointer hover:bg-blue-500 rounded-t-lg transition-colors"
            onClick={() => handleColumnClick(colIndex)}
          >
            {Array.from({ length: ROWS }).map((_, rowIndex) => (
              <Cell key={`${rowIndex}-${colIndex}`} value={board[rowIndex][colIndex]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

