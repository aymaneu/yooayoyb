import { create } from "zustand";

export const useInfoStore = create((set) => ({
  civilité: "",
  PRÉNOM: "",
  NOM: "",
  email: "",
  tel: "",
  address: "",
  callType: "",
  updateCivilité: (civilité) => set(() => ({ civilité: civilité })),
}));
