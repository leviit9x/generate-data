import { createContext, useContext, useReducer } from "react";

export const GenerateDataCtx = createContext();

function generateDataReducer(state, action) {
  switch (action.type) {
    case "addData": {
      return { data: action.payload };
    }
    case "reset": {
      return { data: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GenerateDataProvider({ children }) {
  const [state, dispatch] = useReducer(generateDataReducer, { data: {} });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <GenerateDataCtx.Provider value={value}>
      {children}
    </GenerateDataCtx.Provider>
  );
}

function useGenerateData() {
  const context = useContext(GenerateDataCtx);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
export { GenerateDataProvider, useGenerateData };
