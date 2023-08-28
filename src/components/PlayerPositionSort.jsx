import React from 'react';

export default function PlayerPositionSort() {
    const a = ['All Players', 'FW', 'MF', 'DF', 'GK'];
    const handleClick = () => {
      
    }
    return (
      <ul className="flex gap-6 text-gray-400 text-2xl px-3 py-4 font-extrabold border">
        {a.map((element) => (
          <li key={element} className='hover:text-black' onClick={handleClick}>{element}</li>
        ))}
      </ul>
    );
}

