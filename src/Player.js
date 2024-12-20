import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md text-gray-700 mb-12">
      <img src={imageUrl} alt={`${name}`} className="w-full h-72 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4 text-gray-800 mb-3">{name}</h2>
      <p>Team: {team}</p>
      <p>Nationality: {nationality}</p>
      <p>Jersey Number: {jerseyNumber}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Player;
