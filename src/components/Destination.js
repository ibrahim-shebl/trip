import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";


const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunityto see a lot, within a time frame</p>
      <DestinationData 
         className ="first-des"
         heading = "Taal Volcano, Batanges"
         text="one of the most iconic view in luzon, Mt. Taal boasts a volcano inside, if you fancy a closer look.one of the most iconic view in luzon, Mt. Taal boasts a volcano inside, if you fancy a closer look."
         img1={Mountain1}
         img2={Mountain2}
      />

<DestinationData 
      className ="first-des-reverse"
      heading = "Mr. Daguldul, Batanges"
      text="one of the most iconic view in luzon, Mt. Taal boasts a volcano inside, if you fancy a closer look.one of the most iconic view in luzon, Mt. Taal boasts a volcano inside, if you fancy a closer look."
      img1={Mountain3}
      img2={Mountain4}
   />
    </div>
  );
};

export default Destination;
