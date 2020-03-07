import React from 'react';
import logo from './logo.svg';
import Img from './3DC-logo.png';
import './App.css';
import Countdown from './countdown.js';
import $ from 'jquery';
import styled from 'styled-components';
window.$ = $;

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

$('h1').on("touchstart",function (){
  //simply starts listening for touchstart - allows for hover state on touch devices
});

export default App;
