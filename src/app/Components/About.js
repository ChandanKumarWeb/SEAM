"use client";
import Image from "next/image";
import aboutImg from "../images/About us.webp";
import { motion, useSpring, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const { scrollYProgress } = useScroll();
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
          zIndex: 1000, // Ensures it stays above content
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
          />

          {/* Animated Heading */}
          <motion.h1
            className="heading border-b border-solid border-indigo-600 tlt"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
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
              Welcome to <strong>Sankalp Electra Auto Motive</strong>! We offer
              reliable and high-quality maintenance and repair services for your
              e-rickshaw. Our experienced technicians are dedicated to providing
              every type of service tailored to the unique needs of e-rickshaws.
              Whether it’s battery replacement, motor repair, or routine
              inspections, we make every effort to keep your vehicle efficient
              and safe. Trust <strong>Sankalp Electra Auto Motive</strong> to
              help maintain your e-rickshaw in excellent condition for years to
              come.
            </motion.p>
            <br />
            <motion.p
              className="animate__animated"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            >
              <strong>संकल्प इलेक्ट्रा ऑटो मोटिव</strong> में आपका स्वागत है! हम
              आपके ई-रिक्शा के लिए विश्वसनीय और उच्च गुणवत्ता वाली मेंटेनेंस
              एवं रिपेयर सेवाएं प्रदान करते हैं। हमारे अनुभवी तकनीशियन
              ई-रिक्शा की विशेष जरूरतों को ध्यान में रखते हुए हर प्रकार की सेवा
              प्रदान करने के लिए समर्पित हैं। चाहे बैटरी बदलनी हो, मोटर की
              मरम्मत करनी हो, या नियमित जांच-पड़ताल की आवश्यकता हो, हम आपके
              वाहन को कुशल और सुरक्षित बनाए रखने के लिए हरसंभव प्रयास करते हैं।
              <strong> संकल्प इलेक्ट्रा ऑटो मोटिव</strong> पर भरोसा करें और
              अपने ई-रिक्शा को लंबे समय तक शानदार स्थिति में बनाए रखें।
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
