import React, { useState, useEffect } from 'react';
// import AddRoomModal from '../../components/AddRoomModal/AddRoomModal';
import UserCard from '../../components/UserCard/UserCard';
import styles from './Users.module.css';
import { getAllUser } from '../../http';


    const HostRooms = () => {
    const [showModal, setShowModal] = useState(false);
    const [users, setRooms] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await getAllUser();
            setRooms(data);
         
            
}
            
        
        fetchUsers();
    }, []);


    return (
        <>
        <div className="container">
         <div className={styles.roomsHeader}>
                    <div className={styles.left}>
                        <span className={styles.heading}>All Users</span>
                        <div className={styles.searchBox}>
                            <img src="/images/search-icon.png" alt="search" />
                            <input type="text" className={styles.searchInput} />
                        </div>
                   </div>
</div>
                
                <div className={styles.roomList}>
                    
                {users.map((user) => (
                        <UserCard key={user.id} user={user}></UserCard>
                    ))}
                
           
            </div>
            </div>
            {/* {showModal && <AddRoomModal onClose={() => setShowModal(false)} />} */}
        </>
    );
};

export default HostRooms;