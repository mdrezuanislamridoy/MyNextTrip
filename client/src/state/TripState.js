import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

const useTravelStore = create((set) => ({
  travels: [],
  agencyTravels: [],
  error: null,

  getAllTravels: async () => {
    try {
      const res = await axiosInstance.get("/travel/getTravels");
      set({ travels: res.data });
      set({ error: "" });
    } catch (err) {
      console.error("Failed to fetch all travels:", err);
      set({ error: err });
    }
  },

  addTravelImage: async (travelId, imageFile) => {
    try {
      const formData = new FormData();
      formData.append("travelImage", imageFile);

      const res = await axiosInstance.post(
        `/travel/addImage/${travelId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedTravel = res.data;

      set((state) => ({
        agencyTravels: state.agencyTravels.map((t) =>
          t._id === travelId ? updatedTravel : t
        ),
        travels: state.travels.map((t) =>
          t._id === travelId ? updatedTravel : t
        ),
      }));
      set({ error: "" });
    } catch (err) {
      console.error("Failed to upload travel image:", err);
      set({ error: err });
    }
  },

  getAgencyTravels: async () => {
    try {
      const { data } = await axiosInstance.get("/travel/getMyTravels");

      set({ agencyTravels: Array.isArray(data) ? data : [] });
      set({ error: "" });
    } catch (error) {
      set({ agencyTravels: [], error });
    }
  },

  addTravel: async (travelData) => {
    try {
      const res = await axiosInstance.post("/travel/addTravel", travelData);
      set((state) => ({
        agencyTravels: [res.data, ...state.agencyTravels],
        travels: [res.data, ...state.travels],
      }));
      set({ error: "" });
    } catch (err) {
      console.error("Failed to add travel:", err);
      set({ error: err });
    }
  },

  removeTravel: async (travelId) => {
    try {
      await axiosInstance.delete(`/travel/deleteTravel/${travelId}`);
      set((state) => ({
        agencyTravels: state.agencyTravels.filter((t) => t._id !== travelId),
        travels: state.travels.filter((t) => t._id !== travelId),
      }));
      set({ error: "" });
    } catch (err) {
      console.error("Failed to remove travel:", err);
      set({ error: err });
    }
  },

  updateTravel: async (travelId, updatedData) => {
    try {
      const res = await axiosInstance.put(
        `/travel/updateTravel/${travelId}`,
        updatedData
      );
      set((state) => ({
        agencyTravels: state.agencyTravels.map((t) =>
          t._id === travelId ? res.data : t
        ),
        travels: state.travels.map((t) => (t._id === travelId ? res.data : t)),
      }));
      set({ error: "" });
    } catch (err) {
      console.error("Failed to update travel:", err);
      set({ error: err });
    }
  },
}));

export default useTravelStore;
