import React from "react";
import Input from "../Input-field";
import Textarea from "../Textarea-field";


const Footer = (props) => {
	return (
		<div className='foot'>
			<h2 data-entete="Nous sommes une équipe">Contact us</h2>
			<h3>Adress</h3>
			<address>33, nguma</address>
			<h3>Phone</h3>
			<p>
				<a href="tel:+2430810814949">+243 810814949</a>
			</p>
			<h3>Email</h3>
			<p>
				<a href="mailto:ximeonzilu@gmail.com">ximeonzilu@gmail.com</a>
			</p>
			<Input type="text" placeholder="Name" />
			<br />
			<Input type="email" placeholder="Email" />
			<br />
			<Input type="text" placeholder="Subject" />
			<br />
			<Textarea />
			<br />
			<Input type="button" value="Send message" />
		</div>
	);
};

export default Footer;
