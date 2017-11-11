import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Container, Header, Input, Button } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';

class Login extends Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
    });

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  async onSubmit() {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { ok, token, refreshToken } = response.data.login;

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
    }
  }

  render() {
    const { email, password } = this;

    return (
      <Container text>
        <Header as="h2">Login</Header>
        <Input
          fluid
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <Input
          fluid
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(loginMutation)(observer(Login));
