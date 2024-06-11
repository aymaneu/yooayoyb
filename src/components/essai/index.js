import React from "react";
import Models from "./Models";
import Form from "./Form";
import Map from "./map";
import { cn } from "../../utils/cn";
import { useCarStore } from "../../store/essai/car";
import { useStatusStore } from "../../store/status";
import { useInfoStore } from "../../store/essai/carInfo";
import Merci from "./Merci";
import { mapStore } from "../../store/essai/map";

const Index = () => {
  const { done } = useInfoStore();
  const { mapClicked } = mapStore();
  const { car, updateCar } = useCarStore();

  return (
    <div className="relative md:overflow-y-clip max-h-screen h-screen">
      <Steps />
      {car === "" && <Models />}
      {!done && <Form />}
      {/* {!mapClicked && <Map />} */}
      {/* {mapClicked && <Merci />} */}
    </div>
  );
};

export default Index;

const stepsLabel = [
  { label: "MODÈLE" },
  { label: "VOS COORDONNÉES" },
  { label: "DISTRIBUTEUR" },
];

const Steps = () => {
  const { car } = useCarStore();
  const { done } = useInfoStore();
  return (
    <div className="md:max-w-2xl max-w-xs relative mx-auto">
      <div className="flex z-20  justify-between">
        {stepsLabel.map((lab, idx) => {
          return (
            <div key={idx} className="relative shrink-0">
              <div
                className={cn(
                  "bg-zinc-500 z-20 w-8 h-8 relative rounded-full",
                  car !== "" && idx === 1 ? "bg-zinc-900" : "",
                  done && idx === 2 ? "bg-zinc-900" : "",
                  idx === 0 ? "bg-zinc-900" : ""
                )}
              >
                <p className="absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2">
                  {idx + 1}
                </p>
              </div>
              <p className="mt-8 text-[10px] text-center md:text-sm shrink-0 absolute left-1/2 -translate-x-1/2">
                {lab.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-[2px] w-full top-1/2 z-10 -translate-y-1/2 absolute bg-zinc-950" />
    </div>
  );
};
