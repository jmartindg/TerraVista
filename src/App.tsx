import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            padding: "18px",
            color: "#713200",
          },
        }}
      />
    </section>
  );
};

export default App;
