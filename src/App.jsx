import { useState } from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';
import './styles/App.css';

function App() {
	return (
		<>
			<div id='container'>
				<div id='sidebar'>
					<div id='view'>
						<div id='clear'></div>
						<div id='example'></div>
					</div>
					<div id='personal'>
						<div id='name'></div>
						<div id='email'></div>
						<div id='phone'></div>
						<div id='city'></div>
					</div>
					<div id='education'></div>
					<div id='experience'></div>
				</div>
				<div id='cv'>
					<General />
					<Educational />
					<Practical />
				</div>
			</div>
		</>
	);
}

export default App;
