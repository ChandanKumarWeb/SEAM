"use client"
import Image from 'next/image';
import Link from 'next/link';
import Seam from "../images/Seam.jpg"
import mainImg from "../images/SeamLapi.webp"
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div className='border-b border-solid border-indigo-600' >
         <Image className='mainImg'
          src={mainImg}
          width={1080}
          height={1080}
          alt="main img"
        />
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <Image className='rounded-full'
                  src={Seam}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="navMain h-screen md:h-auto items-center justify-center md:flex bg-black rounded-md">
                <li className="text-sm text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About Us
                  </Link>
                </li>
                <li className=" text-sm text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                  Services Offered
                  </Link>
                </li>
                <li className="text-sm text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Customer Testimonials
                  </Link>
                </li>
                <li className="text-sm text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Why Choose Us
                  </Link>
                </li>
                <li className="text-sm text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Contact Information
                  </Link>
                </li>
                <li className="text-sm text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  FAQ Section
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='introduction'>
        <div className="intro">
          <h1 className="animate__animated animate__backInLeft introText">Welcome to Sankalp Electra Auto Motive! We are your trusted partner for comprehensive e-rickshaw maintenance and repair services. Our team of skilled technicians is dedicated to keeping your electric vehicle in peak condition, ensuring safety, reliability, and efficiency every step of the way. Whether you need a routine checkup, battery replacement, or complex repairs, we provide fast, affordable solutions tailored to meet your needs. Choose Sankalp Electra Auto Motive for quality service and expert care for your e-rickshaw.</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
