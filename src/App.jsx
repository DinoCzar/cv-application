import { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Input from './components/Input';
import Button from './components/Button';
import './styles/App.css';

function App() {
	const [nameValue, setNameValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
	const [addressValue, setAddressValue] = useState('');

	const [displayName, setDisplayName] = useState('');
	const [displayPhone, setDisplayPhone] = useState('');
	const [displayAddress, setDisplayAddress] = useState('');

	const handleButtonClick = () => {
		setNameValue('');
	};

	return (
		<>
			<div id='container'>
				<div id='sidebar'>
					<div id='view'>
						<div id='clear'></div>
						<div id='example'></div>
					</div>
					<div id='personal'>
						<Input
							legend={'Full Name'}
							placeholder='Name'
							id='name'
							name='name'
							value={nameValue}
							onChange={(e) => {
								setDisplayName(e.target.value);
								setNameValue(e.target.value);
							}}
						/>
						<Input
							legend={'Phone'}
							placeholder='Phone'
							id='phone'
							name='phone'
							value={phoneValue}
							onChange={(e) => setPhoneValue(e.target.value)}
						/>
						<Input
							legend={'Address'}
							placeholder='City, State'
							id='address'
							name='address'
							value={addressValue}
							onChange={(e) => setAddressValue(e.target.value)}
						/>
					</div>
					<div id='education'></div>
					<div id='experience'></div>
				</div>
				<div id='cv'>
					<div id='personal'>
						<div className='display' id='display-name'>
							{displayName}
						</div>
						<div className='display' id='display-phone'>
							{displayPhone}
						</div>
						<div className='display' id='display-address'>
							{displayAddress}
						</div>
					</div>
					<Education />
					<Experience />
				</div>
			</div>
			<div id='submit-div'>
				<Button handleClick={handleButtonClick} />
			</div>
		</>
	);
}

export default App;
