import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Form,
  Input,
  Button,
  Message,
} from 'semantic-ui-react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Register extends Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }
  };

  render() {
    const errorList = [];
    const {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
    } = this.state;

    if (usernameError) {
      errorList.push(usernameError);
    }
    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Form>
          <Form.Field error={!!usernameError}>
            <Input
              fluid
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field error={!!emailError}>
            <Input
              fluid
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field error={!!passwordError}>
            <Input
              fluid
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button primary onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
        {errorList.length ? (
          <Message
            error
            header="There was some errors with your submission"
            list={errorList}
          />
        ) : null}
      </Container>
    );
  }
}

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(registerMutation)(Register);
