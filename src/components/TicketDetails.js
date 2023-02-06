import React from 'react'

const TicketDetails = () => {
  return (
    <>
      <table className='show-on-large-screen payment-table'>
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
        <tr>
          <td>
            <h5>selctedTicket</h5>
          </td>
          <td>cost amount</td>
          <td>1</td>
          <td>kes 4,500</td>
        </tr>
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
            <b>KES. 4,500</b>
          </td>
        </tr>
      </table>
    </>
  );
}

export default TicketDetails