import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
const Form = () => {
  const [clicked, setClicked] = useState();
  console.log(clicked);

  return (
    <div className="relative pt-20">
      <div className="max-w-2xl relative mx-auto">
        <div className="flex z-20  justify-between">
          {stepsLabel.map((lab, idx) => {
            return (
              <div key={idx} className="relative shrink-0">
                <div
                  className={cn(
                    "bg-zinc-500 z-20 w-8 h-8 relative rounded-full",
                    clicked && idx === 1 ? "bg-zinc-900" : "",
                    idx === 0 ? "bg-zinc-900" : ""
                  )}
                >
                  <p className="absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2">
                    {idx + 1}
                  </p>
                </div>
                <p className="mt-8 text-sm shrink-0 absolute left-1/2 -translate-x-1/2">
                  {lab.label}
                </p>
              </div>
            );
          })}
        </div>
        <div className="h-[2px] w-full top-1/2 z-10 -translate-y-1/2 absolute bg-zinc-950" />
      </div>
      <div className="mt-20 max-w-xl mx-auto flex flex-col gap-3">
        <p>Sélectionnez un modèle</p>
        <div className="flex gap-10 justify-center">
          {Array.from({ length: 4 }).map((_, idx) => {
            return (
              <div>
                <input
                  onClick={() => setClicked(true)}
                  id={idx}
                  type="radio"
                  name="r"
                />
                <img for={idx} className="w-60" key={idx} src="/car.png" />
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{
          position: "absolute",
          top: "100%",
          left: "0px",
          opacity: 0,
        }}
        animate={{ top: clicked ? "52%" : "100%", opacity: clicked ? 1 : 0 }}
        className="grid bg-white w-full grid-cols-3 px-10 md:px-20 py-20"
      >
        <div className="col-span-3 md:col-span-1">
          <h2>Votre sélection:</h2>
          <h2 className="semi text-lg">STELVIO</h2>
          <img src="/Stelvio.png" className="w-80" />
          <button className="semi h-12 px-7 border border-black text-black mt-14 flex items-center justify-center">
            CHANGER DE MODÈLE
          </button>
        </div>
        <div className="col-span-3 md:col-span-2">
          <div>
            <div className="grid grid-cols-2 gap-5 gap-x-10">
              <div className="flex flex-col">
                <select className="semi bg-[#F4F4F4] border border-black h-12">
                  <option className="semi pl-2" value="" hidden>
                    Civilité*
                  </option>
                  <option className="semi" value="Mr.">
                    M.
                  </option>
                  <option className="semi" value="MME.">
                    MME.
                  </option>
                  <option className="semi" value="MLLE.">
                    MLLE.
                  </option>
                </select>
              </div>
              <div></div>

              <input
                type="text"
                placeholder="PRÉNOM*"
                className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              <input
                type="text"
                placeholder="NOM*"
                className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              <input
                type="email"
                placeholder="E-MAIL*"
                className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              <input
                type="tel"
                placeholder="TELEPHONE*"
                className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              <input
                type="text"
                placeholder="CODE POSTAL*"
                className="semi bg-[#F4F4F4] border border-black h-12 pl-2 placeholder:text-black placeholder:pl-2"
              />
              <select className="semi bg-[#F4F4F4] border border-black h-12 ">
                <option hidden className="pl-2">
                  MOYENNE DE CONTACT SOUHAITÉ
                </option>
                <option className="semi">TÉLÉPHONE</option>
                <option className="semi">APPÉL VIDEO</option>
              </select>
            </div>
            <div className="pt-10">
              <label className="semi text-sm">
                POSSÉDEZ-VOUS UN NUMÉRO DE SIREN?
              </label>
              <div className="flex pt-3">
                <div className="flex items-center">
                  <input
                    value="oui"
                    type="radio"
                    name="siren"
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">OUI</label>
                </div>
                <div className="flex items-center pl-20">
                  <input
                    type="radio"
                    name="siren"
                    value="non"
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">NON</label>
                </div>
              </div>
              <p className="italic text-sm pt-10">
                * Tous les champs sont obligatoires
              </p>
            </div>
            <div className="pt-10">
              <div className="pb-5">
                <label className="semi ">CONSENTEMENT</label>
                <p>
                  Après avoir lu la
                  <a href="" className="underline pl-1 cursor-pointer ">
                    Note d&apos;information*
                  </a>
                </p>
              </div>

              <div className="flex pt-3 items-center">
                <div className="flex items-center">
                  <input
                    value=""
                    type="radio"
                    name="A"
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">J&apos;ACCEPTE</label>
                </div>
                <div className="flex items-center pl-20">
                  <input
                    type="radio"
                    name="A"
                    value=""
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">JE REFUSE</label>
                </div>
                <a className="semi max-w-96 underline text-[7px] pl-20">
                  LES ACTIVITÉS DE MARKETING
                </a>
              </div>
              <div className="flex pt-3 items-center">
                <div className="flex items-center">
                  <input
                    value=""
                    type="radio"
                    name="B"
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">J&apos;ACCEPTE</label>
                </div>
                <div className="flex items-center pl-20">
                  <input
                    type="radio"
                    name="B"
                    value=""
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">JE REFUSE</label>
                </div>
                <a className="semi max-w-96 underline text-[7px] pl-20">
                  LES ACTIVITÉS DE PROFILAGE
                </a>
              </div>
              <div className="flex pt-3 items-center">
                <div className="flex items-center">
                  <input
                    value=""
                    type="radio"
                    name="C"
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">J&apos;ACCEPTE</label>
                </div>
                <div className="flex items-center pl-20">
                  <input
                    type="radio"
                    name="C"
                    value=""
                    className="relative float-left  h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  />
                  <label className="semi pl-2">JE REFUSE</label>
                </div>
                <a className="semi max-w-96 underline text-[7px] pl-20">
                  LA COMMUNICATION DE MES DONNÉES À DES TIERS POUR LEURS
                  ACTIVITÉS DE MARKETING
                </a>
              </div>
            </div>
            <button className="semi h-12 text-white px-7 bg-[#ba0816] mt-14 flex items-center justify-center">
              ÉTAPE SUIVANTE
              <RiArrowRightSLine size={23} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;

const stepsLabel = [
  { label: "MODÈLE" },
  { label: "VOS COORDONNÉES" },
  { label: "DISTRIBUTEUR" },
];
