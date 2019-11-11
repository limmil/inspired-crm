import React, { Component } from "react";
import axios from "axios";

class ModificationLog extends Component {
   render() {
      return (
         <header>
            <div class="container">
               <div class="row">
                  <div class="col s12">
                     <h3>Modification Log</h3>
                     <hr />
                     <table class="highlight">
                        <thead>
                           <tr>
                              <th>Username</th>
                              <th>Date Modified</th>
                              <th colSpan="2">Action</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}

export default ModificationLog;
