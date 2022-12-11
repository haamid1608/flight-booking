import React from "react";
import PlaceStyle from "./places.css";

export default function Places(props) {
  const { locationArr, flightDetails, setFlightDetails, setLocationArr } =
    props;

  function getLocation(element) {
    if (flightDetails.from === "") {
      setFlightDetails({
        ...flightDetails,
        from: element.name,
        fromShort: element.shortform,
      });
      const copyArr = locationArr.filter((item) => {
        return item.name !== element.name;
      });
      setLocationArr(copyArr);
    } else {
      setFlightDetails({
        ...flightDetails,
        to: element.name,
        toShort: element.shortform,
      });
    }
  }

  console.log(locationArr);
  console.log(flightDetails);
  return (
    <>
      {locationArr.map((element) => {
        return (
          <>
            <div
              className="card-wrapper"
              onClick={(e) => {
                getLocation(element);
              }}
              key={element.id}
            >
              <div className="flight-image">
                <img className="flight-image-size" src="./flight-image.PNG" />
              </div>
              <div className="location-wrapper">
                <div className="location-name">
                  <div className="location pdr-5">{element.name}</div>
                  <div className="location-short">({element.shortform})</div>
                </div>
                <div className="airport-deatil">{element.airport}</div>
              </div>
              <div className="country-detail">
                <div className="country-name mgr-5">{element.country}</div>
                <img
                  className="flag-size"
                  src={element.countryFlag}
                  alt="country-flag"
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
