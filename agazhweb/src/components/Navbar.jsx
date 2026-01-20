import React, { useState, useEffect } from 'react';
import logoImg from '../Images/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change state only after scrolling past most of the hero banner (approx 90vh)
            const heroHeight = window.innerHeight * 0.9;
            setScrolled(window.scrollY > heroHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Domain', 'Hosting', 'Blog']; // Adapted based on reference feel, mapped to our sections below

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src={logoImg}
                        alt="Agazh Avaiyam Logo"
                        className="h-12 w-12 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className={`text-xl font-bold font-sans tracking-tight transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                        AGAZH<span className={scrolled ? 'text-brand-accent' : 'text-brand-tan'}>AVAIYAM</span>
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-brand-dark' : 'text-white'} focus:outline-none transition-colors`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
                    </button>
                </div>

                {/* Desktop Links - Centered/Right Layout */}
                <div className="hidden md:flex items-center space-x-10">
                    <a href="#home" className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-accent' : 'text-white hover:text-brand-tan'}`}>Home</a>
                    <a href="#aboutus" className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-dark/70 hover:text-brand-dark' : 'text-white/80 hover:text-white'}`}>About</a>
                    <a href="#service" className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-dark/70 hover:text-brand-dark' : 'text-white/80 hover:text-white'}`}>Service</a>
                    <a href="#events" className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-dark/70 hover:text-brand-dark' : 'text-white/80 hover:text-white'}`}>Events</a>

                    {/* CTA Button */}
                    <a href="#contactus" className={`text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors shadow-lg ${scrolled ? 'bg-brand-accent text-white hover:bg-brand-brown' : 'bg-white text-brand-dark hover:bg-brand-tan'}`}>
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Sidebar Drawer */}
                <div className={`absolute top-0 left-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                        <div className="flex items-center gap-3">
                             <img src={logoImg} alt="Logo" className="h-10 w-10 object-cover rounded-full shadow-sm border border-brand-tan/20" />
                             <div>
                                <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider">Agazh Avaiyam</h3>
                                <p className="text-[10px] text-brand-dark/50 uppercase tracking-widest">Excavate. Explore.</p>
                             </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-brand-dark transition-colors p-1 bg-white rounded-full shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col p-6 space-y-1">
                        
                        <a href="#home" className="flex items-center gap-4 px-4 py-3 text-brand-dark hover:bg-brand-light rounded-lg group transition-colors" onClick={() => setIsOpen(false)}>
                            <svg className="w-5 h-5 text-brand-brown/70 group-hover:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            <span className="font-semibold text-sm tracking-wide">Home</span>
                        </a>

                        <a href="#aboutus" className="flex items-center gap-4 px-4 py-3 text-brand-dark hover:bg-brand-light rounded-lg group transition-colors" onClick={() => setIsOpen(false)}>
                            <svg className="w-5 h-5 text-brand-brown/70 group-hover:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="font-semibold text-sm tracking-wide">About Us</span>
                        </a>

                        <a href="#service" className="flex items-center gap-4 px-4 py-3 text-brand-dark hover:bg-brand-light rounded-lg group transition-colors" onClick={() => setIsOpen(false)}>
                            <svg className="w-5 h-5 text-brand-brown/70 group-hover:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span className="font-semibold text-sm tracking-wide">Services</span>
                        </a>

                        <a href="#events" className="flex items-center gap-4 px-4 py-3 text-brand-dark hover:bg-brand-light rounded-lg group transition-colors" onClick={() => setIsOpen(false)}>
                            <svg className="w-5 h-5 text-brand-brown/70 group-hover:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <span className="font-semibold text-sm tracking-wide">Events</span>
                        </a>
                        
                        <div className="pt-6 mt-6 border-t border-gray-100">
                             <a href="#contactus" className="flex items-center justify-center w-full bg-brand-dark text-white font-bold text-xs uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-brand-brown/20 hover:bg-brand-accent transition-all hover:-translate-y-0.5" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;