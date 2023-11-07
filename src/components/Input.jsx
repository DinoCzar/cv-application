function Input({legend, name, placeholder, id, value, onChange}) {
    const formInfo = {
        name: name,
        placeholder: placeholder,
        id: id,
		value: value,
		onChange: onChange
    };

	return (
		<div className='user-input'>
				<legend>{legend}</legend>
				<div class='form'>
					<input type='text' name={formInfo.name} id={formInfo.id} placeholder={formInfo.placeholder} value={formInfo.value} onChange={formInfo.onChange} />
				</div>
		</div>
	);
}

export default Input;
