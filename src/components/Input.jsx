function Input() {
	return (
		<div id='modal'>
			<fieldset>
				<legend>Add New Book</legend>
				<div class='form'>
					<input type='text' name='name' id='name' placeholder='Name' />
				</div>
				<div class='form'>
					<input type='text' name='phone' id='phone' placeholder='Phone' />
				</div>
				<div class='form'>
					<input type='text' name='city' id='city' placeholder='City' />
				</div>
				<div id='submit-button'>
					<button type='submit' id='submit'>
						Submit
					</button>
				</div>
			</fieldset>
		</div>
	);
}

export default Input;
