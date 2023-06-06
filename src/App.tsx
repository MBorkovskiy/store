import "./App.css";
import { Header } from "./Components/Header/Header";
import { useEffect } from "react";
import { Footer } from "./Components/Footer/Footer";
import { AppRoutes } from "./utils/routes/AppRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/constant/theme";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "./utils/constant/scrollToTop";
import { Suspense } from "react";
import { Loader } from "./Components/Loader/Loader";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);
  return (
    <ThemeProvider theme={theme}>
      <div className="app_container">
        <Header />
        <div className="App">
          <Suspense fallback={<Loader />}>
            <AppRoutes />
          </Suspense>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
