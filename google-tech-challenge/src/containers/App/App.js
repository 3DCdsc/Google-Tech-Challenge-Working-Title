import React from 'react';
import logo from '../../assets/images/logo.svg';
import Img from '../../assets/images/3DC-logo.png';
import './App.css';
import Countdown from '../../components/Countdown/Countdown';
import styled from 'styled-components';

const HoverText = styled.h1`
  color: #000;
  
	:hover {
		color: white;
	}
`;

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className>
        <HoverText>
          3DC
        </HoverText>
        </div>
        <h2>
          GTC
        </h2>
      </div>
      <Countdown timeTillDate="05 18 2020, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
      <div class="nc-main bg-cover bg-cc">
			<div class="bg-animation">
					<div id='stars'></div>
					<div id='stars2'></div>
					<div id='stars3'></div>
					<div id='stars4'></div>
				</div>
			</div>
    </div>
  );
}


export default App;
