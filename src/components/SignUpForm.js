import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Picker } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class SignUpForm extends Component {

state = { confirmPassword: '' };

      onEmailChange(text){
        this.props.emailChanged(text)
      }
    
      onPasswordChange(text){
        this.props.passwordChanged(text)
      }

      onConfirmPasswordChange(text){
        this.setState({ confirmPassword: text });
      }
    
      onButtonPressSignUp() {
        const { email, password } = this.props;
        
            this.props.signUpUser({ email, password });
      }
    
      renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
        return (
          <View style={styles.container}>
              <View style={styles.buttonContainer}>
              <Button onPress={this.onButtonPressSignUp.bind(this)}>
                Create Account
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

      renderSignUp() {
        
            // confirm password compare it
            // I agree
            // sign up
        
          }
    
      render() {
        return (
          <View style={styles.backgroundContainer}>
            
            <StatusBar
              barStyle='light-content'
            />
    
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../images/logo.png')}
                />
            </View>
    
            <Card>
              <CardSection>
                <Input
                  //icon = "Icons.chevronLeft"
                  label = "Email"
                  placeholder="username@apu.edu"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
                />
                </CardSection>
    
              <CardSection>
                <Input
                  secureTextEntry
                  label="Password"
                  placeholder="Password"
                  onChangeText={this.onPasswordChange.bind(this)}
                />
              </CardSection>

              <CardSection>
                <Input
                  secureTextEntry
                  label="Password"
                  placeholder="Confirm Password"
                  onChangeText={this.onConfirmPasswordChange.bind(this)}
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
      padding: 100
    },
    logo:{
      width: 250,
      height: 120
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
  emailChanged, passwordChanged, signUpUser
 })(SignUpForm);