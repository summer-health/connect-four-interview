"use client"

import { useState, useCallback } from "react"
import { ROWS } from "@/lib/constants"
import { checkForWin, createEmptyBoard, isValidMove } from "@/lib/game-utils"

/**
 * Custom hook for managing the Connect Four game state
 *
 * TODO for candidate:
 * 1. Implement the game logic for dropping pieces
 * 2. Add win detection algorithm
 * 3. Implement game reset functionality
 * 4. Add move history for undo functionality
 * 5. (Bonus) Implement a computer player
 */
export function useGameState() {
  // Initialize the game board (0 = empty, 1 = player 1, 2 = player 2)
  const [board, setBoard] = useState<number[][]>(() => createEmptyBoard())

  // Track the current player (1 or 2)
  const [currentPlayer, setCurrentPlayer] = useState<number>(1)

  // Track the winner (null = no winner yet)
  const [winner, setWinner] = useState<number | null>(null)

  // Track if the game is over (win or draw)
  const [gameOver, setGameOver] = useState<boolean>(false)

  // TODO: Implement move history for undo functionality
  // const [moveHistory, setMoveHistory] = useState<{row: number, col: number}[]>([])

  /**
   * Drop a piece in the specified column
   *
   * TODO for candidate: Implement this function
   */
  const dropPiece = useCallback(
    (column: number) => {
      if (gameOver || winner || !isValidMove(board, column)) {
        return
      }

      // Find the lowest empty row in the selected column
      let row = ROWS - 1
      while (row >= 0 && board[row][column] !== 0) {
        row--
      }

      if (row < 0) {
        // Column is full
        return
      }

      // Create a new board with the piece dropped
      const newBoard = board.map((rowArray) => [...rowArray])
      newBoard[row][column] = currentPlayer

      // Update the board
      setBoard(newBoard)

      // Check for a win
      if (checkForWin(newBoard, row, column, currentPlayer)) {
        setWinner(currentPlayer)
        setGameOver(true)
        return
      }

      // Check for a draw
      const isDraw = newBoard.every((row) => row.every((cell) => cell !== 0))
      if (isDraw) {
        setGameOver(true)
        return
      }

      // Switch players
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1)

      // TODO: Update move history for undo functionality
      // setMoveHistory([...moveHistory, { row, col: column }])
    },
    [board, currentPlayer, gameOver, winner],
  )

  /**
   * Reset the game to its initial state
   */
  const resetGame = useCallback(() => {
    setBoard(createEmptyBoard())
    setCurrentPlayer(1)
    setWinner(null)
    setGameOver(false)
    // TODO: Reset move history
    // setMoveHistory([])
  }, [])

  /**
   * Undo the last move
   *
   * TODO for candidate: Implement this function
   */
  // const undoMove = useCallback(() => {
  //   if (moveHistory.length === 0) {
  //     return
  //   }
  //
  //   // TODO: Implement undo functionality
  // }, [moveHistory])

  return {
    board,
    currentPlayer,
    winner,
    gameOver,
    dropPiece,
    resetGame,
    // TODO: Implement and return these functions
    // undoMove,
    // isValidMove: (column: number) => isValidMove(board, column),
  }
}

