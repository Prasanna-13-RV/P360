import React, { useState, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { getEvents, postEvent } from "../../../axios/calender.axios";
import NavbarAdmin from "../../../components/admin/NavbarAdmin";
import FooterAdmin from "../../../components/admin/FooterAdmin";

const Calender = () => {
  const [currentEvent, setCurrentEvent] = useState();
  useEffect(() => {
    get();
  }, []);

  const get = () => {
    getEvents().then((res) => {
      console.log(res, "nnrr");
      res.data.forEach((data) => {
        setEvents((old) => [
          ...old,
          {
            title: data.title,
            start: data.start_time,
            end: data.end_time,
          },
        ]);
      });
    });
  };
  const [title, setTitle] = useState();
  const [popup, setPopup] = useState(false);
  const [date, setDate] = useState();
  const [date2, setDate2] = useState(null);
  const [events, setEvents] = useState([]);
  const handleEvent = () => {
    setPopup(false);
    postEvent(title, date, date2).then((res) => {
      console.log(res);
    });
    console.log(title, date, date2, "SS");
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
      <NavbarAdmin />
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
                className="py-2 px-4 mt-5 rounded-full bg-[#393AA1] text-white">
                Add Event
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
          className="bg-[#393AA1] px-[1rem] cursor-pointer text-white text-lg font-semibold mb-[2rem] py-[.5rem] rounded-xl">
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
          eventClick={(e) => {
            setCurrentEvent(
              events.filter((data) => data.title == e.event._def.title)
            );
            console.log(
              events.filter((data) => data.title == e.event._def.title)
            );
          }}
          eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        />
        {currentEvent && (
          <div className="my-10">
            <p className="mt-2 text-xl">
              <span className="font-bold">Title:</span> {currentEvent[0].title}
            </p>
            <p className="mt-2 text-xl ">
              <span className="font-bold">Start:</span>{" "}
              {currentEvent[0].start.toString()}
            </p>
            <p className="mt-2 text-xl">
              <span className="font-bold">End:</span>{" "}
              {currentEvent[0].end?.toString()}
            </p>
            <p className="mt-2  text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              pariatur accusamus hic veniam iusto voluptates cum nam libero,
              fuga cumque deleniti vel quo tempora eaque numquam maiores
              recusandae dolores obcaecati sapiente natus? Est, mollitia. Id a
              illum quisquam esse enim, voluptas fugiat repellat hic vitae
              beatae delectus earum saepe reiciendis.
            </p>
          </div>
        )}
      </div>
      <FooterAdmin />
    </div>
  );
};

export default Calender;
