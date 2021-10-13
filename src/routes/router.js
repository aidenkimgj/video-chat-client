import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Chat, Main } from '../page';

const Router = () => {
  return (
    <div id="main">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </div>
  );
};

export default Router;
