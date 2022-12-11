import React, { useState } from "react";
import Calendar2 from "./Calendar2";
import HomeStyle from "./homePage.css";
import Places from "./Places";
import SelectClass from "./SelectClass";
import TravellerAndFareType from "./TravellerAndFareType";

const places = [
  {
    id: 1,
    name: "Mumbai",
    shortform: "BOM",
    airport: "Chatrapati Shivaji International Airport",
    country: "IN",
    countryFlag: "./India.PNG",
  },
  {
    id: 2,
    name: "Rio De Janeiro",
    shortform: "RIO",
    airport: "Rio De Janeiro International Airport",
    country: "BR",
    countryFlag: "./Brazil.PNG",
  },
  {
    id: 3,
    name: "Sydney",
    shortform: "SYD",
    airport: "Sydney Kingsford Smith International airport",
    country: "AU",
    countryFlag: "./Australia.PNG",
  },
  {
    id: 4,
    name: "Toronto",
    shortform: "YYZ",
    airport: "Lester B. Pearson International Airport",
    country: "CA",
    countryFlag: "./Canada.PNG",
  },
  {
    id: 5,
    name: "New Delhi",
    shortform: "DEL",
    airport: "Indira Gandhi International Airport",
    country: "IN",
    countryFlag: "./India.PNG",
  },
];

const newDate = new Date();
const month = "December";
const date = Number(newDate.getDate());

const initialDetails = {
  from: "",
  fromShort: "",
  to: "",
  toShort: "",
  fromDate: date + " " + month + " 22",
  seatClass: "Economy",
};

export default function HomePage() {
  const [locationArr, setLocationArr] = useState(places);
  const [flightDetails, setFlightDetails] = useState(initialDetails);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [btnClicked, setBtnClicked] = useState(false);

  const [seatClass, setSeatClass] = useState();

  console.log(
    "Flight" +
      flightDetails.from +
      flightDetails.to +
      flightDetails.fromDate +
      flightDetails.seatClass
  );

  function setBtn() {
    setBtnClicked(true);
  }

  return (
    <>
      <div className="app">
        <div className="app-wrapper">
          <div className="head-wrapper">
            <div className="logo">
              <img className="logo-img" src="./riya-logo.PNG" alt="logo" />
            </div>
            <div className="header-bar">
              <div className="manage-booking pd-10">
                <img
                  className="manage-icon pdr-5"
                  src="./manage.PNG"
                  alt="manage"
                />

                <div className="bar-btn">Manage Booking</div>
              </div>
              <div className="customer-service pd-10">
                <img
                  className="icon-size pdr-5"
                  src="./customer-care.PNG"
                  alt="customer-care"
                />

                <div className="bar-btn bld">Customer Service</div>
              </div>
              <div className="country pd-10">
                <img className="icon-size pdr-5" src="./flag.PNG" alt="flag" />

                <div className="bar-btn bld">India</div>
                <img
                  className="icon-size"
                  src="./drop-arrow.PNG"
                  alt="drop-arrow"
                />
              </div>
              <div className="profile-icon pd-10">
                <img
                  className="profile-img icon-size"
                  src="./profile-icon.PNG"
                  alt="profile-icon"
                />
              </div>
            </div>
            <div className="header-icon">🔍</div>
          </div>
          <div className="content-wrapper">
            {btnClicked ? (
              <>
                <div className="search-bar">
                  <div className="caption">
                    <span className="orange-text">One-way</span>
                    <span className="white-text">, Book a flight </span>
                    <span className="white-text">from </span>
                    <span className="values"> {flightDetails.fromShort} </span>
                    <span className="white-text"> To </span>
                    <span className="values">{flightDetails.toShort} </span>
                    <span className="white-text"> On </span>
                    <span className="values">
                      {flightDetails.fromDate.split(" ")[0] +
                        " " +
                        flightDetails.fromDate.split(" ")[1].substring(0, 3) +
                        "' " +
                        flightDetails.fromDate.split(" ")[2]}
                    </span>
                    <span> </span>
                    <span className="values">{flightDetails.seatClass}</span>
                  </div>
                  <img className="cancel" src="./cancel.PNG" alt="cancel-btn" />
                </div>
              </>
            ) : (
              <>
                <div className="search-bar">
                  <div className="caption">
                    <span className="orange-text">One-way</span>
                    <span className="white-text">, Book a flight </span>
                    <span>
                      <span>
                        {flightDetails.from === "" ? (
                          <span className="inp-placeholder">From ?</span>
                        ) : (
                          <span className="orange-text">
                            {flightDetails.fromShort}{" "}
                          </span>
                        )}
                      </span>
                      <span>
                        {flightDetails.from !== "" &&
                        flightDetails.to === "" ? (
                          <span className="inp-placeholder">To ?</span>
                        ) : flightDetails.toShort !== "" ? (
                          <>
                            <span className="white-text">to </span>{" "}
                            <span className="orange-text">
                              {flightDetails.toShort}{" "}
                            </span>
                          </>
                        ) : (
                          flightDetails.toShort + " "
                        )}
                        <span>
                          {flightDetails.to !== "" && (
                            <span className="inp-placeholder">When ?</span>
                          )}
                        </span>
                      </span>
                    </span>
                  </div>
                  <img className="cancel" src="./cancel.PNG" alt="cancel-btn" />
                </div>
                <div className="border-line"></div>
              </>
            )}
            {!btnClicked &&
              (flightDetails.from && flightDetails.to ? (
                <>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <Calendar2
                          flightDetails={flightDetails}
                          setFlightDetails={setFlightDetails}
                        />
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="mb-5">
                          <SelectClass
                            flightDetails={flightDetails}
                            setFlightDetails={setFlightDetails}
                          />
                        </div>
                        <TravellerAndFareType
                          adultCount={adultCount}
                          setAdultCount={setAdultCount}
                          childrenCount={childrenCount}
                          setChildrenCount={setChildrenCount}
                          infantCount={infantCount}
                          setInfantCount={setInfantCount}
                        />
                      </div>
                    </div>
                    <div className="row my-3 ">
                      <button
                        onClick={setBtn}
                        className="btn btn-danger w-25 mx-auto"
                        disabled={
                          adultCount === 0 &&
                          childrenCount === 0 &&
                          infantCount == 0
                        }
                      >
                        Search Flights
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={
                      flightDetails.from === ""
                        ? "all-places"
                        : "all-places trans-20"
                    }
                  >
                    <Places
                      locationArr={locationArr}
                      flightDetails={flightDetails}
                      setFlightDetails={setFlightDetails}
                      setLocationArr={setLocationArr}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
