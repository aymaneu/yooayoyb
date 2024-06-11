import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInfoStore } from "../../store/devis/carInfo";
import { cityInfo } from "../../data/address";
import { mapStore } from "../../store/devis/map";
const Map = () => {
  const {
    address,

    done,
    sec,

    map,
  } = useInfoStore();
  const { updateMapClicked } = mapStore();
  const { updateAddress } = useInfoStore();
  const [selectedMap, setSelectedMap] = useState("");
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
      className="relative bg-white w-full h-full z-50 py-3 mt-24"
    >
      <p>SÉLECTIONNEZ UN DE NOS DISTRIBUTEURS</p>
      <iframe
        src={selectedMap === "" ? map : selectedMap}
        className="max-w-7xl w-full h-[40rem]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-zinc-100 ml-1 absolute top-0 h-[35rem] w-[28rem] mt-10">
        <p className="text-center border-b border-black text-sm">{address}</p>
        <div className="flex flex-col gap-4">
          {cityInfo[sec - 1]?.sections.map((bb, ik) => (
            <div
              onClick={() => {
                setSelectedMap(bb.map);
                updateAddress(bb.address);
              }}
              key={bb.sec}
              className="hover:bg-white pl-2 w-[28rem] py-5"
            >
              <p className="semi ">
                {ik + 1}-{bb.label}
              </p>
              <p className="text-sm">
                Services : Business Center | Spécialiste
              </p>
              <p>{bb.address}</p>
              <button
                onClick={() => updateMapClicked(true)}
                className="bg-[#292B35] text-white px-4 py-2"
              >
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
