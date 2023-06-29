import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import servicesImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
       <Navbar />
        <Hero 
          cName="about"
          heroImg = { servicesImg}
          title = "Services"
          btnClass = "show-about"
        />
        <Trip />
        <Footer />
    </>
  );
}

export default Service;
