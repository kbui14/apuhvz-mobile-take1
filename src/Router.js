import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import SignupForm from './components/SignUpForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" hideNavBar={true} />
          <Scene key="signup" component={SignupForm} title="Sign up" />
          <Scene key="additionalsignup" component={AdditionalSignupForm} title="Sign up (cont)" />
        </Scene>


        <Scene key="main">
          <Scene 
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList" 
          component={EmployeeList} 
          title="Employees" 
          initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Scene>


      </Scene>
    </Router>
  );
};

export default RouterComponent;