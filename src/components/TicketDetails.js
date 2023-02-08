import React, { useContext } from "react";
import { PriceContext } from "../contexts/appContext";

const TicketDetails = () => {
  const {
    totalCost,
    ticketToPay,
  } = useContext(PriceContext);

  return (
    <>
      <table className="show-on-large-screen payment-table">
        <tr>
          <th>Ticket details</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Ticket</td>
          <td>Cost</td>
          <td>Quantity</td>
          <td>Sub Total</td>
        </tr>
        
          {ticketToPay.map((ticket) => {
            return (
              <>
                <tr>
                <td>{ticket.name}</td>
                <td>{ticket.cost}</td>
                <td>{ticket.quantity}</td>
                <td>{ticket.subTotal}</td>
                </tr>
              </>
            );
          })}
        
        <tr>
          <td>
            <h5>Discount</h5>
          </td>
          <td></td>
          <td></td>
          <td>
            <b>Kes. 0</b>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Total</h5>
          </td>
          <td></td>
          <td></td>
          <td>
            <b>{totalCost}</b>
          </td>
        </tr>
      </table>
    </>
  );
};

export default TicketDetails;
