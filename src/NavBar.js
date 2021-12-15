import React from 'react';
import DarkModeButton from './DarkModeButton';

export default function NavBar() {
  return (
    <nav>
      <div className='nav-center'>
        <h2>News Finder</h2>

        <div>
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
}
