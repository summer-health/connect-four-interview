"use client"
import { Button } from "@/components/ui/button"
import { GameBoard } from "@/components/game-board"
import { GameStatus } from "@/components/game-status"
import { useGameState } from "@/hooks/use-game-state"

/**
 * Connect Four Game Component
 *
 * This is the main component for the Connect Four game.
 *
 * TODO for candidate:
 * 1. Implement the game logic in the useGameState hook
 * 2. Add win detection algorithm
 * 3. Implement the UI for the game board and pieces
 * 4. Add animations for dropping pieces
 * 5. Implement game reset functionality
 * 6. Add player turn indication
 * 7. (Bonus) Add undo functionality
 * 8. (Bonus) Add a computer player with basic AI
 */
export default function ConnectFour() {
  const {
    board,
    currentPlayer,
    winner,
    gameOver,
    dropPiece,
    resetGame,
    // TODO: Implement these functions in the useGameState hook
    // undoMove,
    // isValidMove,
  } = useGameState()

  return (
    <div className="flex flex-col items-center gap-6">
      <GameStatus currentPlayer={currentPlayer} winner={winner} gameOver={gameOver} />

      <GameBoard board={board} currentPlayer={currentPlayer} onColumnClick={dropPiece} gameOver={gameOver} />

      <div className="flex gap-4">
        <Button onClick={resetGame} variant="outline">
          New Game
        </Button>

        {/* TODO: Implement undo functionality */}
        {/* <Button 
          onClick={undoMove} 
          disabled={!canUndo}
          variant="ghost"
        >
          Undo
        </Button> */}
      </div>
    </div>
  )
}

