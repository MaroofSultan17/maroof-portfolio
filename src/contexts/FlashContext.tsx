import { createContext, Dispatch, useContext, useReducer, ReactNode } from "react";
import flashReducer from "@/reducers/flashReducer";

interface FlashContextInterface {
  messages: FlashMessageInterface[];
  dispatch: Dispatch<FlashReducerActionInterface>;
}

const defaultFlashContext: FlashContextInterface = {
  messages: [],
  dispatch: (() => undefined) as unknown as Dispatch<FlashReducerActionInterface>,
};

const FlashContext = createContext<FlashContextInterface>(defaultFlashContext);

export function FlashProvider({ children }: { children: ReactNode }) {
  const [messages, dispatch] = useReducer(flashReducer, []);

  const contextValue = {
    messages,
    dispatch,
  };

  return (
    <FlashContext.Provider value={contextValue}>
      {children}
    </FlashContext.Provider>
  );
}

export function useFlash() {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error(
      "useFlash must be used within a FlashProvider. Wrap a parent component in <FlashProvider> to fix this error.",
    );
  }
  return context;
}
