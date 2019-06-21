import React, {Component}from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import {testimonials} from '../Data'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class TestimonialScreen extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            {renderTestimonials(testimonials)}
          </ScrollView>
        </View>
    );
  }
}

renderTestimonials = (listData) =>{
    return listData.map((item, index) => {
        return (
              <Card  key={index}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.avatar_url}} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.date}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/> */}
                  <Text>{item.message}</Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>{item.likes}</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Text>{item.time}</Text>
                  </Right>
                </CardItem>
              </Card>
        )
    })
  }

export default TestimonialScreen;

TestimonialScreen.navigationOptions = {
  title: 'Testimonials',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
