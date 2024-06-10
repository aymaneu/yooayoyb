import "./App.css";
import Form from "./components/Form";
import Models from "./components/Models";
import { useCarStore } from "./store/car";
import { useStatusStore } from "./store/status";
import { cn } from "./utils/cn";

function App() {
  const { car } = useCarStore();
  const { updateStatus, status } = useStatusStore();
  return (
    <div className="relative overflow-y-clip max-h-screen h-screen">
      <div className="flex justify-center max-w-xl mx-auto py-5">
        {statusInfo.map((hi) => (
          <button
            onClick={() => updateStatus(hi)}
            key={hi}
            className={cn(
              "py-2 w-full cursor-pointer",
              status === hi ? "text-white bg-[#292B35]" : ""
            )}
          >
            {hi}
          </button>
        ))}
      </div>
      <div className="max-w-2xl relative mx-auto">
        <div className="flex z-20  justify-between">
          {stepsLabel.map((lab, idx) => {
            return (
              <div key={idx} className="relative shrink-0">
                <div
                  className={cn(
                    "bg-zinc-500 z-20 w-8 h-8 relative rounded-full",
                    car !== "" && idx === 1 ? "bg-zinc-900" : "",
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
      <Models />
      <Form />
    </div>
  );
}

export default App;

const stepsLabel = [
  { label: "MODÈLE" },
  { label: "VOS COORDONNÉES" },
  { label: "DISTRIBUTEUR" },
];

const statusInfo = ["Essai", "Devis", "Brochure"];