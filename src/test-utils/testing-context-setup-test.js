import { render, screen, fireEvent } from "@testing-library/react";
import ContextProvider, { context, UseContext } from "../context/context";

const RenderWithContext = (component) => {
  return {
    ...render(<ContextProvider value={context}>{component}</ContextProvider>),
  };
};

export default RenderWithContext;
