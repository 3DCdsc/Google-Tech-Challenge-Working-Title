import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/anim_GTC.json';
class UncontrolledLottie extends Component {
    constructor(props){
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    state={
        height:0,
        width:0,
    }
  
    componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions); 
    
  }
    
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions(){
      this.setState({ 
          width: window.innerWidth, 
          height: window.innerHeight 
      });
    }

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    
  

    return(

        <Lottie options = {defaultOptions} style={{margin:0}}
              height = {this.state.width*0.4}
              width  = {this.state.width*0.4}
        />
      
    )
  }
}

export default UncontrolledLottie