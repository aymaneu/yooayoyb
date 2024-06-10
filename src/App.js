import "./App.css";
import { useCarStore } from "./store/car";
import { useStatusStore } from "./store/status";
import { cn } from "./utils/cn";
import Essai from "./components/essai";
import Brochure from "./components/brochure";
import Devis from "./components/devis";
function App() {
  const { car } = useCarStore();
  const { updateStatus, status } = useStatusStore();
  return (
    <div className="relative overflow-y-clip max-h-screen h-screen">
      <div className="flex justify-center max-w-xl mx-auto py-5">
        {statusInfo.map((hi) => (
          <button
            onClick={() => updateStatus(hi.label)}
            key={hi}
            className={cn(
              "py-2 w-full cursor-pointer",
              status === hi.label ? "text-white bg-[#292B35]" : ""
            )}
          >
            {hi.label}
          </button>
        ))}
      </div>
      {statusInfo
        .filter((hillo) => hillo.label === status)
        .map((it) => {
          return (
            <div>
              <it.comp />
            </div>
          );
        })}
    </div>
  );
}

export default App;

const statusInfo = [
  { label: "Essai", comp: Essai },
  { label: "Devis", comp: Devis },
  { label: "Brochure", comp: Brochure },
];
