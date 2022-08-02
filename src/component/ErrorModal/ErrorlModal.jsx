import React from 'react'
import "./ErrorModal.scss";

const ErrorlModal = ({ errorMessage }) => {
	return (
		<div className="error-bg">
			<div className="error-bg-card">
				<i className="fa-solid fa-triangle-exclamation"></i>
				<p>{errorMessage}</p>
				<button>Close</button>
			</div>
		</div>
	);
};

export default ErrorlModal