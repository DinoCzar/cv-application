function Input({legend, name, placeholder, id}) {
    const formInfo = {
        name: name,
        placeholder: placeholder,
        id: id,
    };

	return (
		<div className='user-input'>
				<legend>{legend}</legend>
				<div class='form'>
					<input type='text' name={formInfo.name} id={formInfo.id} placeholder={formInfo.placeholder} />
				</div>
		</div>
	);
}

export default Input;
