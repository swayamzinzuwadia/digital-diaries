import React from 'react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Layout = ({ children }) => {
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-effect">
          <nav className="container py-5 relative">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Digital Diaries
              </Link>
              <div className="hidden md:flex items-center space-x-10">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/booking" className="nav-link">
                  Book Now
                </Link>
                <Link to="/packages" className="nav-link">
                  Packages
                </Link>
                <Link to="/login" className="btn-primary">
                  Sign In
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="relative bg-black/90">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="footer-heading">Digital Diaries</h3>
              <p className="text-neutral-400 leading-relaxed">
                Experience movies like never before with our private screening packages.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/booking" className="footer-link">
                    <span className="text-blue-500">→</span>
                    Book a Screen
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="footer-link">
                    <span className="text-blue-500">→</span>
                    Our Packages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="footer-heading">Contact</h3>
              <div className="space-y-3">
                <p className="footer-link">
                  <span className="text-blue-500">✉</span>
                  info@digitaldiaries.com
                </p>
                <p className="footer-link">
                  <span className="text-blue-500">☎</span>
                  +91 XXX XXX XXXX
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800/50 mt-12 pt-8 text-center">
            <p className="text-neutral-500">&copy; {new Date().getFullYear()} Digital Diaries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 