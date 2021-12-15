import classNames from "classnames";
import React from "react";
import "./style.scss";

export default function Button({
	color = "colored",
	size = "small",
	type = "default",
	round,
	icon,
	children,
}) {
	return (
		<>
			<button
				className={classNames(
					"button",
					`button-${color}`,
					`button-${size}`,
					`button-${type}`,
					{ round }
				)}
			>
				{type === "icon-left" && icon}
				{children}
				{type === "icon-right" && icon}
			</button>
		</>
	);
}
