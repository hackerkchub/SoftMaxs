import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { RouteLoaderProvider } from "./context/RouteLoaderContext";
import PageLoader from "./components/PageLoader";


export default function App() {
  return (
    <BrowserRouter>
     <RouteLoaderProvider>
        <PageLoader />

      <AppRouter />
      </RouteLoaderProvider>
    </BrowserRouter>
  );
}
