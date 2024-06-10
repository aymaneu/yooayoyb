import React, { useState } from "react";

const Models = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCardClick = (option) => {
    setSelectedOption(option);
    const radioButton = document.getElementById(`model${option}`);
    if (radioButton) {
      radioButton.checked = true;
    }
    console.log(option);
  };
  return (
    <div className="mx-10 md:mx-20 py-20">
      <h2 className="text-lg font-semibold pb-10">Sélectionnez un modèle</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4  md:gap-x-14">
        <div className="" onClick={() => handleCardClick("option1")}>
          <div className="">
            <img
              about="model"
              alt="giulia"
              src="/Giulia.png"
              width={1500}
              height={1500}
              className="md:w-64"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <input
              className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
              type="radio"
              name="model"
              id={`modeloption1`}
              value="Giulia"
            />
            <label className="semi text-lg">Giulia</label>
          </div>
        </div>
        <div className="" onClick={() => handleCardClick("option2")}>
          <div className="">
            <img
              about="model"
              alt="Stelvio"
              src="/Stelvio.png"
              width={1500}
              height={1500}
              className="md:w-64"
            />
          </div>
          <div className=" flex items-center gap-x-3">
            <input
              className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
              type="radio"
              name="model"
              id={`modeloption2`}
              value="Stelvio"
            />
            <label className="semi text-lg">Stelvio</label>
          </div>
        </div>
        <div className="" onClick={() => handleCardClick("option3")}>
          <div className="">
            <img
              about="model"
              alt="Tonale"
              src="/Tonale.png"
              width={1500}
              height={1500}
              className="md:w-64"
            />
          </div>
          <div className=" flex items-center gap-x-3">
            <input
              className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
              type="radio"
              name="model"
              id={`modeloption3`}
              value="Tonale"
            />
            <label className="semi text-lg">Tonale</label>
          </div>
        </div>
        <div className="" onClick={() => handleCardClick("option4")}>
          <div className="">
            <img
              about="model"
              alt="Stelvio-Q"
              src="/Stelvio-Q.png"
              width={1500}
              height={1500}
              className="md:w-64"
            />
          </div>
          <div className=" flex items-center gap-x-3">
            <input
              className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
              type="radio"
              name="model"
              id={`modeloption4`}
              value="Stelvio-Quadrifoglio"
            />
            <label className="semi text-lg">Stelvio Quadrifoglio</label>
          </div>
        </div>
        <div className="" onClick={() => handleCardClick("option5")}>
          <div className="">
            <img
              about="model"
              alt="Giulia-Q"
              src="/Giulia-Q.png"
              width={1500}
              height={1500}
              className="md:w-64"
            />
          </div>
          <div className=" flex items-center gap-x-3">
            <input
              className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
              type="radio"
              name="model"
              id={`modeloption5`}
              value="Giulia-Quadrifoglio"
            />
            <label className="semi text-lg">Giulia Quadrifoglio</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
