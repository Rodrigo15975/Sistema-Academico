import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { LazyMotion, domAnimation } from "framer-motion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation} >
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </LazyMotion>
    </BrowserRouter>
  </StrictMode >
);
