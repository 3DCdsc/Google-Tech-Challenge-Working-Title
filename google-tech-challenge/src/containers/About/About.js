import React, {Component} from 'react';
import styles from './About.module.css';
export default class About extends Component{
    render(){
        return(
            <div className={styles.About}>
                <h1>What is this?</h1>
                <p>
                Google Tech Challenge is a hackathon organised by SUTD 3DC DSC that brings people together to learn and develop solutions using Google products and platforms.
                </p>
                <p>
                Participants are free to build anything they want with these tools (free credits) and receive free training!
                </p>
            </div>
        );
    }
}