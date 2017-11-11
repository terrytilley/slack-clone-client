import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Container, Header, Input, Button } from 'semantic-ui-react';

export default observer(
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

    onSubmit() {
      const { email, password } = this;
      console.log('email:', email);
      console.log('password:', password);
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
);
