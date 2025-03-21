import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddFlatDetailsScreen,
  CompleteYourProfileScreen,
  HomeScreen,
  LoginScreen,
  MessagesScreen,
  ProfileScreen,
  RegisterScreen,
  SortedScreen,
  UserTypeScreen,
} from '../screens';
import {CustomTabBar} from '../components';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator
      // initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="SortedScreen" component={SortedScreen} />
      <Tabs.Screen name="MessagesScreen" component={MessagesScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

function RegisterStack() {
  return (
    <Stack.Navigator
      initialRouteName="CompleteYourProfileScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="UserTypeScreen"
        component={UserTypeScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="CompleteYourProfileScreen"
        component={CompleteYourProfileScreen}
      />
      <Stack.Screen
        name="AddFlatDetailsScreen"
        component={AddFlatDetailsScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

function AppNavigations() {
  return (
    <Stack.Navigator
      initialRouteName="RegisterStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="RegisterStack" component={RegisterStack} />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigations;
