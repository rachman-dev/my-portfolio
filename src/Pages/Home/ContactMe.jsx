/** @format */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactMe() {
	// const myElement = document.getElementById("sent_");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_lwzi27x", "template_tee2qgf", form.current, {
				publicKey: "UduDyvMaZJdX0VGG4",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					// console.log("asdsadasdas");
					document.getElementById("sent_").style.display = "block";
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<section id="Contact" className="contact--section">
			<div>
				<p className="sub--title">Get In Touch</p>
				<h2>Contact Me</h2>
				<p className="text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
				</p>
			</div>
			<form
				className="contact--form--container"
				ref={form}
				onSubmit={sendEmail}>
				<div className="container">
					<label htmlFor="first-name" className="contact--label">
						<span className="text-md">First Name</span>
						<input
							type="text"
							className="contact--input text-md"
							name="first-name"
							id="first-name"
							required
						/>
					</label>
					<label htmlFor="last-name" className="contact--label">
						<span className="text-md">Last Name</span>
						<input
							type="text"
							className="contact--input text-md"
							name="last-name"
							id="last-name"
							required
						/>
					</label>
					<label htmlFor="email" className="contact--label">
						<span className="text-md">Email</span>
						<input
							type="email"
							className="contact--input text-md"
							name="email"
							id="email"
							required
						/>
					</label>
					<label htmlFor="phone-number" className="contact--label">
						<span className="text-md">phone-number</span>
						<input
							type="number"
							className="contact--input text-md"
							name="phone-number"
							id="phone-number"
							required
						/>
					</label>
				</div>
				<label htmlFor="message" className="contact--label">
					<span className="text-md">Message</span>
					<textarea
						name="message"
						className="contact--input text-md"
						id="message"
						rows="8"
						placeholder="Type your message..."
					/>
				</label>
				<label htmlFor="checkboc" className="checkbox--label">
					<input type="checkbox" required name="checkbox" id="checkbox" />
					<span className="text-sm">I accept the terms</span>
				</label>
				<div>
					<button
						className="btn btn-primary contact--form--btn"
						type="submit"
						value="Send">
						Submit
					</button>
				</div>
				<div className="sent_" id="sent_">
					message sent successfully!
				</div>
			</form>
		</section>
	);
}