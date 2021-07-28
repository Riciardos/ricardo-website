import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function TopGrid() {
  return (
    <div className="TopGrid">
      <header className="TopGrid">
        <p>
            Ricardo Schuller (Bottemless Creations)
        </p>
      </header>
      <WelcomeMessage/>
    </div>
  );
}

export default TopGrid;