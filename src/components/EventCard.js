import React from "react";
import {Link} from 'react-router-dom'

const EventCard = (props) => {
  return (
    <>
      <div className="eventCard">
        <Link to={`/${props.id}`}>
          <img className="eventCardImg " src={props.img} alt="img" />
        </Link>
        <table id="eventCardTable">
          <tr>
            <td>
              <h5 className="redtext">{props.date}</h5>
            </td>
            <td>
              <h4>{props.eventName}</h4>
            </td>
          </tr>

          <tr id="tableRowTwo">
            <td>
              <h5 className="redtext">{props.month}</h5>
            </td>
            <td>
              <p>{props.venue}</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to={`/${props.id}`}>
                <button className="btn btn-danger">Buy Tickets</button>   
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default EventCard;
