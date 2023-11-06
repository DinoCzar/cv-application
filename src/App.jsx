import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';
import './styles/App.css';

function App() {


	return (
		<>
      <General />
      <Educational />
      <Practical />
		</>
	);
}

export default App;
