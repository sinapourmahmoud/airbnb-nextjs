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
  isOpen: boolean | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface PropsInterface {
  children: ReactElement;
}

export const FrontContext = createContext<Toggletype>({} as Toggletype);
function Context({ children }: PropsInterface) {
  let [toggle, setToggle] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  return (
    <FrontContext.Provider
      value={{
        toggle,
        setToggle,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </FrontContext.Provider>
  );
}
export default Context;
