"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Seam from "../images/Seam.jpg";
import mainImg from "../images/SeamLapi.webp";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScrollIndicator = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollWidth(scrollPercentage);
      };

      window.addEventListener("scroll", updateScrollIndicator);
      return () => window.removeEventListener("scroll", updateScrollIndicator);
    }
  }, []);

  if (!isClient) return null; 

  return (
    <div className="relative">
      {/* Scroll Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-purple-600 z-50" style={{ width: `${scrollWidth}%` }}></div>

      {/* Header Image */}
      <div className="border-b border-solid border-indigo-600">
        <Image className="mainImg" src={mainImg} width={1080} height={1080} alt="Main Image" priority />

        {/* Navbar */}
        <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-transparent bg-opacity-70">
          <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:px-8 py-3">
            {/* Logo */}
            <Link href="/">
              <Image className="rounded-full" src={Seam} width={50} height={50} alt="Logo" priority />
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-white" onClick={() => setNavbar(!navbar)}>
                <Image src={navbar ? "/close.svg" : "/hamburger-menu.svg"} width={30} height={30} alt="Menu" priority />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex bg-black bg-opacity-70 p-2 rounded-2xl">
              <ul className="navMain flex items-center space-x-6 text-white">
                <li><a href="#about" className="hover:text-purple-600">About Us</a></li>
                <li><a href="#services" className="hover:text-purple-600">Services Offered</a></li>
                <li><a href="#why-us" className="hover:text-purple-600">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-purple-600">Contact Information</a></li>
                <li><a href="#faq" className="hover:text-purple-600">FAQ Section</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          {navbar && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 z-10">
              <ul className="flex flex-col items-center space-y-4 py-4 text-white">
                <li><a href="#about" onClick={() => setNavbar(false)}>About Us</a></li>
                <li><a href="#services" onClick={() => setNavbar(false)}>Services Offered</a></li>
                <li><a href="#why-us" onClick={() => setNavbar(false)}>Why Choose Us</a></li>
                <li><a href="#contact" onClick={() => setNavbar(false)}>Contact Information</a></li>
                <li><a href="#faq" onClick={() => setNavbar(false)}>FAQ Section</a></li>
              </ul>
            </div>
          )}
        </nav>

        {/* Introduction Section */}
        <div className="introduction">
          <div className="intro">
            <h1 className="animate__animated animate__backInLeft introText">
              Welcome to Sankalp Electra Auto Motive! We are your trusted partner for comprehensive e-rickshaw maintenance and repair services.
              Our team of skilled technicians is dedicated to keeping your electric vehicle in peak condition, ensuring safety, reliability, and efficiency every step of the way.
              Whether you need a routine checkup, battery replacement, or complex repairs, we provide fast, affordable solutions tailored to meet your needs.
              Choose Sankalp Electra Auto Motive for quality service and expert care for your e-rickshaw.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
