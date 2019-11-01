import React, { Component } from "react";
import axios from "axios";

class TeamReachOutsHelp extends Component {
   render() {
      return (
         <header>
            <div class="modal-content">
               <h4>
                  <i class="material-icons medium">help</i> Team Reach Outs Help
               </h4>
               <p>
                  Here you can manage follow ups with your team. First, add your
                  team members on the team page here Once your team has been
                  entered or imported, then simply select which team members you
                  would like to follow up with in this section.
               </p>
            </div>
            <div class="modal-footer">
               <a href="#!" class="modal-close waves-effect waves-light btn">
                  Ok
               </a>
            </div>
         </header>
      );
   }
}

export default TeamReachOutsHelp;
