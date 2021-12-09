import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { IPlayer } from './types';
import { Preloader } from './components/Preloader/Preloader';
import { Table } from './components/Table/Table';
import { Modal } from './components/Modal/Modal';

const App: React.FC = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [scoreSort, setScoreSort] = useState<boolean>(true);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | null>(null);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000');

    eventSource.onmessage = function (event) {
      const player = JSON.parse(event.data);

      setPlayers(prevPlayers => [...prevPlayers, player]);
    };
  }, []);

  const handleChangeScoreSort = () => {
    const reducePlayersScoreSort = [...players].sort((player1, player2) => (
      player2.score - player1.score
    ));
    const increasePlayersScoreSort = [...players].sort((player1, player2) => (
      player1.score - player2.score
    ));

    if (scoreSort) {
      return reducePlayersScoreSort;
    }

    return increasePlayersScoreSort;
  };

  const urlName = (name: string) => {
    const changeToUrlName = name.split(' ').join('%20');

    return `/player/${changeToUrlName}`;
  };

  return (
    <div className="App">
      <h1 className="App__title">
        Score board
      </h1>

      {players.length
        ? (
          <Table
            players={handleChangeScoreSort()}
            scoreSort={scoreSort}
            scoreButton={setScoreSort}
            setSelectedPlayer={setSelectedPlayer}
          />
        )
        : (
          <Preloader />
        )}

      {selectedPlayer && (
        <Routes>
          <Route
            path={urlName(selectedPlayer.name)}
            element={(
              <Modal selectedPlayer={selectedPlayer} />
            )}
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
