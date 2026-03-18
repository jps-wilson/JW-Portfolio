// Importing React Router
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import AnimatedPage from "./components/ui/AnimatedPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Pressure from "./pages/Pressure";
import Deadwax from "./pages/Deadwax";
import Nontendo from "./pages/Nontendo";
import Momentum from "./pages/Momentum";
import "./styles/app.css";

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <Navigation />
      <main className='app__main'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/'
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path='/about'
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />
            <Route
              path='/work'
              element={
                <AnimatedPage>
                  <Work />
                </AnimatedPage>
              }
            />
            <Route
              path='/contact'
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />
            <Route
              path='/work/pressure'
              element={
                <AnimatedPage>
                  <Pressure />
                </AnimatedPage>
              }
            />
            <Route
              path='/work/deadwax'
              element={
                <AnimatedPage>
                  <Deadwax />
                </AnimatedPage>
              }
            />
            <Route
              path='/work/nontendo'
              element={
                <AnimatedPage>
                  <Nontendo />
                </AnimatedPage>
              }
            />
            <Route
              path='/work/momentum'
              element={
                <AnimatedPage>
                  <Momentum />
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
