import React from 'react'
import styles from './loader.module.scss';

const Loader = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Loader
