import { render } from "@testing-library/react";
import ContextProvider, { context, UseContext } from "../context/context";

const RenderWithContext = (component) => {
  return {
    ...render(<ContextProvider value={context}>{component}</ContextProvider>),
  };
};
export * from "@testing-library/react";

export default RenderWithContext;
