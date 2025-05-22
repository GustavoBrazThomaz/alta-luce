import { Toaster } from "react-hot-toast";
import { ProductPage } from "./pages/product/product";
import { AppBar } from "./ui";

function App() {
  return (
    <>
      <AppBar />
      <div className="px-[20%] max-2xl:px-[15%] max-xl:px-[10%] max-lg:px-[5%] my-8">
        <ProductPage />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
