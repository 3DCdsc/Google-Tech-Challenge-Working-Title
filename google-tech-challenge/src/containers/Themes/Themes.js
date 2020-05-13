import React, {Component} from 'react';
import styles from './Themes.module.css';
export default class Themes extends Component{
    render(){
        return(
            <div className={styles.Themes}>
                <h1>Themes</h1>
                In this Challenge, teams will not be restricted to themes for their projects. However, teams can consider the following problem statements in the case of a lack of inspiration: 
                - COVID19 (relevant)
                - Healthcare
                - Onboarding Experiences (plausible)
                - Smart Nation
                - Media/Information
                - Virtual Teaching
                - Games
                
            </div>
        );
    }
}