import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const TravelerState = create((set) => ({
  selectedSection: "bookings",
  setSelectedSection: (section) => {
    set({ selectedSection: section });
  },

  bookings: [],
  myBookings: async () => {
    try {
      const res = await axiosInstance.get("/booking/myBookings");
      set({ bookings: res.data.bookings || [] });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default TravelerState;
