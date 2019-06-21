import React, {Component}from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

class LinksScreen extends Component {
  
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>RM Industries</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Text>
                  RM Industries is an app dedicated to meet every aspect of the consumers needs in the real estate industry.
                </Text>
                <Text>
                  It is a forum where buyers, sellers and brokers can exchange information, quickly, effectively and inexpensively.                 
                </Text>
                <Text >
                  At RM Industries, you can advertise a property, search for a property, browse through properties, build your own property Microsite, and visit other Indian and International sites.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>-RM Team</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default LinksScreen;

LinksScreen.navigationOptions = {
  title: 'About Us',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
