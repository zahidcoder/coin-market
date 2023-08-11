import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className={styles.errorWrapper}>
      <div>Error 404 - Page Not Found</div> 
      <div>
      Got back to  
        <Link to = '/'>
        Home
        </Link>        
        </div> 
    </div>
  )
}

export default Error
