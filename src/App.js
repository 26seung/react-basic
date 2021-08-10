import React from 'react';
import { Switch, Route } from "react-router-dom";
import Main from './components/Main';
import About from './contextAPI/pages/About';
import Profile from './contextAPI/pages/Profile';
import UserStore from './contextAPI/store/users';

const App = () => {
  return (
    <div>      
      <Switch>
        <Route exact path={"/"} component={Main} />
        <UserStore>
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/profile"} component={Profile} />
        </UserStore>
      </Switch>
    </div>
  );
};

export default App;