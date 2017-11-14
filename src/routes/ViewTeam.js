import React from 'react';

import Teams from '../components/Teams';
import Header from '../components/Header';
import Channels from '../components/Channels';
import Messages from '../components/Messages';
import AppLayout from '../components/AppLayout';
import SendMessage from '../components/SendMessage';

const ViewTeam = () => (
  <AppLayout>
    <Teams teams={[{ id: 1, letter: 'M' }, { id: 2, letter: 'T' }]} />
    <Channels
      teamName="Team Name"
      username="username"
      channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
      users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
    />
    <Header channelName="general" />
    <Messages>
      <ul className="message-list">
        <li>Message 1</li>
        <li>Message 2</li>
      </ul>
    </Messages>
    <SendMessage channelName="general" />
  </AppLayout>
);

export default ViewTeam;
