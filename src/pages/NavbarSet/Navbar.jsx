import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './NavbarSet.module.css'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
}
  return (
    <>
    <div class="container" onClick={openModal}>
    <div class={styles.bar1}></div>
    <div class={styles.bar2}></div>
    <div class={styles.bar3}></div>
  
   {showModal &&  <div className={styles.cover1} onClose={() => setShowModal(false)}>
    
 <Link to='/' className={styles.chk}>Home</Link>  
  <Link to='/host' className={styles.chk}>Host</Link>
  <Link to='/admin' className={styles.chk}>Admin</Link>
 <Link to={{ pathname: "https://webrtc-fundamentals.herokuapp.com" }} target="_blank" className={styles.chk}>Free Chat</Link>  
    </div>}
    </div>
    </>
  )
}

export default Navbar