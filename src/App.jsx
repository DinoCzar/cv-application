import { useState } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Input from './components/Input';
import Button from './components/Button';
import './styles/App.css';

function App() {
  const [personalValue, setPersonalValue] = useState('');

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  // Function to handle changes in the 'Full Name' input
  const handleFullNameChange = (e) => {
    setPersonalValue(e.target.value);
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
            <input
			
              legend={'Full Name'}
              placeholder='Name'
              id='name'
              name='name'
    

			  type="text"
              value={personalValue}
              onChange={(e) => setPersonalValue(e.target.value)}>

			  </input>
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
           
          </div>
          <div id='experience'></div>
        </div>
        <div id='cv'>
          <div id='personal'>{personalValue}</div>
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
