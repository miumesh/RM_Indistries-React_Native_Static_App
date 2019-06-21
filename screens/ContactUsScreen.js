import React, {Component}from 'react';
import { StyleSheet } from 'react-native';
import CardComponent from 'react-native-static-gmap-card'

class ContactUsScreen extends Component {

  render() {
    return (
        <CardComponent
        title='RM Industries'
        subtitle='12 May 2019'
        footerItems={[{backgroundColor: 'rgb(255,200,199)', text: 'Home'}, {backgroundColor: 'rgb(255,234,199)', text: 'Rentals'}]}
        value='Mob - 1923773239'
        apiKey='AIzaSyB-w92VrqIbf9FboZ4vR73b5wG8nxdoog0'
        // width ={}
        height = {150}
        // mapZoom={17}
        grayscale={true}
        searchTerm = {'Pune'}
      />
    );
  }
}

export default ContactUsScreen;

ContactUsScreen.navigationOptions = {
  title: 'Contact Us',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});