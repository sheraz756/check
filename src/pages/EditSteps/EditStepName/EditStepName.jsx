import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EditStepName.module.css';
import { Link, useHistory } from 'react-router-dom';
const EditStepName = ({ onNext }) => {
    const { name } = useSelector((state) => state.activate);
    const { email } = useSelector((state) => state.activate);
    const { dob } = useSelector((state) => state.activate);
    const { jobtitle } = useSelector((state) => state.activate);
    const { department } = useSelector((state) => state.activate);
    const { organization } = useSelector((state) => state.activate);
    const { country } = useSelector((state) => state.activate);

    const dispatch = useDispatch();
    const [fullname, setFullname] = useState(name);
    const [mail, setmail] = useState(email);
    const [dob1, setdob1] = useState(dob);
    const [jobtitle1, setjobtitle1] = useState(jobtitle);
    const [depart, setdepart] = useState(department);
    const [org, setorg] = useState(organization);
    const [count, setcount] = useState(country);
    const history = useHistory();
    function nextStep() {
  alert("Can't Update Record UnAuthorized Activity")
  history.push('/');
    }
    return (
        <>
            <Card title="Update Your Profile:" icon="goggle-emoji">
           
                <TextInput
                placeholder="Enter Your Full Name" 
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                   <TextInput
                   placeholder="Enter Your Email Address"
                    value={mail}
                    onChange={(e) => setmail(e.target.value)}
                />
                    <TextInput
                    placeholder="Enter Your Full DOB"
                    value={dob1}
                    onChange={(e) => setdob1(e.target.value)}
                />
                   <TextInput
                   placeholder="Enter Your JobTitle"
                    value={jobtitle1}
                    onChange={(e) => setjobtitle1(e.target.value)}
                /> 
                        <TextInput
                        placeholder="Enter Your Department Name"
                    value={depart}
                    onChange={(e) => setdepart(e.target.value)}
                />
                            <TextInput
                            placeholder="Enter Your Organization"
                    value={org}
                    onChange={(e) => setorg(e.target.value)}
                />
                               <TextInput
                               placeholder="Enter Your Country Name"
                    value={count}
                    onChange={(e) => setcount(e.target.value)}
                />
         
                <p className={styles.paragraph}>
                    People use  anonymous at Anony :) !
                </p>
                <div>
                    <Button onClick={nextStep} text="Next" />
                </div>
        
            </Card>
        </>
    );
};

export default EditStepName;