import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const TravelerState = create((set) => ({
  selectedSection: "bookings",
  bookings: [],
  loading: true,

  setSelectedSection: (section) => {
    set({ selectedSection: section });
  },

  myBookings: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get("/booking/myBookings");
      set({ bookings: res.data.myBookings || [], loading: false });
      return res;
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
}));

export default TravelerState;
