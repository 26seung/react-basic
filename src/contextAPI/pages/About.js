import React, { useContext } from 'react';
import { UserContext } from '../store/users';

const About = () => {
    
    const context = useContext(UserContext);
    console.log(context)

    const contextList = context.map((context,index) => (
        <div  key={index}>
             {context.name}
        </div>
    ))

    return (
        <div>
            <h3>About</h3>
            {/* <h3>{context[0]}</h3>
            <h3>{context[0].name}</h3>
            <h3>{context[0].age}</h3> */}

            {/* {context.map((context, index) =>
                    <div key={index}>
                        {context.name}
                    </div>
                )} */}
                {contextList}
        </div>
    );
};

export default About;