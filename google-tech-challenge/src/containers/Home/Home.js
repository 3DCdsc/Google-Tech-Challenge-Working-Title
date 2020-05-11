import React,{Component} from 'react';
import styles from './Home.module.css';
import UncontrolledLottie from '../../components/Lotties/UncontrolledLottie';
import { StyledMobileButton } from '../../components/StyledComponents/StyledButton';
export default class Home extends Component{
    render(){
        return(
            <div className={styles.Home}>
                <UncontrolledLottie className={styles.logo}/>
                <div className={styles.sub}>
                    <h1>Google Tech Challenge</h1>
                    <h2>I'm the best coder</h2>
                    <h3>Date and Time and Place </h3>
                    <StyledMobileButton onClick={()=>{this.props.history.push('/register')}}>Register Here</StyledMobileButton>
                </div>
            </div>
            );
    }
}

