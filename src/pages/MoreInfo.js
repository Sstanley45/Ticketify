import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams ,Link} from "react-router-dom";
import { Data } from "../components/data.js";
import Prices from "../components/Prices";
import Footer from "../components/Footer";
import home from '../assets/image/home.png'


const MoreInfo = () => {
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(''); 

  
  useEffect(() => {
    const singleEvent = Data.find((event) => event.id === parseInt(id));
    setSelectedEvent(singleEvent);
  }, [id]);

  
  return (
    <>
      <Navbar />
      <section className="moreInfoSection">
        <div className="moreInfoDiv">
          <img className="moreInfoImg" src={selectedEvent.img} alt="img" />

          <table id="eventCardTable">
            <tr>
              <td>
                <h5 className="redtext">{selectedEvent.date}</h5>
              </td>
              <td>
                <h4>{selectedEvent.eventName}</h4>
              </td>
            </tr>

            <tr id="tableRowTwo">
              <td>
                <h5 className="redtext">{selectedEvent.month}</h5>
              </td>
              <td>
                <p>{selectedEvent.venue}</p>
              </td>
            </tr>
            <tr>
              <td></td>

              <td>
                <p>{selectedEvent.description}</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                {" "}
                <Link to="/">
                  <img src={home} alt="" />
                </Link> Back
              </td>
            </tr>
          </table>
        </div>

        <Prices />
      </section>
      <Footer />
    </>
  );
};
      
export default MoreInfo ;
