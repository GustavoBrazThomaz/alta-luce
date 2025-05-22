import { Toaster } from "react-hot-toast";
import { ProductPage } from "./pages/product/product";
import { AppBar } from "./ui";

function App() {
  return (
    <>
      <AppBar />
      <div className="px-96 mt-8">
        <ProductPage />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
