import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import StructuredData from './components/StructuredData';

const Home = React.lazy(() => import('./pages/Home'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Always scroll to top on route change
        
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash]);

    return null;
};

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Router basename={import.meta.env.BASE_URL}>
            <StructuredData />
            <ScrollToHash />
            <main className="antialiased">
                <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-brand-dark text-brand-tan">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<AboutUsPage />} />
                    </Routes>
                </Suspense>
            </main>
        </Router>
    );
};

export default App;

