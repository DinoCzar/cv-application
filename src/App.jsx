import { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Input from './components/Input';
import Button from './components/Button';
import './styles/App.css';

function App() {
  const [educationValue, setEducationValue] = useState('');

  const handleButtonClick = (url) => {
    window.location.href = url;
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
          <div id='education'>
            <input
              type="text"
              value={educationValue}
              onChange={(e) => setEducationValue(e.target.value)}
              placeholder="Enter your education information"
            />
          </div>
          <div id='display-education'>
            {educationValue}
          </div>
          <div id='experience'></div>
        </div>
        <div id='cv'>
          <Personal />
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
