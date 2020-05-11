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
                <h2>If you like to contact us individually</h2>
                <ul>
                    <li>Caleb Foo</li>
                    <li>Chester Koh</li>
                    <li>Huiqing</li>
                    <li>Shiying</li>
                    <li>Wee Ping</li>
                    <li>Shoham</li>
                    <li>Kai Xun</li>
                    <li>Jason Chow</li>
                    <li>Mark</li>
                    <li>Cawin</li>
                    <li>Shyam</li>
                </ul>
                
            </div>
        );
    }
}