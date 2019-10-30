// import React, { Component } from "react";
// import axios from "axios";
// import TableRow from "./TableRow";

// import DashboardNavbar from "../dashboard/DashboardNavbar";
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


// class Contacts extends Component {
//    constructor(props) {
//       super(props);
//       this.state = { contact: [] };
//    }
   
//    componentDidMount() {
//       const user = {
//          email: localStorage.getItem("userEmail"),
//          tokenhash: localStorage.getItem("tokenHash"),
//       };
//       console.log(user)
//       axios
//          .post("/api/contacts/get", user)
//          .then(response => {
//             console.log(response)
//             this.setState({ contact: response.data });
//          })
//          .catch(function(error) {
//             console.log(error);
//          });
//    }
//    tabRow() {
//       return this.state.contact.map(function(object, i) {
//          return <TableRow obj={object} key={i} />;
//       });
//    }

//    render() {
//       return (
//          <div>
//             <DashboardNavbar />

    

//   <div class="container">
//     <div class="row">
//       <div class="col s12">
//         <div class="card">
//           <div class="card-content">
//             <span class="card-title">Contact List</span>
//             <table class="striped">
//               <thead>
//                 <tr>
//                   <th>Last Name1</th>
//                   <th>First Name</th>
//                   <th>Phone Number</th>
//                   <th colSpan="2">Action</th>
//                 </tr>
//               </thead>

//               <tbody>{this.tabRow()}</tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//       );
//    }
// }

// export default Contacts;




import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import DashboardNavbar from "../dashboard/DashboardNavbar";
import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "./moment";

import "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
  
class UserCalendar extends Component {
  state = {
    events: [ 
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Sample Event"
      },
      {
         start: new Date(moment().subtract(8, "days")),
         end: new Date(moment().subtract(6, "days")),
         title: "Some other Event"
       }
    ]
  };

  render() {
    return (
       <div>
         <DashboardNavbar />
         <div className="UserCalendar">
            <Calendar
               localizer={localizer}
               defaultDate={new Date()}
               defaultView="month"
               events={this.state.events}
               style={{ height: "100vh" }}
            />
         </div>
      </div>
    );
  }
}
export default UserCalendar;

