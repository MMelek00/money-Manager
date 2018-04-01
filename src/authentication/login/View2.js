import React, { Component } from "react";
import { Container, Content, Button, Text, Icon } from "native-base";

class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button block backgroundColor="#3b5998">
            <Icon name="facebook" />
            <Text> LOG IN WITH FACEBOOK</Text>
          </Button>
          <Button block>
            <Icon name="google--with-circle" />
            <Text>LOG IN WITH GOOGLE</Text>
          </Button>
          <Button block>
            <Icon name="gmail" />
            <Text>SIGN UP OR LOG INWITH EMAIL</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
