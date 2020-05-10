import React,{Component} from 'react';
import styles from './Home.module.css';
import UncontrolledLottie from '../../components/Lotties/UncontrolledLottie';
import { StyledMobileButton } from '../../components/StyledComponents/StyledButton';
import StarfieldBackground from '../../components/StarfieldBackground/StarfieldBackground';

export default class Home extends Component{
    render(){
        return(
            <div className={styles.Home}>
                <UncontrolledLottie className={styles.logo}/>
                <div className={styles.sub}>
                    <h1>Google Tech Challenge</h1>
                    <h2>Your Ideas</h2>
                    <h3>Date and Time and Place </h3>
                    <StyledMobileButton>Register Here</StyledMobileButton>
                    <StyledMobileButton>More Details</StyledMobileButton>
                </div>
            </div>
            );
    }
}

