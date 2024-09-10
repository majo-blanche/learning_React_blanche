import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { imagesItem } from "../images";

const spanStyle = {
	padding: "20px",
	background: "#efefef",
	color: "#000000",
};

const divStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundSize: "cover",
	height: "400px",
};

const Slideshow = () => {
	const [imageSlide, setimageSlide] = useState(0);
	const next = () => {
		setimageSlide((index) => (index + 1) % imagesItem.length);
	};
	const Prev = () => {
		setimageSlide((index) =>
			index === 0 ? imagesItem.length - 1 : index - 1
		);
	};
	const Getprev = () => {
		return imageSlide === 0 ? imagesItem.length - 1 : imageSlide - 1;
	};
	const Getnext = () => {
		return imageSlide === imagesItem.length - 1 ? 0 : imageSlide + 1;
	};

	return (
		<div className="main-ctn">
			<div className="slide-container">
				{/* <Slide>
				{imagesItem.map((slideImage, index) => (
					<div key={index}>
						<div
							style={{
								...divStyle,
								//backgroundImage: `url(${slideImage.image})`,
							}}
						>
							<img
								src={slideImage.image}
								alt=""
								style={{
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				))}
			</Slide> */}

				<>
					<div className="image1">
						<img
							src={imagesItem[Getprev()].image}
							alt=""
							srcset=""
						/>
					</div>
					<div className="image2">
						<img
							src={imagesItem[imageSlide].image}
							alt=""
							srcset=""
						/>
					</div>
					<div className="image3">
						<img
							src={imagesItem[Getnext()].image}
							alt=""
							srcset=""
						/>
					</div>
				</>
			</div>
			<div className="main-btn">
				<div className="btn">
					<button onClick={Prev}>prev</button>
				</div>
				<div className="btn">
					<button onClick={next}>next</button>
				</div>
			</div>
		</div>
	);
};

export default Slideshow;
