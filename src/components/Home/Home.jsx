import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            This is Home {user.displayName}
        </div>
    );
};

export default Home;