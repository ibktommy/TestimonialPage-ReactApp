import React, { useState } from "react";

const Form = ({ handleSubmit, handleName, handleMessage, username, message }) => {
	return (
		<>
			<form className="flex" onSubmit={handleSubmit}>
				<div className="form-content">
					<input
						type="text"
						placeholder="Your Name Here..."
						value={username}
						onChange={handleName}
					/>
				</div>
				<div className="form-content">
					<textarea
						name="message"
						id="message"
						placeholder="Your Message Here..."
						value={message}
						onChange={handleMessage}
					/>
				</div>

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Form;
