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
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.6680569967803!2d-7.546002424303285!3d33.58796687333526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM1JzE2LjciTiA3wrAzMiczNi4zIlc!5e0!3m2!1sen!2sma!4v1718026659374!5m2!1sen!2sma"
        width="800"
        className=""
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-white ml-1 absolute top-0 h-80 w-80 mt-10">
        <p className="text-center border-b border-black text-sm">{address}</p>
        <div className="fixed">
          {cityInfo[sec - 1]?.sections.map((bb) => (
            <div key={bb.sec}>{bb.label}</div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Map;
