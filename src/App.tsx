import Navbar from "./components/navbar/navbar";
import Products from "./pages/Products";
// importing context provider
import ContextProvider from "./context/context";

// Types

export const productsUrl = "https://fakestoreapi.com/products";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Products />
    </ContextProvider>
  );
}

export default App;
