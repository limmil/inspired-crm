// -------------------------------------------------------------------
// FollowUps.js
// --
// The doughnut progress circle graph.
// -------------------------------------------------------------------

import React, { Component } from "react";

class FollowUps extends Component {
   render() {
      return (
         <header>
            <div
               class="chart-container"
               style={{ width: "80%", marginTop: "-30px" }}
            >
               <div class="doughnut-chart-container">
                  <canvas id="doughnut-chartcanvas-2"></canvas>
               </div>
            </div>
         </header>
      );
   }
}

export default FollowUps;
