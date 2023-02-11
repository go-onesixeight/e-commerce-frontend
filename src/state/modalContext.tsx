import { type } from "os";
import React, {
  ReactElement,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";
import Signup from "../components/auth/Signup";

interface Props {}

type ModalType = "close" | "signup" | "signin" | "reset_password";

type Modals = {
  [key in ModalType]: ReactElement | null;
};

type ModalState = {
  modal: ReactElement | null;
  setModalType: Dispatch<SetStateAction<ModalType>>;
};

const modals: Modals = {
  close: null,
  signup: <Signup />,
  signin: null,
  reset_password: null,
};

const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [modal, setModal] = useState<ReactElement | null>(null);
  const [modalType, setModalType] = useState<ModalType>("close");

  useEffect(() => {
    setModal(modals[modalType]);
  }, [modalType]);

  return (
    <>
      <ModalContext.Provider value={{ modal, setModalType }}>
        {children}
      </ModalContext.Provider>
    </>
  );
};

export const ModalContext = createContext<ModalState | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error(
      "useModalContext must be used with in the ModalContextProvider."
    );

  return context;
};

export default ModalContextProvider;
