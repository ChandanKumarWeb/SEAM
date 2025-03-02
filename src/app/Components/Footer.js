"use client";

import { color, motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white py-10 mt-2 border-t border-indigo-600"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap justify-between">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-indigo-500">S.E.A.M</h2>
          <p className="mt-2 text-gray-400">Your trusted e-rickshaw service center with expert repair solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-indigo-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="#services" className="text-gray-400 hover:text-indigo-500">Services</Link></li>
            <li><Link href="#why-us" className="text-gray-400 hover:text-indigo-500">Testimonials</Link></li>
            <li><Link href="#contact" className="text-gray-400 hover:text-indigo-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-indigo-400">Connect With Us</h3>
          <div className="flex space-x-4 mt-3">
            <Link href="#" className="text-gray-400 hover:text-indigo-500 text-2xl"><FaFacebook /></Link>
            <Link href="https://www.instagram.com/seamofficial/" className="text-gray-400 hover:text-indigo-500 text-2xl"><FaInstagram /></Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-500 text-2xl"><FaTwitter /></Link>
            <Link href="#" className="text-gray-400 hover:text-indigo-500 text-2xl"><FaWhatsapp /></Link>
          </div>
          <p className="mt-4 text-gray-400">Email: seamofficial2023@gmail.com</p>
          <p className="text-gray-400">Phone: +91 9436826900</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Sankalp Electra. All rights reserved.
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        Developed and Maintained by <span style={{color:"cornflowerblue", fontSize:"15px"}}> <a href="https://its-chandan-portfolio.netlify.app/">Chandan.Dev</a></span>
      </div>
    </motion.footer>
  );
}

export default Footer;
