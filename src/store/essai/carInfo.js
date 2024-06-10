import { create } from "zustand";

export const useInfoStore = create((set) => ({
  civilité: "",
  prénom: "",
  nom: "",
  email: "",
  tel: "",
  address: "",
  callType: "",
  siren: null,
  marketing: null,
  profilage: null,
  communication: null,
  updateCivilité: (civilité) => set(() => ({ civilité: civilité })),
  updatePrénom: (prénom) => set(() => ({ prénom: prénom })),
  updateNom: (nom) => set(() => ({ nom: nom })),
  updateEmail: (email) => set(() => ({ email: email })),
  updateTel: (tel) => set(() => ({ tel: tel })),
  updateAddress: (address) => set(() => ({ address: address })),
  updateCallType: (callType) => set(() => ({ callType: callType })),
  updateSiren: (siren) => set(() => ({ siren: siren })),
  updateMarketing: (marketing) => set(() => ({ marketing: marketing })),
  updateProfilage: (profilage) => set(() => ({ profilage: profilage })),
  updateCommunication: (communication) =>
    set(() => ({ communication: communication })),
}));
