function TextInput({ helperText, ...props }) {
	return (
		<span>
			<span className="">
				<input {...props} />
			</span>
			{helperText && (
				<div>
					<span>{helperText}</span>
				</div>
			)}
		</span>
	);
}

export default TextInput;
