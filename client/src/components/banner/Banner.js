import React, {Component} from "react";
import "./Banner.css";

class Banner extends Component {
	state = {

	}

	componentDidMount(){

	}

	render(){
		return(
			<section id="home" className="slider fullscreen scrollspy">
				<ul className="slides">
					<li>
						<img src="/assets/img/banner1.png" alt="Welcome to the TSG CRM!" />
						<div className="caption center-align">
							<h3 className="grey-text text-lighten-2">Welcome to the TSG&apos;s <strong className="blue-text text-lighten-2">CRM</strong>!</h3>
							<h5 className="light grey-text text-lighten-5 hide-on-small-only"><strong>Here you will find an individual who enjoys coding! That&apos;s right, I enjoy it!</strong></h5>
						</div>
					</li>
				</ul>
			</section>
		)
	}
}

export default Banner;

// <li>
// 	<img src="/assets/img/domo5.jpg" alt="MERNster coder" />
// 	<div className="caption right-align">
// 		<h3>The <strong><span className="red-text darken-text-4">MERNster</span></strong> Coder!</h3>
// 		<h5 className="light grey-text text-lighten-5 hide-on-small-only"><strong>Do you even flexbox?!? --Joe Faulstick</strong></h5>
// 	</div>
// </li>