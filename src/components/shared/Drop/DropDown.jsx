// import React from 'react'
import styles from './DropDown.module.css'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { logout } from "../../../http";
// import styles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
// import { getAllEdit } from '../../../http'
// import DropDown from './Drop/DropDown';

const DropDown = ({onClose}) => {
    const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state) => state.auth);
    async function logoutUser() {
      try {
        const { data } = await logout();
        dispatch(setAuth(data));
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <div onClick={onClose}>                 <div className={styles.box}>
    <img
    onClick={onClose}
      src={user?.avatar}
      alt=""
      className={styles.chk}
    />
    <div className={styles.line}></div>
    <div className={styles.roomList}>
         

        </div>
   <div className={styles.one}> <span className={styles.left}>Name:</span><span className={styles.right}>{user.name}</span></div>
   <div className={styles.one}><span className={styles.left}>Email:</span><span className={styles.right}>{user.email}</span></div>
  <div className={styles.one}> <span className={styles.left}>Phone:</span><span className={styles.right}>{user.phone}</span></div>
  <div className={styles.one}> <span className={styles.left}>DOB:</span><span  className={styles.right}>{user.dob}</span></div>
    <div className={styles.line}></div>
   <div className={styles.one}> <span className={styles.left}>Job Title:</span><span id='ok6' className={styles.right}>{user.jobtitle}</span></div>
        <div className={styles.one}><span className={styles.left}>Department:</span><span id='ok' className={styles.right}>{user.department}</span></div>
   <div className={styles.one}> <span className={styles.left}>Organization:</span><span className={styles.right}>{user.organization}</span></div>
  <div className={styles.one}>  <span className={styles.left}>Country:</span><span className={styles.right}>{user?.country}</span></div>
   {/* <div className={styles.one}> <span className={styles.left}>Work Location:</span><span className={styles.right}>{user?.location}</span></div> */}
    <div>
    {/* <div className={styles.logout} onClick={logoutUser}>Logout</div> */}
    <Link to='/editprofile' className={styles.abc}><button className={styles.sett}>Edit Profile</button></Link>
    <button onClick={logoutUser} className={styles.sett}>Sign Out</button>
    </div>
    </div> 
    </div>
  )
}

export default DropDown