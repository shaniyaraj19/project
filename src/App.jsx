import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Features from './pages/Features';
import UseCases from './pages/UseCases';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Security from './pages/Security';
import Careers from './pages/Careers';
import StartFreeTrial from './pages/StartFreeTrial';
import ScheduleDemo from './pages/ScheduleDemo';
import BlogPost from './pages/BlogPost';
// import NotFound from './pages/NotFound';

// Wrapper component to access location context
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="features" element={
          <PageTransition>
            <Features />
          </PageTransition>
        } />
        <Route path="use-cases" element={
          <PageTransition>
            <UseCases />
          </PageTransition>
        } />
        <Route path="case-studies" element={
          <PageTransition>
            <CaseStudies />
          </PageTransition>
        } />
        <Route path="pricing" element={
          <PageTransition>
            <Pricing />
          </PageTransition>
        } />
        <Route path="blog" element={
          <PageTransition>
            <Blog />
          </PageTransition>
        } />
        <Route path="about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="privacy" element={
          <PageTransition>
            <PrivacyPolicy />
          </PageTransition>
        } />
        <Route path="terms" element={
          <PageTransition>
            <TermsOfService />
          </PageTransition>
        } />
        <Route path="security" element={
          <PageTransition>
            <Security />
          </PageTransition>
        } />
        <Route path="careers" element={
          <PageTransition>
            <Careers />
          </PageTransition>
        } />
        <Route path="start-free-trial" element={
          <PageTransition>
            <StartFreeTrial />
          </PageTransition>
        } />
        <Route path="schedule-demo" element={
          <PageTransition>
            <ScheduleDemo />
          </PageTransition>
        } />
        <Route path="blog/:id" element={
          <PageTransition>
            <BlogPost />
          </PageTransition>
        } />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <BrowserRouter>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && <AppRoutes />}
    </BrowserRouter>
  );
}

export default App;
