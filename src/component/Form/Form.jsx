import React from "react";

const Form = ({
	handleSubmit,
	setImageFile,
	setMessage,
	setUsername,
	username,
	message,
}) => {
	return (
		<>
			<form className="flex" onSubmit={handleSubmit}>
				<div className="form-content">
					<input
						type="text"
						placeholder="Your Name Here..."
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-content">
					<input
						type="file"
						accept="image/*"
						onChange={(e) => setImageFile(e.target.files[0])}
					/>
				</div>
				<div className="form-content">
					<textarea
						name="message"
						id="message"
						placeholder="Your Message Here..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Form;
