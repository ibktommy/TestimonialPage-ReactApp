import React from 'react'
import "./ErrorModal.scss";

const ErrorlModal = (props) => {
	return (
		<div className="error-bg">
			<div className="error-bg-card">
				<i class="fa-solid fa-triangle-exclamation"></i>
				<p>{props.errorMessage}</p>
				<button>Close</button>
			</div>
		</div>
	);
};

export default ErrorlModal