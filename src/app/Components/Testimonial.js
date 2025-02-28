"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialBg from "../images/Testimonial-Img/Testimonial_BG.webp";
import user1 from "../images/Testimonial-Img/user_1.jpeg";
import user2 from "../images/Testimonial-Img/user_1.jpeg";
import user3 from "../images/Testimonial-Img/user_1.jpeg";

const testimonials = [
  {
    id: 1,
    img: user1,
    name: "John Doe",
    review: "Amazing service! Highly professional and quick repairs.",
  },
  {
    id: 2,
    img: user2,
    name: "Sarah Smith",
    review: "Trustworthy and efficient. My e-rickshaw is running perfectly!",
  },
  {
    id: 3,
    img: user3,
    name: "Michael Brown",
    review: "Excellent customer service and skilled technicians.",
  },
];

function Testimonial() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { rootMargin: "-100px" }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="testimonial-section relative mt-2 border-t border-b border-solid border-indigo-600 bg-black bg-opacity-60 text-white py-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={testimonialBg}
          alt="Testimonial Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative text-center text-2xl md:text-4xl font-bold mb-6"
      >
        What Our Customers Say
      </motion.h1>

      {/* Carousel */}
      <div className="relative w-full max-w-3xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map(({ id, img, name, review }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
            >
              <Image
                src={img}
                alt={name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-lg italic">"{review}"</p>
              <h2 className="mt-4 font-semibold text-xl">{name}</h2>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}

export default Testimonial;
