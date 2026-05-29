import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HapticsProvider } from "@haptics/react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HapticsProvider audioFallback={import.meta.env.DEV}>
      <App />
    </HapticsProvider>
  </StrictMode>,
);
