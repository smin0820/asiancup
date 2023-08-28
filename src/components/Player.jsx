import React from 'react';
import db from '../db/players.json';

export default function Player() {
    return (
      <>
        {db.player.map((player) => (
          <li key={player.id} className="flex items-center border hover:border-symbol px-5 py-3 relative cursor-pointer">
            <img
              className="w-auto h-24 rounded-full"
              src={player.imageURL}
              alt={`${player.koname} 사진`}
            />
            <div className="px-6">
              <p>{player.koname}</p>
              <p>{player.enname}</p>
              <div className="text-gray-400 mt-5 text-xs">
                <p>{player.birth}</p>
                <p>{player.heghitweight}</p>
                <p>{player.team}</p>
              </div>
            </div>
            <p
              className={`font-bold absolute top-3 right-6 ${
                player.position === "MF"
                  ? "text-mf"
                  : player.position === "FW"
                  ? "text-fw"
                  : player.position === "DF"
                  ? "text-df"
                  : "text-gk"
              }`}
            >
              {player.position}
            </p>
          </li>
        ))}
      </>
    );
}

