import React, { useEffect, useState } from "react";
import { useNavigate, Link,useParams } from "react-router-dom";
import minus from "../assets/image/minus.png";
import add from "../assets/image/add.png";

const Prices = () => {
  const [advance, setAdvance] = useState(1000);
  const [advanceTotal, setAdvanceTotal] = useState();
  const [group, setGroup] = useState(4500);
  const [groupTotal, setGroupTotal] = useState();
  const [totalCost, setTotalCost] = useState(0);

  const [advancePriceInput, setAdvancePriceInput] = useState(0);
  const [groupPriceInput, setGroupPriceInput] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setAdvanceTotal(advance * advancePriceInput);
  }, [advancePriceInput]);

  useEffect(() => {
    setGroupTotal(group * groupPriceInput);
  }, [groupPriceInput]);

  useEffect(() => {
    setTotalCost(advanceTotal + groupTotal);
  }, [advanceTotal, groupTotal]);

  const {id} = useParams()
  const navigate = useNavigate();

   const handlePurchasebtn = () => {
     if (totalCost > 0) {
       navigate(`/Payment/${id}`); 
     } else {
       setShowAlert(true);
       clearAlert();
     }
   };

  const clearAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
    <>
      <div className="moreInfoPriceDiv">
        <table className="priceTable">
          <tr>
            <td>
              <h5>Ticket</h5>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <h5>Advance</h5>
            </td>
            <td>
              <p>{Number(advance).toLocaleString("en")}</p>
            </td>

            <td>
              <div className="td-style">
                <div>
                  <img
                    className="addminus-icon"
                    onClick={(e) => setAdvancePriceInput(advancePriceInput + 1)}
                    src={add}
                    alt=""
                  />
                </div>

                <div>
                  <input
                    className="priceInput"
                    type="text"
                    pattern="[0-9]*"
                    name="advanceInput"
                    value={advancePriceInput}
                    onChange={(e) =>
                      setAdvancePriceInput((v) =>
                        e.target.validity.valid ? Number(e.target.value) : v
                      )
                    }
                  />
                </div>
                <div>
                  <img
                    className="addminus-icon"
                    src={minus}
                    onClick={(e) =>
                      setAdvancePriceInput((prevState) => {
                        if (prevState > 0) {
                          return prevState - 1;
                        } else {
                          return setAdvancePriceInput(0);
                        }
                      })
                    }
                    alt=""
                  />
                </div>
              </div>
            </td>
            <td>{Number(advanceTotal).toLocaleString("en")}</td>
          </tr>

          <tr className="gaterow">
            <td>
              <p>Gate</p>
            </td>
            <td>
              <p>1,500</p>
            </td>
            <td>
              <div className="td-style">
                <div>
                  <img src={add} className="addminus-icon" alt="" />
                </div>
                <div>
                  <input className="priceInput" type="text" disabled />{" "}
                </div>
                <div>
                  <img src={minus} className="addminus-icon" alt="" />
                </div>
              </div>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <p>Group of 5</p>
            </td>
            <td>
              <p>{Number(group).toLocaleString("en")}</p>
            </td>
            <td>
              <div className="td-style">
                <div>
                  <img
                    className="addminus-icon"
                    onClick={(e) => setGroupPriceInput(groupPriceInput + 1)}
                    src={add}
                    alt=""
                  />
                </div>
                <div>
                  <input
                    className="priceInput"
                    type="text"
                    pattern="[0-9]*"
                    value={groupPriceInput}
                    onChange={(e) =>
                      setGroupPriceInput((v) =>
                        e.target.validity.valid ? Number(e.target.value) : v
                      )
                    }
                  />
                </div>
                <div>
                  <img
                    src={minus}
                    className="addminus-icon"
                    onClick={(e) =>
                      setGroupPriceInput((prevGroupPriceInput) => {
                        if (prevGroupPriceInput > 0) {
                          return prevGroupPriceInput - 1;
                        } else {
                          return setGroupPriceInput(0);
                        }
                      })
                    }
                    alt=""
                  />
                </div>
              </div>
            </td>
            <td>{Number(groupTotal).toLocaleString("en")}</td>
          </tr>
          <tr>
            <td>
              <h5>Discount</h5>
            </td>
            <td></td>
            <td>
              <p> KES. 0</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td></td>
            <td>
              <b>KES. {Number(totalCost).toLocaleString("en")} </b>
            </td>
            <td></td>
          </tr>
        </table>
        <div>
          <p className="policyText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <Link to="/TermsConditions"> Terms and Conditions</Link> Quibusdam
            natus iste atque alias sunt animi optio repellat odit repellendus,
            dignissimos, autem quisquam tenetur ipsa molestias minus, corrupti
            numquam quo eligendi.
          </p>

          {/* set up Logic to check if atleast one ticket is selected */}
          <div className="alert-space">
            {showAlert && (
              <p className="alert-purchase-btn">
                Please select at least One Ticket to proceed.
              </p>
            )}
          </div>

          <button className=" btnPurchaseTicket" onClick={handlePurchasebtn}>
            <p className="btnPurchaseTicket-text">Purchase Ticket</p>
            <p
              className={`btnPurchaseTicket-text ${
                totalCost === 0 ? "displayPay" : ""
              } `}
            >
              Pay {Number(totalCost).toLocaleString("en")} /-
            </p>
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Prices;
