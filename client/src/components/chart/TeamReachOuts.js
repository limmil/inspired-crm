// -------------------------------------------------------------------
// TeamReachOuts.js
// --
// The doughnut progress circle graph.
// -------------------------------------------------------------------

import React, { Component } from "react";

class TeamReachOuts extends Component {
   render() {
      return (
         <header>
            <div
               class="chart-container"
               style={{ width: "80%", marginTop: "-30px" }}
            >
               <div class="doughnut-chart-container">
                  <canvas id="doughnut-chartcanvas-3"></canvas>
               </div>
            </div>
         </header>
      );
   }
}

export default TeamReachOuts;
