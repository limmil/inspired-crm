import React, { Component } from "react";
import axios from "axios";

class ReachOutsHelp extends Component {
   render() {
      return (
         <header>
                <div class="modal-content">
                    <h4><i class="material-icons medium">help</i> New Reach Outs Help</h4>
                        <p>Select the contacts you have never spoken to about your business. If you select them here, you intend to reach out to them this week. Don’t know who you want to reach out to? Does choosing the people to reach out to stress you out or overwhelm you? Make it a challenge to contact anyone the system chooses no matter how intimidated you are to do so. This will help build your confidence and show you that you’re capable of pitching ANYONE!!</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
                </div>
         </header>
      );
   }
}

export default ReachOutsHelp;
