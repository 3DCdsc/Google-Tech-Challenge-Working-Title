import React,{Component} from 'react';
import Countdown from '../../components/Countdown/Countdown'
import {withRouter} from 'react-router-dom';
import styles from './WaitHome.module.css';
import UncontrolledLottie from '../../components/Lotties/UncontrolledLottie';

class WaitHome extends Component{

    handleStop = (event,data)=>{
        console.log('Event: ', event);
        console.log('Data: ', data);
    }

    render(){
        return(
        <div className={styles.Home}>
            <div className={styles.logo}>
              <UncontrolledLottie height="480px" width="480px"/>
            </div>
            
            <Countdown timeTillDate="05 18 2020, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
        </div>
        );
    }
}

export default withRouter(WaitHome);

//