import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import './styles/App.css';

const initialValues = {
	name: '',
	phone: '',
	address: '',
	firstSchool: '',
	secondSchool: '',
	thirdSchool: '',
	firstJob: '',
	secondJob: '',
	thirdJob: '',
};

function App() {
	const [formValues, setFormValues] = useState({ ...initialValues });
	const [displayValues, setDisplayValues] = useState({ ...initialValues });

	const handleChange = (key, value) => {
		setFormValues({ ...formValues, [key]: value });
		setDisplayValues({ ...displayValues, [key]: value });
	};

	const resetForm = () => {
		setFormValues({ ...initialValues });
	};

	const resetDisplay = () => {
		setFormValues({ ...displayValues });
	};

	return (
		<>
			<div id='container'>
				<div id='sidebar'>
					<div id='view'>
						<Button handleClick={resetDisplay} text='Edit' />
					</div>
					<div id='personal'>
						{['name', 'phone', 'address'].map((key) => (
							<Input
								legend={key.charAt(0).toUpperCase() + key.slice(1)}
								placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
								id={key}
								name={key}
								value={formValues[key]}
								onChange={(e) => handleChange(key, e.target.value)}
							/>
						))}
					</div>
					<div id='education'>
						{['firstSchool', 'secondSchool', 'thirdSchool'].map((key) => (
							<Input
								legend={`School ${
									key === 'firstSchool'
										? '1'
										: key === 'secondSchool'
										? '2'
										: '3'
								}`}
								placeholder='School Name'
								id={key}
								name={key}
								value={formValues[key]}
								onChange={(e) => handleChange(key, e.target.value)}
							/>
						))}
					</div>
					<div id='experience'>
						{['firstJob', 'secondJob', 'thirdJob'].map((key) => (
							<Input
								legend={`Work ${
									key === 'firstJob' ? '1' : key === 'secondJob' ? '2' : '3'
								}`}
								placeholder='Experience'
								id={key}
								name={key}
								value={formValues[key]}
								onChange={(e) => handleChange(key, e.target.value)}
							/>
						))}
					</div>
				</div>
				<div id='cv'>
					<div id='personal'>
						{['name', 'phone', 'address'].map((key) => (
							<div className='display' key={key}>
								{displayValues[key]}
							</div>
						))}
					</div>
					<div id='display-education'>
						<div className='display-title'>Education</div>
						{['firstSchool', 'secondSchool', 'thirdSchool'].map((key) => (
							<div className='display' key={key}>
								{displayValues[key]}
							</div>
						))}
					</div>
					<div id='display-experience'>
						<div className='display-title'>Experience</div>
						{['firstJob', 'secondJob', 'thirdJob'].map((key) => (
							<div className='display' key={key}>
								{displayValues[key]}
							</div>
						))}
					</div>
				</div>
			</div>
			<div id='submit-div'>
				<Button handleClick={resetForm} text='Submit' />
			</div>
		</>
	);
}

export default App;
