import React from "react";

import { Fade, Zoom, Slide } from "react-slideshow-image";
import { imagesItem } from "../images/index";

const divStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "600px",
	backgroundSize: "cover",
};
const spanStyle = {
	fontSize: "20px",
	background: "#efefef",
	color: "#00000",
};

const Project = () => {
	return (
		<>
			<div className="slide-container">
				<Slide>
					{imagesItem.map((image) => (
						<div key={image.id}>
							<div
								style={{
									...divStyle,
								}}
							>
								<img className="picture" src={image.image} />
								<span style={{ spanStyle }}></span>
							</div>
						</div>
					))}
				</Slide>
			</div>
		</>
	);
};

export default Project;
