import React from 'react';

import Input from '../components/Input';
import Teams from '../components/Teams';
import Header from '../components/Header';
import Channels from '../components/Channels';
import Messages from '../components/Messages';
import AppLayout from '../components/AppLayout';

const ViewTeam = () => (
  <AppLayout>
    <Teams className="teams">Teams</Teams>
    <Channels>Channels</Channels>
    <Header>Header</Header>
    <Messages>
      <ul className="message-list">
        <li>Message 1</li>
        <li>Message 2</li>
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </Input>
  </AppLayout>
);

export default ViewTeam;
