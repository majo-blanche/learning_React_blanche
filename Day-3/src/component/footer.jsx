import React from "react";
import Twitter from "../images/bi_twitter.png";
import Instagram from "../images/bi_instagram.png";

const Footer = () => {
	return (
		<div className="footer">
			<img src={Instagram} alt="" />
			<img src={Twitter} alt="" />
		</div>
	);
};

export default Footer;
