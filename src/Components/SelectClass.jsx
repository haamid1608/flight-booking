import React, { useState } from "react";
import ClassStyle from "./selectClass.css";

export default function SelectClass(props) {
  const { flightDetails, setFlightDetails } = props;
  const [seatClass, setSeatClass] = useState();

  function selectClass(e) {
    const seatType = e.target.value;
    setSeatClass(seatType);
    setFlightDetails({ ...flightDetails, seatClass: seatType });
  }

  console.log(seatClass);
  return (
    <>
      <div className="class-wrapper bgr-col">
        <div className="class-label pd-10">Select Class</div>
        <div className="class-options">
          <div className="eco-first col-6  pdl-2">
            <div className="input-check">
              <input
                onClick={(e) => selectClass(e)}
                type="radio"
                name="seat-class"
                id="economy"
                value="Economy"
                className="mgr-5"
                defaultChecked="checked"
              />
              <label for="economy">Economy</label>
              <br />
            </div>
            <div className="input-check">
              <input
                onClick={(e) => selectClass(e)}
                className="mgr-5"
                type="radio"
                name="seat-class"
                id="first-class"
                value="First Class"
              />
              <label for="first-class"> First Class</label>
              <br />
            </div>
          </div>
          <div className="prem-business col-6 pdl-2">
            <div className="input-check">
              <input
                onClick={(e) => selectClass(e)}
                className="mgr-5"
                type="radio"
                name="seat-class"
                id="premium-economy"
                value="Premium Economy"
              />
              <label for="premium-economy">Premium Economy</label>
              <br />
            </div>
            <div className="input-check">
              <input
                onClick={(e) => selectClass(e)}
                className="mgr-5"
                type="radio"
                name="seat-class"
                id="business-class"
                value="Business Class"
              />
              <label for="business-class"> Business Class</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
