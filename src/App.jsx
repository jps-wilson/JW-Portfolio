import ErrorBoundary from "./components/ui/ErrorBoundary";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import AnimatedPage from "./components/ui/AnimatedPage";
import BackToTop from "./components/ui/BackToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Pressure = lazy(() => import("./pages/Pressure"));
const Deadwax = lazy(() => import("./pages/Deadwax"));
const Nontendo = lazy(() => import("./pages/Nontendo"));
const Momentum = lazy(() => import("./pages/Momentum"));
const Margin = lazy(() => import("./pages/Margin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Resume = lazy(() => import("./pages/Resume"));

import "./styles/app.css";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <div className='app'>
      <Navigation />
      <main className='app__main'>
        <ErrorBoundary>
          <Suspense fallback={null}>
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
                <Route
                  path='/work/margin'
                  element={
                    <AnimatedPage>
                      <Margin />
                    </AnimatedPage>
                  }
                />
                <Route
                  path='/resume'
                  element={
                    <AnimatedPage>
                      <Resume />
                    </AnimatedPage>
                  }
                />
                <Route
                  path='*'
                  element={
                    <AnimatedPage>
                      <NotFound />
                    </AnimatedPage>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </main>
      {!hideFooter && <Footer />}
      <BackToTop />
    </div>
  );
}

export default App;
