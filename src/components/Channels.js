import React from 'react';
import styled from 'styled-components';

const ChannelWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  color: #958993;
  background-color: #4e3a4c;
`;

const user = ({ id, name }) => <li key={`user-${id}`}>{name}</li>;
const channel = ({ id, name }) => <li key={`channel-${id}`}>{`# ${name}`}</li>;

const Channels = ({ teamName, username, channels, users }) => (
  <ChannelWrapper>
    <div>
      {teamName}
      {username}
    </div>
    <ul>
      <li>Channels</li>
      {channels.map(channel)}
    </ul>
    <ul>
      <li>Direct Messages</li>
      {users.map(user)}
    </ul>
  </ChannelWrapper>
);

export default Channels;
