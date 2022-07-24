import React, { useState } from "react";

const Form = () => {
	const [username, SetUsername] = useState("");
	const [message, SetMessage] = useState("");

	return (
		<>
			<form className="flex" onSubmit={handleSubmit}>
				<div className="form-content">
					<input
						type="text"
						placeholder="Your Name Here..."
						value={username}
						onChange={(e) => SetUsername(e.target.value)}
					/>
				</div>
				<div className="form-content">
					<textarea
						name="message"
						id="message"
						placeholder="Your Message Here..."
						value={message}
						onChange={(e) => SetMessage(e.target.value)}
					/>
				</div>

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

// Form Submit Function
const handleSubmit = (e) => {
	e.preventDefault();
};

export default Form;
