import { useState } from 'react'

export default function SnakeGame() {
    function handleStart() {
        alert('Game not ready yet')
    }
    return (
        <div className="snake-game">
            <div className="game-board">
                <button className="start-button" onClick={handleStart}>
                Start Game
                </button>
            </div>
        </div>
    );
}