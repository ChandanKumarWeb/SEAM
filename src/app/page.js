import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Services/>
      <Testimonial/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
