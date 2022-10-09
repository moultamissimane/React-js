import React from "react";

export const Conditional = ({children , condition}) => {
	
	return (
		<React.Fragment>
			{condition && children}
		</React.Fragment>
	);
};