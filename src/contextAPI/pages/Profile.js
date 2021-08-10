import React, { useContext } from 'react';
import { UserContext } from '../store/users';

const Profile = () => {

    const context = useContext(UserContext);

    return (
        <div>
            <h3>Profile</h3>
            <h3>{context.name}</h3>
            <h3>{context.age}</h3>
        </div>
    );
};

export default Profile;