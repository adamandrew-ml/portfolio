import React from 'react'

const PlayerImg = (props) => {

  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  const padded = pad(props.player.sofifa_id, 6);
  const first = String(padded).substring(0,3);
  const yearPart = String(props.player.year).substring(2,4);
  const img_url1 = String("https://cdn.sofifa.net/players/" + first + "/" + String(padded).substring(3,6) + "/" + yearPart + "_120.png");


  return (
    <img className="player-image" alt="Nothing here" src={img_url1} data-root="https://cdn.sofifa.net/"/>
  )

}

export default PlayerImg