// ALTERNATE CALENDAR IMPORT IGNORE FOR NOW
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from './moment'

// const localizer = momentLocalizer(moment)
// const MyCalendar = props => (
//     <div>
//         <Calendar
//         localizer={localizer}
//         //   events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//         />
//     </div>
//     )
// ALTERNATE CALENDAR IMPORT IGNORE FOR NOW

import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "./moment";

import "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
 

// METHOD 1
/********************************************************* */
// class UserCalendar extends Component {
//   state = {
//     events: [ 
//       {
//         start: new Date(),
//         end: new Date(moment().add(1, "days")),
//         title: "Sample Event"
//       },
//       {
//          start: new Date(moment().subtract(8, "days")),
//          end: new Date(moment().subtract(6, "days")),
//          title: "Some other Event"
//        }
//     ]
//   };
/********************************************************* */



// METHOD 2
/********************************************************* */
class UserCalendar extends Component {
  constructor(props) {
     super(props);
     this.state = { eventss: [] };
  }

  componentDidMount() {
     const user = {
        email: localStorage.getItem("userEmail"),
        tokenhash: localStorage.getItem("tokenHash")
     };
     console.log(user);
     axios
        .post("/api/events/get", user)
        .then(response => {
           console.log(response);
           this.setState({ eventss: response.data });
        })
        .catch(function(error) {
           console.log(error);
        });
  }
/********************************************************* */



  render() {
    return (
       <div>
         <DashboardNavbar />
         <div className="UserCalendar">
            <Calendar
               localizer={localizer}
               defaultDate={new Date()}
               defaultView="month"
               events={this.state.eventss}
               style={{ height: "100vh" }}
            />
         </div>
         <DashboardFooter />
      </div>
    );
  }
}
export default UserCalendar;









/*
//DRAG AND DROP PROTOTYPE You can try it, but  ***REQUIRES MORE EVENT SCHEMA WORK*** 
import React, { Component } from "react";
import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "./moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./Calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = Calendar.momentLocalizer(moment);
const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);

class UserCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      },
      {
         start: new Date(moment().subtract(8, "days")),
         end: new Date(moment().subtract(6, "days")),
         title: "Some other Event"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  render() {
    return (
      <div className="UserCalendar">
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
export default UserCalendar;
*/