import Head from "next/head";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SEAM Services - E-Rickshaw Repair & Maintenance</title>
        <meta name="description" content="SEAM Services provides expert e-rickshaw repair, battery replacement, and maintenance solutions. Reliable and affordable services to keep your e-rickshaw running smoothly." />
        <meta name="keywords" content="e-rickshaw service, e-rickshaw repair, e-rickshaw battery replacement, electric vehicle service, SEAM Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags (for better social media previews) */}
        <meta property="og:title" content="SEAM Services - E-Rickshaw Repair & Maintenance" />
        <meta property="og:description" content="Reliable e-rickshaw repair and maintenance services to keep your vehicle in top condition." />
        <meta property="og:image" content="https://seam-services.netlify.app/your-image.jpg" />
        <meta property="og:url" content="https://seam-services.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEAM Services - E-Rickshaw Repair & Maintenance" />
        <meta name="twitter:description" content="Expert e-rickshaw repair and battery replacement services." />
        <meta name="twitter:image" content="https://seam-services.netlify.app/your-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://seam-services.netlify.app/" />
      </Head>

      <div>
        <NavBar />
        <About />
        <Services />
        <Testimonial />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
