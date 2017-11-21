import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Picker } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class SignUpForm extends Component {

      onButtonPressFinish() {
        this.props.finishSignup();
      }
    
      renderButton() {
        if (this.props.loading) {
          return <Spinner size="large" />;
        }
        return (
          <View style={styles.container}>
              <View style={styles.buttonContainer}>
              <Button onPress={this.onButtonPressFinish.bind(this)}>
                Finish
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
            
            // living area
            // alpha zombie
            // image upload
            // finish
        
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

              <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'Living area', value })}
          >
            <Picker.Item label="Adams" value="Adams" />
            <Picker.Item label="Engstrom" value="Engstrom" />
            <Picker.Item label="Smith" value="Smith" />
            <Picker.Item label="Trinity" value="Trinity" />
            <Picker.Item label="Alosta" value="Alosta" />
            <Picker.Item label="Bowles" value="Bowles" />
            <Picker.Item label="Shire Mods" value="Shire Mods" />
            <Picker.Item label="University Park" value="University Park" />
            <Picker.Item label="University Village" value="University Village" />
          </Picker>
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
  emailChanged, passwordChanged, signUpUser, finishSignup
 })(AdditionalSignUpForm);