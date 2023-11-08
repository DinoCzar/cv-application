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
	const [firstSchoolValue, setFirstSchoolValue] = useState('');
	const [secondSchoolValue, setSecondSchoolValue] = useState('');
	const [thirdSchoolValue, setThirdSchoolValue] = useState('');
	const [firstJobValue, setFirstJobValue] = useState('');
	const [secondJobValue, setSecondJobValue] = useState('');
	const [thirdJobValue, setThirdJobValue] = useState('');

	const [displayName, setDisplayName] = useState('');
	const [displayPhone, setDisplayPhone] = useState('');
	const [displayAddress, setDisplayAddress] = useState('');
	const [displayFirstSchool, setDisplayFirstSchool] = useState('');
	const [displaySecondSchool, setDisplaySecondSchool] = useState('');
	const [displayThirdSchool, setDisplayThirdSchool] = useState('');
	const [displayFirstJob, setDisplayFirstJob] = useState('');
	const [displaySecondJob, setDisplaySecondJob] = useState('');
	const [displayThirdJob, setDisplayThirdJob] = useState('');

	const submitButtonClick = () => {
		setNameValue('');
		setPhoneValue('');
		setAddressValue('');
		setFirstSchoolValue('');
		setSecondSchoolValue('');
		setThirdSchoolValue('');
		setFirstJobValue('');
		setSecondJobValue('');
		setThirdJobValue('');
	};

	const editButtonClick = () => {
		setNameValue(displayName);
		setPhoneValue(displayPhone);
		setAddressValue(displayAddress);
		setFirstSchoolValue(displayFirstSchool);
		setSecondSchoolValue(displaySecondSchool);
		setThirdSchoolValue(displayThirdSchool);
		setFirstJobValue(displayFirstJob);
		setSecondJobValue(displaySecondJob);
		setThirdJobValue(displayThirdJob);
	};

	return (
		<>
			<div id='container'>
				<div id='sidebar'>
					<div id='view'>
						<Button handleClick={editButtonClick} text='Edit' />
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
							onChange={(e) => {
								setDisplayPhone(e.target.value);
								setPhoneValue(e.target.value);
							}}
						/>
						<Input
							legend={'Address'}
							placeholder='City, State'
							id='address'
							name='address'
							value={addressValue}
							onChange={(e) => {
								setDisplayAddress(e.target.value);
								setAddressValue(e.target.value);
							}}
						/>
					</div>
					<div id='education'>
						<Input
							legend={'School 1'}
							placeholder='School Name'
							id='first-school'
							name='first-school'
							value={firstSchoolValue}
							onChange={(e) => {
								setDisplayFirstSchool(e.target.value);
								setFirstSchoolValue(e.target.value);
							}}
						/>
						<Input
							legend={'School 2'}
							placeholder='School Name'
							id='second-school'
							name='second-school'
							value={secondSchoolValue}
							onChange={(e) => {
								setDisplaySecondSchool(e.target.value);
								setSecondSchoolValue(e.target.value);
							}}
						/>
						<Input
							legend={'School 3'}
							placeholder='School Name'
							id='third-school'
							name='third-school'
							value={thirdSchoolValue}
							onChange={(e) => {
								setThirdSchoolValue(e.target.value);
								setDisplayThirdSchool(e.target.value);
							}}
						/>
					</div>
					<div id='experience'>
						<Input
							legend={'Work 1'}
							placeholder='Experience'
							id='first-job'
							name='first-job'
							value={firstJobValue}
							onChange={(e) => {
								setFirstJobValue(e.target.value);
								setDisplayFirstJob(e.target.value);
							}}
						/>
						<Input
							legend={'Work 2'}
							placeholder='Experience'
							id='second-job'
							name='second-job'
							value={secondJobValue}
							onChange={(e) => {
								setSecondJobValue(e.target.value);
								setDisplaySecondJob(e.target.value);
							}}
						/>
						<Input
							legend={'Work 3'}
							placeholder='Experience'
							id='third-job'
							name='third-job'
							value={thirdJobValue}
							onChange={(e) => {
								setThirdJobValue(e.target.value);
								setDisplayThirdJob(e.target.value);
							}}
						/>
					</div>
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
					<div id='display-education'>
						<div className='display'>
							{displayFirstSchool}
						</div>
						<div className='display'>
							{displaySecondSchool}
						</div>
						<div className='display'>
							{displayThirdSchool}
						</div>
					</div>
					<div id='display-experience'>
						<div className='display'>
							{displayFirstJob}
						</div>
						<div className='display'>
							{displaySecondJob}
						</div>
						<div className='display'>
							{displayThirdJob}
						</div>
					</div>
				</div>
			</div>
			<div id='submit-div'>
				<Button handleClick={submitButtonClick} text='Submit' />
			</div>
		</>
	);
}

export default App;
