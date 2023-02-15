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
};

type ModalDispatch = {
  setModalType: Dispatch<SetStateAction<ModalType>>;
};

const ModalStateContext = createContext<ModalState | undefined>(undefined);
const ModalDispatchContext = createContext<ModalDispatch | undefined>(
  undefined
);

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
      <ModalStateContext.Provider value={{ modal }}>
        <ModalDispatchContext.Provider value={{ setModalType }}>
          {children}
        </ModalDispatchContext.Provider>
      </ModalStateContext.Provider>
    </>
  );
};

export const ModalContext = createContext<ModalState | undefined>(undefined);

export const useModalContext = () => {
  const modalState = useContext(ModalStateContext);
  const modalDisptch = useContext(ModalDispatchContext);

  if (modalState === undefined || modalDisptch === undefined)
    throw new Error(
      "useModalContext must be used with in the ModalContextProvider."
    );

  return { ...modalState, ...modalDisptch };
};

export default ModalContextProvider;
