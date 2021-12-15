// import IconLeft from "../../assets/images/icon-left.svg";

export const NarrowIcon = ({ direction = "left" }) => {
	let icon = (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.46609 4.81329L6.72609 7.55329C6.60192 7.6782 6.53223 7.84717 6.53223 8.02329C6.53223 8.19942 6.60192 8.36838 6.72609 8.49329L9.39276 11.16"
				stroke="white"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="bevel"
			/>
		</svg>
	);
	if (direction === "right") {
		icon = (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.5332 11.1867L9.2732 8.44669C9.39737 8.32178 9.46706 8.15282 9.46706 7.97669C9.46706 7.80057 9.39737 7.6316 9.2732 7.50669L6.60654 4.84003"
					stroke="white"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="bevel"
				/>
			</svg>
		);
	}
	return icon;
};
