import React, { useState } from "react";
import TravellerStyle from "./travellerAndFareType.css";

export default function TravellerAndFareType(props) {
  const {
    adultCount,
    setAdultCount,
    childrenCount,
    setChildrenCount,
    infantCount,
    setInfantCount,
  } = props;

  function addAdult() {
    setAdultCount((prev) => prev + 1);
  }

  function removeAdult() {
    setAdultCount((prev) => prev - 1);
  }
  function addChild() {
    setChildrenCount((prev) => prev + 1);
  }

  function removeChild() {
    setChildrenCount((prev) => prev - 1);
  }
  function addInfant() {
    setInfantCount((prev) => prev + 1);
  }

  function removeInfant() {
    setInfantCount((prev) => prev - 1);
  }

  return (
    <>
      <div className="wrapper">
        <div className="travellers">
          <div className="traveller-label">Travellers</div>
          <div className="container">
            <div className="row">
              <div className="traveller-type-wrapper">
                <div className="traveller-type col-6">
                  <div className="traveller-category">Adults</div>
                  <div className="category-description">Older +12 years</div>
                </div>
                <div className="button-wrapper col-6">
                  <button
                    type="submit"
                    className="subtract"
                    disabled={adultCount === 0}
                    onClick={removeAdult}
                  >
                    -
                  </button>
                  <button
                    type="submit"
                    className={adultCount === 0 ? "add btn-dis" : "add"}
                    onClick={addAdult}
                  >
                    {adultCount}+
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="traveller-type-wrapper">
                <div className="traveller-type col-6">
                  <div className="traveller-category">Children</div>
                  <div className="category-description">Age 2 - 12 years</div>
                </div>
                <div className="button-wrapper col-6">
                  <button
                    type="submit"
                    className="subtract"
                    disabled={childrenCount === 0}
                    onClick={removeChild}
                  >
                    -
                  </button>
                  <button
                    type="submit"
                    className={childrenCount === 0 ? "add btn-dis" : "add"}
                    onClick={addChild}
                  >
                    {childrenCount}+
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="traveller-type-wrapper">
                <div className="traveller-type col-6">
                  <div className="traveller-category">Infants</div>
                  <div className="category-description">Age 0 - 2 years</div>
                </div>
                <div className="button-wrapper col-6">
                  <button
                    type="submit"
                    className="subtract"
                    disabled={infantCount === 0}
                    onClick={removeInfant}
                  >
                    -
                  </button>
                  <button
                    type="submit"
                    className={infantCount === 0 ? "add btn-dis" : "add"}
                    onClick={addInfant}
                  >
                    {infantCount}+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fare-type">
          <div className="fare-label pd-10">Select A Fare Type</div>
          <div className="fare-options">
            <div className="input-check">
              <input
                type="checkbox"
                name="seat-fare"
                id="student"
                value="student"
                className="mgr-5"
              />
              <label for="student">Student Fare</label>
              <br />
            </div>
            <div className="input-check">
              <input
                className="mgr-5"
                type="checkbox"
                name="seat-fare"
                id="non-stop"
                value="non-stop"
              />
              <label for="non-stop">Non Stop Flights</label>
              <br />
            </div>
            <div className="input-check">
              <input
                className="mgr-5"
                type="checkbox"
                name="seat-fare"
                id="armed-force"
                value="armed-force"
              />
              <label for="armed-force">Armed Forces</label>
              <br />
            </div>
            <div className="input-check">
              <input
                className="mgr-5"
                type="checkbox"
                name="seat-fare"
                id="senior-citizen"
                value="senior-citizen"
              />
              <label className="pdb-5" for="senior-citizen">
                Senior Citizen
              </label>
              <br />
            </div>
            <div className="input-check">
              <input
                className="mgr-5"
                type="checkbox"
                name="seat-fare"
                id="direct-flight"
                value="direct-flight"
              />
              <label for="direct-flight" className="pdb-5">
                Direct Flights
              </label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
