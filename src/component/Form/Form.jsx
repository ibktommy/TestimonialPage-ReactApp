import React from 'react'

const Form = () => {
	return (
		<>
			<form className="flex" onSubmit={handleSubmit}>
				<div className="form-content">
					<input type="text" placeholder="Your Name Here..." />
				</div>
				<div className="form-content">
					<textarea
						name="message"
						id="message"
						placeholder="Your Message Here..."
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

export default Form