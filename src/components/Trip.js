import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Yoy can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData 
        image = {Trip1}
        heading = "Trip In Indonesia"
        text = "Indonesia, officially the Republic of Indonesia, is a countary in southeast Asia and Oceania Bettween The Indian and Pacific Oceans "
        />
        <TripData 
        image = {Trip2}
        heading = "Trip In Indonesia"
        text = "Indonesia, officially the Republic of Indonesia, is a countary in southeast Asia and Oceania Bettween The Indian and Pacific Oceans "
        />
        <TripData 
        image = {Trip3}
        heading = "Trip In Indonesia"
        text = "Indonesia, officially the Republic of Indonesia, is a countary in southeast Asia and Oceania Bettween The Indian and Pacific Oceans "
        />
      </div>
    </div>
  );
}

export default Trip;
