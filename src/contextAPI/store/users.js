import React, { createContext } from 'react';

export const UserContext = createContext()

const UserStore = (props) => {

    const users = {
        name : "testName",
        age : 30
    }
    const dogs = [
        {"name": "식빵", "family": "웰시코기", "age": 1, "weight": 2.14},
        {"name": "콩콩", "family": "포메라니안", "age": 3, "weight": 2.5},
        {"name": "젤리", "family": "푸들", "age": 7, "weight": 3.1}
    ]
    
    return (
        <div>
            <UserContext.Provider value={dogs}>{props.children}</UserContext.Provider>
        </div>
    );
};

export default UserStore;