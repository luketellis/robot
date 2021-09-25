function TextInput({ helperText, ...props }) {
	return (
		<span>
			<span className="">
				<input {...props} />
			</span>
			{helperText && (
				<div>
					<span>{helperText.text}</span>
				</div>
			)}
		</span>
	);
}

export default TextInput;
