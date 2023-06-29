import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
       <Navbar />
        <Hero 
          cName="about"
          heroImg = {ContactImg}
          title = "Contact"
          btnClass = "show-about"
        />
        <ContactForm />
        <Footer />
    </>
  );
}

export default Contact;
