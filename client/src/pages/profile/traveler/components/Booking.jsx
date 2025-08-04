import React from "react";

export default function Booking({ booking }) {
  return (
    <div>
      <h2>{booking.tourName}</h2>
      <h2>{booking.tourLocation}</h2>
      <h2>{booking.tourDate}</h2>
    </div>
  );
}
