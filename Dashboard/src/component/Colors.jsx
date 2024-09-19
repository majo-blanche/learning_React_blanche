import React from "react";
import Mycolors from "./object";

const Colors = () => {
	return (
		<div>
			<h2>colors</h2>

			<div className="colors-container">
				{Mycolors.map((Colors, index) => (
					<div className="color2" key={index}>
						<div>
							<div
								className="color1"
								style={{
									background: Colors.color,
								}}
							></div>
						</div>
						<div className="text-color">
							<div
								style={{
									padding: "15px",
									width: "",
									margin: "  5px  0",
								}}
							>
								<b>{Colors.name}</b>
							</div>
							<div
								style={{
									padding: "15px",
									borderBottom:
										"1px solid rgb(100, 100, 100)",
									width: "",
									margin: "5px  0",
								}}
							>
								{Colors.hex}
							</div>
							<div
								style={{
									padding: "15px",
									borderBottom:
										"1px solid rgb(100, 100, 100)",
									width: "",
									margin: "5px  0",
								}}
							>
								{Colors.rbg}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Colors;
