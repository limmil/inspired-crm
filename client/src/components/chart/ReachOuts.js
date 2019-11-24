// -------------------------------------------------------------------
// ReachOuts.js
// --
// The doughnut progress circle graph.
// -------------------------------------------------------------------

import React, { Component } from "react";

class ReachOuts extends Component {
   render() {
      return (
         <header>
            <div
               class="chart-container"
               style={{ width: "80%", marginTop: "-30px" }}
            >
               <div class="doughnut-chart-container">
                  <canvas id="doughnut-chartcanvas-1"></canvas>
               </div>
            </div>
         </header>
      );
   }
}

export default ReachOuts;
