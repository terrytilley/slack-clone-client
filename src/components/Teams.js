import React from 'react';
import styled from 'styled-components';

const TeamsWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  color: #958993;
  background-color: #362234;
`;

const team = ({ id, letter }) => <li key={`team-${id}`}>{letter}</li>;

const Teams = ({ teams }) => (
  <TeamsWrapper>
    <ul>{teams.map(team)}</ul>
  </TeamsWrapper>
);

export default Teams;
