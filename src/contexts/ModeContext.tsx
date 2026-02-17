import { createContext, useContext, useState, ReactNode } from "react";

type Mode = "families" | "professionals";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType>({ mode: "families", setMode: () => {} });

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("families");
  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
};

export const useMode = () => useContext(ModeContext);
