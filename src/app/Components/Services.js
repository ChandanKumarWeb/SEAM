"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServicesBox from "./ServicesBox";
import serviceImg from "../images/ServicesOffered.webp";
import services from "../images/RepairIcon.webp";
import motorRepair from "../images/motorRepair.webp";
import wiring from "../images/Wiring.webp";
import Expertice from "../images/Trusted expertice.webp"
function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="service mt-2 border-t border-b border-solid border-indigo-600"
    >
      <div className="serviceSection">
        {/* Section Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            className="serviceImage"
            src={serviceImg}
            width={2000}
            height={2000}
            alt="service image"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="heading border-b border-solid border-indigo-600 tlt"
        >
          Services Offered
        </motion.h1>

        {/* Service Cards */}
        <div className="cards">
          <div className="container">
            <div className="grid grid-cols-3 gap-4">
              {[ 
                { img: services, alt: "repair", name: "Mechanical Repairing" },
                { img: motorRepair, alt: "motor repair", name: "Motor Repair" },
                { img: wiring, alt: "Wiring", name: "Electrical Services" },
                { img: Expertice, alt: "repair", name: "Trusted Expertise" },
                { img: motorRepair, alt: "motor repair", name: "Motor Repair" },
                { img: wiring, alt: "Wiring", name: "Electrical Services" },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <ServicesBox 
                    imgs={service.img} 
                    alternate={service.alt} 
                    serName={service.name} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
