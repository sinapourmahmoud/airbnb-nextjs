"use client";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from "react";
interface Toggletype {
  toggle: string | null;
  setToggle: Dispatch<SetStateAction<string>>;
}

interface PropsInterface {
  children: ReactElement;
}

export const FrontContext = createContext<Toggletype>({} as Toggletype);
function Context({ children }: PropsInterface) {
  let [toggle, setToggle] = useState("");
  return (
    <FrontContext.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      {children}
    </FrontContext.Provider>
  );
}
export default Context;
