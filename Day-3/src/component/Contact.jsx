import React from 'react'

const Contact = () => {
  return (
    
      <div className="container">
 			<div className="left">
				<div>
 					<h1 className='H1'>CONTACT</h1>
					<p className="p2">
				Get the Best design with us as we provide the best
						sevices <br />
						and a wide variety of soft wares like adobe photoshop
						and <br />
 						lightroom as well as express
 					</p>
 				</div>
 				<div className="h1">
 					<h2>Address</h2>
 					<p>Cameroonm Yaounde</p>
 				</div>
 				<div className="h2">
					<h2>Phone</h2>
 					<p>+237 693 58 06 03</p>
          </div>
				<div className="h3">
					<h2>E-mail</h2>
					<p>blanchemajo@gmial.com</p>
 				</div>
		</div>
		<div className="right">
				<h1>CONTACT FORM</h1>
				<form action="">
					<div className="input">
						<input type="text" placeholder="YOUR NAME" />
						<hr />
						<input type="email" placeholder="YOUR EMAIL" />
						<hr />
						<input type="text"  placeholder="YOUR ADDRESS"/>
						<hr />
						<input type="text" placeholder="MESSAGE" />
						<hr />
					</div>
					<button className='btn'>send message</button>
				</form>
			</div>
 	</div>
  )
}
export default Contact
