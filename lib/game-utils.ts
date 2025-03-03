import { ROWS, COLUMNS, EMPTY } from "@/lib/constants"

/**
 * Create an empty game board
 *
 * TODO for candidate: Implement this function
 */
export function createEmptyBoard(): number[][] {
  return Array.from({ length: ROWS }, () => Array.from({ length: COLUMNS }, () => EMPTY))
}

/**
 * Check if a move is valid
 *
 * TODO for candidate: Implement this function
 */
export function isValidMove(board: number[][], column: number): boolean {
  // Check if the column is within bounds
  if (column < 0 || column >= COLUMNS) {
    return false
  }

  // Check if the top cell in the column is empty
  return board[0][column] === EMPTY
}

/**
 * Check if the last move resulted in a win
 *
 * TODO for candidate: Implement this function to check for 4 in a row
 * horizontally, vertically, and diagonally
 */
export function checkForWin(board: number[][], row: number, column: number, player: number): boolean {
  // This is a placeholder implementation
  // The candidate should implement the full win detection algorithm
  return false
}

/**
 * Get the next available row in a column
 *
 * TODO for candidate: Implement this function
 */
export function getNextAvailableRow(board: number[][], column: number): number {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][column] === EMPTY) {
      return row
    }
  }
  return -1 // Column is full
}

