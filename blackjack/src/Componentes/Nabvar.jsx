import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Blackjack Game</h1>
            <ul>
                <li><a href="#game">Juego</a></li>
                <li><a href="#rules">Reglas</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
