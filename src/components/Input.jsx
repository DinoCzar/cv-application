function Input({name, placeholder, id}) {
    const formInfo = {
        name: name,
        placeholder: placeholder,
        id: id
    };

	return (
		<div id='modal'>
			<fieldset>
				<legend>Add New Book</legend>
				<div class='form'>
					<input type='text' name={formInfo.name} id={formInfo.id} placeholder={formInfo.placeholder} />
				</div>
			</fieldset>
		</div>
	);
}

export default Input;
