import React, { useCallback, useState } from "react";
import CalendarStyle2 from "./calendar2.css";

export default function Calendar2(props) {
  const empty = [
    {
      date: "",
      price: "",
    },
  ];

  let arr = ["", "", ""];
  const priceArr = [5000];
  const newDate = new Date();
  const month = "December";
  const date = Number(newDate.getDate());
  const [datePrice, setDatePrice] = useState(empty);
  const priceObj = [
    { date: "", price: "" },
    { date: "", price: "" },
    { date: "", price: "" },
  ];

  const [travelDate, setTravelDate] = useState();
  const [selectedDate, setSelectedDate] = useState(date);
  const { flightDetails, setFlightDetails } = props;

  console.log(datePrice, "datePrice");
  console.log(date);

  for (let i = 3; i <= 33; i++) {
    arr[i] = i - 2;
    priceArr[i] = priceArr[0] + i * 100;
    priceObj.push({ date: arr[i], price: priceArr[0] + i * 100 });
  }
  console.log(arr);
  console.log(priceObj, "priceObj");

  function getDateValue(e) {
    let finalDate = e.target.id >= date ? e.target.id : date;
    setSelectedDate(finalDate);
    let travelDateString = finalDate + " " + month + " 22";
    setTravelDate(travelDateString);
    setFlightDetails({ ...flightDetails, fromDate: travelDateString });
  }

  console.log("Selected Date: " + selectedDate);
  console.log(travelDate);

  return (
    <div>
      <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li>
            <span className="month-text">December</span>
            <br />
            <span className="month-text" style={{ fontSize: 18 }}>
              2022
            </span>
          </li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul
        className="days"
        onClick={(e) => {
          console.log(e.target.id, "target");
          getDateValue(e);
        }}
      >
        {priceObj.map((element) => {
          return (
            <li>
              {element.date == selectedDate && element.date >= date ? (
                <span id={element.date} className="selected-font">
                  {element.date}
                  <div className="selected" id={element.date}>
                    {element.price}
                  </div>
                </span>
              ) : element.date < date ? (
                <span id={element.date} className="disabled-dates">
                  {element.date}
                  <div id={element.date}>{element.price}</div>
                </span>
              ) : (
                <span id={element.date}>
                  {element.date}
                  <div id={element.date}>{element.price}</div>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
