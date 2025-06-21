import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Trips from "./components/Trips";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Dashboard from "./components/Dashboard";
import backgroundImage from "./assets/Clouds.png"
import Calculator from "./components/Calculator";
import Breakdown from "./components/Breakdown";


function AnimatedRoutes() {
  const location = useLocation();
  const CLIENT_ID = "822849603771-5bttu30ve0bvvfapekknlhieaj406ndf.apps.googleusercontent.com"

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper direction="down">
              <LandingPage />
            </PageWrapper>
          }
        />
        {/* <Route
          path="/login"
          element={
            <PageWrapper direction="down">
              <GoogleOAuthProvider clientId={CLIENT_ID}><LoginPage /></GoogleOAuthProvider>
            </PageWrapper>
          }
        /> */}
        <Route
          path="/home-page"
          element={
            <HomePage />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />
        <Route
          path="/trips"
          element={
            <Trips />
          }
        />
        <Route
          path="/calculator"
          element={
            <Calculator />
          }
        />
        <Route
          path="/breakdown"
          element={
            <Breakdown />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}


const PageWrapper = ({ children, direction = "down" }) => {
  const variants = {
    initial: { y: direction === "down" ? 0 : 0 },
    animate: { y: 0 },
    exit: { y: direction === "down" ? 1000 : -1000 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
};

const App = () => {
  const loc = useLocation();
  // Prevents Navbar from appearing on LandingPage
  const showNavbar = location.pathname !== '/';

  let navbarBgc = "#ffffff"
  let pageBgc = "#ffffff"
  console.log("Current path:", loc.pathname);


  if (loc.pathname === "/calculator") {
    navbarBgc = "#D7E7D4";
    pageBgc = "#D7E7D4";
  }
  return (
    <div className={`w-full p-6 relative ${loc.pathname === '/home-page' ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
      {/* Only for the LandingPage */}
      {loc.pathname === "/" && (
        <AnimatePresence mode="wait">
          <motion.div
            key={loc.pathname}
            initial={{ opacity: 1, y: '-100vh' }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0.5, y: '100vh' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
        </AnimatePresence>
      )}

      {/* Navbar only on non-Landing pages */}
      {showNavbar && <Navbar />}

      <AnimatedRoutes />
    </div>
  );

};
export default App
