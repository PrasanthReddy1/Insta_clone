import React from "react";

import Styles from "./Navbar.module.css";
import logo from "../images/WhatsApp Image 2022-06-19 at 10.46.19 PM.jpeg";

function Navbar() {
	return (
		<div className="text-center">
			<img
				src={logo}
				alt="instagram"
				width={"450px"}
				className={`mt-2 ${Styles.image1}`}
			/>
		</div>
	);
}

export default Navbar;
