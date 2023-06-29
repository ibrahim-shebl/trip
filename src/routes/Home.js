import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img1 from '../assets/12.jpg';
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
        <Hero 
          cName="hero"
          heroImg = {img1}
          title = "Your Journey Your Story"
          text = "Choose Your Favourite Destination"
          url = "/"
          btnClass = "show"
          buttonText = "Travel Plan"
          
        />
        <Destination />
        <Trip />
        <Footer />
    </>
  );
}

export default Home;
