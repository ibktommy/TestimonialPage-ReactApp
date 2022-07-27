import React from "react";

const Form = ({
	username,
	message,
	imageFile,
	data,
	setMessage,
	setUsername,
	setImageUrl,
	setImageFile,
	setData,
}) => {
	// FUNCTION CALLED WHEN SUBMITTING FORM
	function handleSubmit(e) {
		e.preventDefault();

		if (!username || !message) {
			alert("PLEASE FILL IN ALL INPUT FIELDS!");
		} else if (!imageFile) {
			alert("SELECT A PICTURE FOR UPLOAD");
		}
		const newData = {
			id: data.length + 1,
			name: username,
			image: URL.createObjectURL(imageFile),
			testimony: message,
		};

		setUsername("");
		setMessage("");
		setImageFile(null);
		setImageUrl(null);
		setData([...data, newData]);

		// Save the updated data-state to localStorage
		localStorage.setItem("data", JSON.stringify([...data, newData]));
	}

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
