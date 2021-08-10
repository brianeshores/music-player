import React from "react";

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>Time</p>
      </div>
      <div className="play-control"></div>
    </div>
  );
};

export default Player;
