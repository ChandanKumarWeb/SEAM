"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "YOUR_ACCESS_KEY_HERE",
        ...formData
      })
    });

    const result = await res.json();
    setIsSubmitting(false);
    
    if (result.success) {
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResponseMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white py-12 px-6 sm:px-12 md:px-20 lg:px-32 min-h-screen flex flex-col justify-center items-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-400">Contact Us</h1>
        <p className="text-gray-400 mb-6">Have any questions or need assistance? Reach out to us anytime.</p>
      </motion.div>
      
      <motion.form 
        onSubmit={handleSubmit} 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg w-full bg-opacity-10 bg-white backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700"
      >
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-semibold">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-semibold">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-semibold">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-36"
          />
        </div>
        
        <motion.button 
          type="submit" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-lg transition-all shadow-md"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </motion.button>
      </motion.form>

      {responseMessage && <p className="mt-4 text-gray-300">{responseMessage}</p>}

      {/* Social Media Links */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-8 space-x-6"
      >
        <a href="#" className="text-gray-400 hover:text-indigo-500 text-3xl transition-transform transform hover:scale-110"><FaFacebook /></a>
        <a href="https://www.instagram.com/seamofficial/" className="text-gray-400 hover:text-indigo-500 text-3xl transition-transform transform hover:scale-110"><FaInstagram /></a>
        <a href="#" className="text-gray-400 hover:text-indigo-500 text-3xl transition-transform transform hover:scale-110"><FaTwitter /></a>
        <a href="#" className="text-gray-400 hover:text-indigo-500 text-3xl transition-transform transform hover:scale-110"><FaWhatsapp /></a>
      </motion.div>
    </section>
  );
}

export default ContactForm;
