import React from "react";

export default function Travel({ travel }) {
  return (
    <div>
      <div key={travel._id}>
        <h3>{travel.title}</h3>
      </div>
    </div>
  );
}
