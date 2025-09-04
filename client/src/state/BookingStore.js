import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const BookingStore = create((set) => {
  return {
    myBookings: [],
    agenciesBookingsList: [],
    loading: true,

    getMyBookings: async () => {
      try {
        set({ loading: true });
        const res = await axiosInstance.get("/booking/myBookings");
        set({ myBookings: res.data.myBookings || [], loading: false });
        return res;
      } catch (error) {
        console.log(error);
        set({ loading: false });
      }
    },
    getAgenciesBookings: async () => {
      try {
        set({ loading: true });
        const res = await axiosInstance.get("/booking/getAgencyBookings");
        set({
          agenciesBookingsList: res.data.agencyBookings || [],
          loading: false,
        });
        console.log(res.data);

        return res;
      } catch (error) {
        console.log(error);
        set({ loading: false });
      }
    },
    updateBooking: async (status, id) => {
      try {
        const res = axiosInstance.put(`/booking/updateBooking/${id}`, {
          status,
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
});

export default BookingStore;
