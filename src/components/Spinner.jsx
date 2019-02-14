import React from "react";

const Spinner = _ => {
	return (
		<div className="ui container">
			<div className="ui active dimmer">
				<div className="ui loader" />
			</div>
		</div>
	);
};

export default Spinner;
