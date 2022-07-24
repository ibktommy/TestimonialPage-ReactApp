import React from 'react'

const Form = () => {
  return (
		<>
			<form className="flex">
				<div className="form-content flex">
					{/* <label htmlFor="name">Enter Your Name</label> */}
					<input type="text" placeholder="Your Name Here..." />
				</div>
				<div className="form-content flex">
					{/* <label htmlFor="message">Enter Your Name</label> */}
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
}

export default Form