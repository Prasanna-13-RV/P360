import React, { useState, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { getEvents, postEvent } from "../../axios/calender.axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Calender = () => {
  useEffect(() => {
    // getEvents().then((res) => {
    //   setEvents(res.data);
    // });
  }, []);
  const [title, setTitle] = useState();
  const [popup, setPopup] = useState(false);
  const [date, setDate] = useState();
  const [date2, setDate2] = useState(null);
  const [events, setEvents] = useState([
    { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
    {
      title: "Rendezvous",
      start: getDate("YEAR-MONTH-07"),
      end: getDate("YEAR-MONTH-10"),
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
    },
    {
      groupId: "999",

      title: "Repeating Event",

      start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
    },
    {
      title: "Dontiste",

      start: "YEAR-MONTH-17",
      end: getDate("YEAR-MONTH-19"),
    },
    {
      title: "Consultation",
      start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
      end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
    },
    { title: "Visit", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
    { title: "maladie", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
    { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
    { title: "controlle", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
    { title: "finish", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
  ]);
  const handleEvent = () => {
    setPopup(false);
    // postEvent({
    //   title: title,
    //   start: date,
    //   end: date2,
    // }).then((res) => {
    //   console.log(res);
    // });
    setEvents([...events, { title: title, start: date, end: date2 }]);
    setTitle("");
    setDate(null);
    setDate2(null);
  };

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    console.log(dayString.replace("YEAR", year).replace("MONTH", month));
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  return (
    <div className="">
      <Navbar />
      {popup && (
        <div className="z-50 fixed w-full h-full  top-0 left-0 bg-[#00000093] flex justify-center items-center">
          <div className="w-[60%] p-5 rounded-md bg-[#f6f6f6] flex flex-col justify-center items-center">
            <div className=" w-[80%]">
              <div className="flex justify-between ">
                <h2 className=" font-medium text-lg my-3">Title</h2>
                <button onClick={() => setPopup(false)}>Close</button>
              </div>
              <input
                type="text"
                className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                name="Title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder=""
              />
              <h2 className=" font-medium text-lg my-3">Start date</h2>
              <input
                type="datetime-local"
                className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                name="Date"
                onChange={(e) => setDate(e.target.value)}
                placeholder=""
              />
              <h2 className=" font-medium text-lg my-3">End date</h2>
              <input
                type="datetime-local"
                className="w-full bg-[#f6f6f6] border-2 border-[#a5a5a5] rounded-md p-2   mb-3"
                name="Date"
                onChange={(e) => setDate2(e.target.value)}
                placeholder=""
              />
            </div>

            <div className=" w-[80%] my-3 flex flex-col">
              <button
                onClick={handleEvent}
                className="py-2 px-4 mt-5 rounded-full bg-[#9255B8] text-white">
                Add step
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events}
      /> */}
      <div className="w-5/6  mx-auto my-auto mt-[3rem]">
        <button
          onClick={() => setPopup(true)}
          className="bg-blue-500 px-[1rem] cursor-pointer text-white text-lg font-semibold mb-[2rem] py-[.5rem] rounded-xl">
          Add Event
        </button>
        <FullCalendar
          defaultView="dayGridMonth"
          // themeSystem="Simplex"
          // header={{
          //   left: "prev,next",
          //   center: "title",
          //   right: "dayGridMonth,timeGridWeek,timeGridDay",
          // }}
          plugins={[dayGridPlugin]}
          events={events}
          displayEventEnd="true"
          eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Calender;
