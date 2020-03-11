import React,{Component} from 'react';
import styled from 'styled-components';
import Countdown from '../../components/Countdown/Countdown'
import {withRouter} from 'react-router-dom';
import './Home.css';
import { Logo } from "../../components/Logo/Logo";
import StarfieldAnimation from 'react-starfield-animation'



const HoverText = styled.h1`
  color: #000;

	&:hover {
		color: white;
	}
`;
class Home extends Component{

    handleStop = (event,data)=>{
        console.log('Event: ', event);
        console.log('Data: ', data);
    }

    render(){
        return(
        <div className="Home">
            <Logo />
            <Countdown timeTillDate="05 18 2020, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
            <StarfieldAnimation
          numParticles={400}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        </div>
        );
    }
}

export default withRouter(Home);

//