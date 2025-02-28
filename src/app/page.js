import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
export default function Home() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Services/>
      <Testimonial/>
    </div>
  );
}
