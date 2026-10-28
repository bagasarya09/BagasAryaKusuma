import Home from "./pages/Home"
import CustomCursor from "./components/ui/CustomCursor"
import { Toaster } from "react-hot-toast"

export default function App() {
  return (
    <>
      <CustomCursor />
      <Home />
       <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "3px solid #111",
            padding: "16px 20px",
            color: "#111",
            fontWeight: "700",
            borderRadius: "18px",
            boxShadow: "6px 6px 0px #111",
          },
        }}
      />
    </>
  )
}