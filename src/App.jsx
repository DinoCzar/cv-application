import { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Input from './components/Input';
import Button from './components/Button';
import './styles/App.css';

function App() {
	const handleButtonClick = (url) => {
		window.location.href = url;
	};

	return (
		<>
			<div>
				<Button handleClick={handleButtonClick} />
			</div>
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
						/>
						<Input
							legend={'Phone'}
							placeholder='Phone'
							id='phone'
							name='phone'
						/>
						<Input
							legend={'Address'}
							placeholder='City, State'
							id='address'
							name='address'
						/>
					</div>
					<div id='education'></div>
					<div id='experience'></div>
				</div>
				<div id='cv'>
					<Personal />
					<Education />
					<Experience />
				</div>
			</div>
		</>
	);
}

export default App;
