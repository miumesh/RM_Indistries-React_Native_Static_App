import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import InquiryScreen from '../screens/InquiryScreen';
import TestimonialScreen from '../screens/TestimonialScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Our Properties',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const AboutUsStack = createStackNavigator({
  About: LinksScreen,
});

AboutUsStack.navigationOptions = {
  tabBarLabel: 'About us',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

const InquiryStack = createStackNavigator({
  Inquiry: InquiryScreen,
});

InquiryStack.navigationOptions = {
  tabBarLabel: 'Inquiry Form',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-help' : 'md-help'}
    />
  ),
};

const TestimonialStack = createStackNavigator({
  Testimonial: TestimonialScreen,
});

TestimonialStack.navigationOptions = {
  tabBarLabel: 'Testimonials',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ContactStack = createStackNavigator({
  contact: ContactUsScreen,
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Contact Us',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-locate' : 'md-locate'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  AboutUsStack,
  InquiryStack,
  TestimonialStack,
  ContactStack,

});
