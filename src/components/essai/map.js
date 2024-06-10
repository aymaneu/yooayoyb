import React from "react";
import { motion } from "framer-motion";
import { useInfoStore } from "../../store/essai/carInfo";
import { cityInfo } from "../../data/address";
const Map = () => {
  const {
    civilité,
    prénom,
    nom,
    email,
    tel,
    address,
    callType,
    siren,
    marketing,
    communication,
    profilage,
    done,
    sec,
    updateCivilité,
    updatePrénom,
    updateNom,
    updateEmail,
    updateTel,
    updateAddress,
    updateCallType,
    updateSiren,
    updateMarketing,
    updateCommunication,
    updateProfilage,
    updateDone,
    setSec,
    map,
  } = useInfoStore();

  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "100%",
        left: "0px",
        opacity: 0,
      }}
      animate={{
        top: done ? "2%" : "100%",
        opacity: done ? 1 : 0,
      }}
      className="relative bg-white w-full h-full py-3 mt-24"
    >
      <p>SÉLECTIONNEZ UN DE NOS DISTRIBUTEURS</p>
      <iframe
        src={map}
        className="max-w-7xl w-full h-[40rem]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-zinc-100 ml-1 absolute top-0 h-[35rem] w-[28rem] mt-10">
        <p className="text-center border-b border-black text-sm">{address}</p>
        <div className="fixed flex flex-col gap-4">
          {cityInfo[sec - 1]?.sections.map((bb, ik) => (
            <div key={bb.sec} className="hover:bg-white w-[28rem] py-5">
              <p className="semi ">
                {ik + 1}-{bb.label}
              </p>
              <p className="text-sm">
                Services : Business Center | Spécialiste
              </p>
              <p>{bb.address}</p>
              <button className="bg-[#292B35] text-white px-4 py-2">
                SÉLECTIONNER
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Map;
