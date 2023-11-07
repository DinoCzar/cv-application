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
			<Input placeholder='Name' id='name' name='name' />
			<Input placeholder='Phone' id='phone' name='phone' />
			<Input placeholder='City' id='city' name='city' />
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
						<div id='name'>
							<Input />
						</div>
						<div id='email'></div>
						<div id='phone'></div>
						<div id='city'></div>
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
