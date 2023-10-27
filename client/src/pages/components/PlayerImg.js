import React from 'react'

const PlayerImg = ({player}) => {

  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  const padded = pad(player.sofifa_id, 6);
  const first = String(padded).substring(0,3);
  const yearPart = String(player.year).substring(2,4);
  const img_url1 = String("https://cdn.sofifa.net/players/" + first + "/" + String(padded).substring(3,6) + "/" + yearPart + "_120.png");

  return (
    <div className="player-image">
      <img alt="Nothing here" src={img_url1} data-root="https://cdn.sofifa.net/" />
    </div>
  )

}

export default PlayerImg