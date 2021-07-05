import React from 'react';
import Header from './Header';
import SwipeButtons from './SwipeButtons'
import TinderCards from './TinderCards';
import Chats from './Chats';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen/>
        </Route>
        <Route path="/chat">
          <Header backButton="/" />
          <Chats/>
        </Route>
          <Route path="/">
            <Header/>
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
