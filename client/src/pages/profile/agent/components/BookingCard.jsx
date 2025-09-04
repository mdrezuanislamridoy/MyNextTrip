import React from "react";
import BookingStore from "../../../../state/BookingStore";

export default function BookingCard({ booking }) {
  const { updateBooking } = BookingStore();

  const handleUpdate = async (status) => {
    const res = await updateBooking(status, booking._id);
  };
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-5 border">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        {booking.tourName}
      </h2>
      <p className="text-sm text-gray-500 mb-3">{booking.tourLocation}</p>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Travelers:</span>{" "}
          {booking.numberOfTraveler}
        </p>
        <p>
          <span className="font-medium">Date:</span>{" "}
          {new Date(booking.tourDate).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium">Total Price:</span> ৳
          {booking.totalPrice}
        </p>
      </div>

      {/* Payment */}
      <div className="mt-4 space-y-1 text-sm">
        <p>
          <span className="font-medium">Payment Method:</span>{" "}
          {booking.paymentMethod}
        </p>
        <p>
          <span className="font-medium">Payment Status:</span>{" "}
          <span
            className={`px-2 py-1 rounded text-xs ${
              booking.paymentStatus === "Paid"
                ? "bg-green-100 text-green-700"
                : booking.paymentStatus === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {booking.paymentStatus}
          </span>
        </p>
      </div>

      {/* Status + Action */}
      <div className="mt-4">
        <span className="font-medium text-sm">Status:</span>{" "}
        <span
          className={`ml-2 px-2 py-1 rounded text-xs ${
            booking.status === "Confirmed"
              ? "bg-green-100 text-green-700"
              : booking.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {booking.status}
        </span>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => handleUpdate("Confirmed")}
          className="px-4 py-2 rounded-lg cursor-pointer bg-green-600 text-white text-sm hover:bg-green-700 transition"
        >
          Confirm Booking
        </button>
        <button
          onClick={() => handleUpdate("Cancelled")}
          className="px-4 py-2 rounded-lg cursor-pointer bg-red-600 text-white text-sm hover:bg-red-700 transition"
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
}
