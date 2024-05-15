import React from 'react';
import styles from './HelperText.module.css'; 

function HelperText(props){
    return(
        <div className={styles.helperText}>{props.text}</div>
    )
}

export default HelperText;