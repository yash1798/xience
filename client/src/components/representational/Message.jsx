import React from "react"

import "../../styles/message.css"

const Message = ({ red, height, width, children }) => {
	var color = ""
	if (red) {
		color = "#ffb3b3"
	} else {
		color = "#ccffcc"
	}
	return (
		<div
			className="message"
			style={{
				height: `${height}`,
				width: `${width}`,
				backgroundColor: `${color}`,
			}}
		>
			<p>{children}</p>
		</div>
	)
}

export default Message
