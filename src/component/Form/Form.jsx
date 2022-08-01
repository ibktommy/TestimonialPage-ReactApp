import React, { useState } from "react";
import "./Form.scss";

const Form = ({ onAddUserData, dataNum }) => {
	// Setting State
	const [name, setName] = useState("");
	const [testimony, setTestimony] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	function formSubmitHandler(e) {
		e.preventDefault();

		if (!name || !testimony) {
			alert("PLEASE FILL IN ALL INPUT FIELDS!");
		} else if (!imageFile) {
			alert("SELECT A PICTURE FOR UPLOAD");
		} else {
			const newData = {
				id: dataNum.length + 1,
				name: name,
				image: URL.createObjectURL(imageFile),
				testimony: testimony,
			};

			//Passing the NewData Up to App.JS Using Prop Value
			onAddUserData(newData);
			// Resetting the input-state values
			setName("");
			setTestimony("");
			setImageFile(null);
			setImageUrl(null);
		}
	}

	function nameInputHandler(e) {
		setName(e.target.value);
	}
	function testimonyInputHandler(e) {
		setTestimony(e.target.value);
	}
	function imageUploadHandler(e) {
		setImageFile(e.target.files[0]);
	}

	return (
		<form onSubmit={formSubmitHandler} className="form-card">
			<div className="form-card_input">
				<input
					type="text"
					placeholder="Enter Your Name"
					onChange={nameInputHandler}
					value={name}
				/>
			</div>
			<div className="form-card_input">
				<input type="file" accept="image/*" onChange={imageUploadHandler} />
			</div>
			<div className="form-card_input">
				<textarea
					name="message"
					placeholder="Enter Your Testimony..."
					onChange={testimonyInputHandler}
					value={testimony}
				/>
			</div>

			<button type="submit">Click to Upload</button>
		</form>
	);
};

export default Form;
