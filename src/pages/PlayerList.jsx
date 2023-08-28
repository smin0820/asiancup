import React from 'react';
import Player from '../components/Player';
import Title from '../components/ui/Title';
import PlayerPositionSort from '../components/PlayerPositionSort';

export default function PlayerList() {
    return (
      <>
        <Title title="선수 명단"/>
        <PlayerPositionSort />
        <ul className="grid grid-cols-1 md:grid-cols-4">
          <Player />
        </ul>
      </>
    );
}

