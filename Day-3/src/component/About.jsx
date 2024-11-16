import React from 'react'
import Pic from "../images/pic.jpg";
const About = () => {
  return (
		<>
			<div className="about-container">
				<div className="pic">
					<img src={Pic} className="pic" alt="" />
				</div>
				<div className="discription">
					<h1>About Me</h1>
				  <h2>Explore my work and learn more about my creative  journey! </h2>
				  <p>Hi my name is Majo Blanche  i am an aspiring frontend developer .I have being  programing  for a couple of months now 
					  where i started by learning HTML(Hypertext Markup Language) ,CSS(Cascading Style Sheets) , JS(Javescript) and also REACT JS.
					  I am also a lover of Grapkic Designing and UI/UX designs reason why i engage myself in learning Adobe  photoshop and Adobe illustrator
					  .explore my work and get  in touch to discuss oppotunities,looking forward to connecting and creating together
				  </p>
				</div>
			</div>
		</>
  );
}

export default About
