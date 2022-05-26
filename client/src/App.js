import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const DUMMY_PLAYER = [
    {
      id: 1,
      username: "mukhlishaka",
      email: "mukhlishaka@gmail.com",
      password: "123456",
      experience: 5000,
      lvl: 60,
    },
    {
      id: 2,
      username: "Novandi",
      email: "novandi@gmail.com",
      password: "123654",
      experience: 4000,
      lvl: 55,
    },
  ];

  const [playerData, setPlayerData] = useState(DUMMY_PLAYER);
  const [formPlayer, setFormPlayer] = useState(null);

  const addPlayer = (data) => {
    data.id = playerData.length + 1;
      setPlayerData((prevState) => [
        ...prevState,
        data]);
  };

  const onEditPlayer = (data) => {
    setFormPlayer(data);
  };

  const updatePlayer = (data) => {
    setPlayerData((prevState) => {
      const newPlayerData = prevState.filter((player) => player.id !== formPlayer.id);
      return [
        ...newPlayerData,
        data
      ];
    });
  };

  
  const onDeletePlayer = (data) => {
    setPlayerData((playerData) =>
      playerData.filter((player) => player.id !== data.id)
    );
  };

  return (
    <div className="app">
      <Form
        form = {formPlayer}
        onAddPlayer = {addPlayer}
        onUpdatePlayer = {updatePlayer}
        />
      <Table
        players = {playerData}
        onEditPlayer = {onEditPlayer}
        onDeletePlayer = {onDeletePlayer}
      />
    </div>
  )
}

export default App;
