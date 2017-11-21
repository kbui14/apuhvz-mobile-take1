import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LoginButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 2.5,
    marginRight: 2.5 
  }
};


export { LoginButton };