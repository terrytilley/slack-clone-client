import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Input, Button } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async onSubmit() {
    const response = await this.props.mutate({
      variables: this.state,
    });

    console.log(response);
  }

  render() {
    const { username, email, password } = this.state;

    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Input
          fluid
          placeholder="Username"
          name="username"
          value={username}
          onChange={this.onChange}
        />
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

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(registerMutation)(Register);
