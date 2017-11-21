import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, signUpUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)
  }

  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPressLogin() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onButtonPressSignUp() {
    this.props.signUpUser();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View style={styles.container}>
         <View style={styles.buttonContainer}>
          <Button onPress={this.onButtonPressLogin.bind(this)}>
            Login
          </Button>
          </View>
          <View style={styles.buttonContainer}>
          <Button onPress={this.onButtonPressSignUp.bind(this)}>
            Register
          </Button>
          </View>
        </View>

  );
}
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'black' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>  
      );
    }
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/logo.png')}
            />
        </View>

        <Card>
          <CardSection>
            <Input
              label = "Email"
              placeholder="username@apu.edu"
              placeholderTextColor={"#000"}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
            </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>

          {this.renderError()}

          <CardSection style={styles.cardContainer}>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#000000'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2
},
buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
logoContainer: {
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 100
},
logo:{
  width: 210,
  height: 100
},
cardContainer: {
  borderBottomWidth: 0,
  paddingTop: 25
},
inputStyle: {
  color: 'white',
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  lineHeight: 23,
  flex: 2
}
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser, signUpUser
 })(LoginForm);