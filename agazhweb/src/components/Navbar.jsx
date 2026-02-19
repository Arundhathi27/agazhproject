import React, { useState, useEffect } from 'react';
import logoImg from '../Images/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

import { createPortal } from 'react-dom';

const smoothScrollTo = (href, e) => {
    if (e) e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.9;
            setScrolled(window.scrollY > heroHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            x: "-100%",
            rotateY: 90,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            x: "0%",
            rotateY: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: {
            x: -50,
            opacity: 0,
            rotateX: -20,
            scale: 0.9
        },
        open: {
            x: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    const navLinks = [
        { name: 'Home', href: '#home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'About Us', href: '#aboutus', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { name: 'Services', href: '#service', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { name: 'Events', href: '#events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group relative z-[10000]">
                        <img
                            src={logoImg}
                            alt="Agazh Avaiyam Logo"
                            className="h-12 w-12 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className={`text-xl font-bold font-sans tracking-tight transition-colors ${scrolled && !isOpen ? 'text-brand-dark' : 'text-white'}`}>
                            AGAZH<span className={scrolled && !isOpen ? 'text-brand-accent' : 'text-brand-tan'}>AVAIYAM</span>
                        </span>
                    </a>

                    {/* Mobile Menu Button - 3D Animated */}
                    <div className="md:hidden relative z-[10000]">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none transition-colors p-2 rounded-full ${isOpen ? 'bg-white/10 text-white' : (scrolled ? 'bg-brand-dark/5 text-brand-dark' : 'bg-black/20 text-white backdrop-blur-sm')}`}
                        >
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 8 }
                                    }}
                                    className={`w-6 h-0.5 rounded-full ${isOpen ? 'bg-white' : 'bg-current'}`}
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    className={`w-6 h-0.5 rounded-full ${isOpen ? 'bg-white' : 'bg-current'}`}
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -8 }
                                    }}
                                    className={`w-6 h-0.5 rounded-full ${isOpen ? 'bg-white' : 'bg-current'}`}
                                />
                            </motion.div>
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => smoothScrollTo(link.href, e)}
                                className={`text-xs font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-dark/70 hover:text-brand-dark' : 'text-white/80 hover:text-white'}`}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* CTA Button */}
                        <a href="#contactus" onClick={(e) => smoothScrollTo('#contactus', e)} className={`text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors shadow-lg ${scrolled ? 'bg-brand-accent text-white hover:bg-brand-brown' : 'bg-white text-brand-dark hover:bg-brand-tan'}`}>
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer - Portaled out to avoid stacking context issues */}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* 3D Sidebar Container */}
                            <div className="fixed inset-0 z-[9999] md:hidden pointer-events-none perspective-[2000px]">
                                <motion.div
                                    variants={menuVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="absolute top-0 left-0 w-[85%] max-w-sm h-full bg-gradient-to-br from-brand-dark via-[#2a1e1a] to-brand-dark shadow-2xl pointer-events-auto origin-left overflow-hidden border-r border-white/5"
                                >
                                    {/* Background Decorations */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 50% 50%, #D7CCC8 1px, transparent 1px)`,
                                            backgroundSize: '30px 30px'
                                        }} />
                                    </div>

                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute -top-20 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"
                                    />

                                    {/* Drawer Header Content */}
                                    <div className="p-8 pt-24 relative z-10">
                                        <motion.div variants={linkVariants} className="space-y-2 mb-10">
                                            <p className="text-brand-tan/60 text-xs font-mono uppercase tracking-widest">Navigation</p>
                                            <div className="h-px w-12 bg-brand-accent/50"></div>
                                        </motion.div>

                                        {/* Navigation Links */}
                                        <div className="flex flex-col space-y-4">
                                            {navLinks.map((link) => (
                                                <motion.a
                                                    href={link.href}
                                                    key={link.name}
                                                    variants={linkVariants}
                                                    whileHover={{ x: 10, scale: 1.02 }}
                                                    onClick={(e) => { smoothScrollTo(link.href, e); setIsOpen(false); }}
                                                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-tan/20 transition-all duration-300 active:scale-95"
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-brand-tan/10 flex items-center justify-center text-brand-tan group-hover:bg-brand-tan group-hover:text-brand-dark transition-colors duration-300">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path>
                                                        </svg>
                                                    </div>
                                                    <span className="text-white font-display text-lg tracking-wide group-hover:text-brand-tan transition-colors">
                                                        {link.name}
                                                    </span>

                                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                                        <svg className="w-5 h-5 text-brand-tan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                        </svg>
                                                    </div>
                                                </motion.a>
                                            ))}

                                            {/* Contact Link Special */}
                                            <motion.div variants={linkVariants} className="pt-6">
                                                <a
                                                    href="#contactus"
                                                    onClick={(e) => { smoothScrollTo('#contactus', e); setIsOpen(false); }}
                                                    className="relative group block w-full text-center py-4 bg-gradient-to-r from-brand-accent to-brand-brown rounded-xl overflow-hidden shadow-lg shadow-brand-accent/20"
                                                >
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                    <span className="relative z-10 text-white font-bold text-sm uppercase tracking-widest">
                                                        Contact Us
                                                    </span>
                                                </a>
                                            </motion.div>
                                        </div>

                                        {/* Footer Info */}
                                        <motion.div variants={linkVariants} className="absolute bottom-8 left-8 right-8">
                                            <div className="flex items-center gap-3 opacity-50">
                                                <div className="w-2 h-2 rounded-full bg-brand-tan animate-pulse"></div>
                                                <span className="text-white/60 text-[10px] uppercase tracking-widest">Based in Tamil Nadu</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Navbar;
