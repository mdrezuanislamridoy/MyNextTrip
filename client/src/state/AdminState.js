import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const AdminState = create((set) => {
  return {
    agencies: [],
    message: "",
    error: null,
    selectedPortion: "profile",

    setSelectedPortion: (portion) => {
      set({ selectedPortion: portion });
    },

    getPendingAgencies: async () => {
      try {
        const result = await axiosInstance.get("/auth/getPendingAgencies");
        set({
          agencies: result.data.agencies,
          error: null,
          message: result.message,
        });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    approveAgency: async (id) => {
      try {
        const result = await axiosInstance.post(`/auth/approveAgency/${id}`);
        set({ error: null, message: result.message });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    rejectAgency: async (id) => {
      try {
        const result = await axiosInstance.post(`/auth/rejectAgency/${id}`);
        set({ error: null, message: result.message });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
  };
});

export default AdminState;
