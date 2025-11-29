// src/context/RouteLoaderContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteLoaderContext = createContext();

export const useRouteLoader = () => useContext(RouteLoaderContext);

export function RouteLoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading on route change
    setLoading(true);

    // Fake delay to show loader (300–500ms feels clean)
    const t = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <RouteLoaderContext.Provider value={{ loading }}>
      {children}
    </RouteLoaderContext.Provider>
  );
}
