import React, {Component} from 'react';
import styles from './PointOfContact.module.css';
export default class PointOfContact extends Component{
    render(){
        return(
            <div className={styles.PointOfContact}>
                <h1>Contact Us!</h1>
                <ul>
                    <li>Official Email: 3dc@club.sutd.edu.sg</li>
                    <li>Club Website: </li>
                </ul>
                
            </div>
        );
    }
}