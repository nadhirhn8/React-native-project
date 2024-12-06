import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ReclamationDetailsScreen from '../screens/ReclamationDetailsScreen.js';
import NotificationsScreen from '../screens/NotificationsScreen';
import ReclamationFormScreen from '../screens/ReclamationFormScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import User from '../screens/User';

const Stack=createStackNavigator();


const AppNavigator = () => {

return (

<NavigationContainer>

<Stack.Navigator initialRouteName="Login">

<Stack.Screen name="Login" component={LoginScreen} />

<Stack.Screen name="SignUp" component={SignUpScreen} />

<Stack.Screen name="Dashboard" component={DashboardScreen} />

<Stack.Screen name="Réclamation" component={ReclamationDetailsScreen} />

<Stack.Screen name="Notification" component={NotificationsScreen} />

<Stack.Screen name="RéclamationForm" component={ReclamationFormScreen} />

<Stack.Screen name="UserProfile" component={UserProfileScreen} />

<Stack.Screen name="User" component={User} />


</Stack.Navigator>

</NavigationContainer>

);

};

export default AppNavigator;