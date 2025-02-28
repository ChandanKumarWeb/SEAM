"use client";
import Image from "next/image";
import aboutImg from "../images/About us.webp";
import { motion, useSpring, useScroll, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function About() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollYProgress(scrollTop / windowHeight);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Ref for detecting when the section is in view
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#fff",
          borderRadius: "15px",
          zIndex: 1000,
        }}
      />

      {/* About Section */}
      <div ref={aboutRef} className="about mt-2 border-t border-b border-solid border-indigo-600">
        <div className="aboutSection">
          {/* Image */}
          <Image
            className="aboutImg"
            src={aboutImg}
            width={1080}
            height={1080}
            alt="about img"
            priority
          />

          {/* Animated Heading */}
          <motion.h1
            className="heading border-b border-solid border-indigo-600 tlt"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 10, ease: "easeOut" }}
          >
            About Us
          </motion.h1>

          {/* Animated Paragraphs */}
          <div className="peragraph">
            <motion.p
              className="animate__animated"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            >
              Welcome to <strong>Sankalp Electra Auto Motive</strong>! We offer reliable and high-quality maintenance and repair services for your e-rickshaw.
            </motion.p>
            <br />
            <motion.p
              className="animate__animated"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            >
              <strong>संकल्प इलेक्ट्रा ऑटो मोटिव</strong> में आपका स्वागत है! हम आपके ई-रिक्शा के लिए विश्वसनीय और उच्च गुणवत्ता वाली सेवाएं प्रदान करते हैं।
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
