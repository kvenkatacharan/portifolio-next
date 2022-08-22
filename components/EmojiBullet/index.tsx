import React from "react";
function EmojiBullet({ emoji, text }) {
  return (
    <li className="flex space-x-4 text-md">
      <p className="text-2xl"> {emoji}</p>
      <p className="mt-1"> {text}</p>
    </li>
  );
}

export default EmojiBullet;
