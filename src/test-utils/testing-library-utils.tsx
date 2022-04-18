import { render } from "@testing-library/react";
import ContextProvider, { context, UseContext } from "./../context/context";

// const renderWithContext = (ui: any, { providerProps, ...renderOptions }) => {
//   return render(<context.Provider></context.Provider>);
// };
const renderWithContext = (ui: any, options: any) =>
  render(ui, { wrapper: ContextProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
