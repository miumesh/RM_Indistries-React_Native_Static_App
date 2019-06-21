import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {list} from '../Data'
import { Card, Button, Icon } from 'react-native-elements'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {renderItems(list)}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: 'Properties',
  headerTitleStyle: { alignSelf: 'center' },
};

renderItems = (listData) =>{
  return listData.map((item, index) => {
      return (
          <Card
            key={index}
            title={item.name}
            image={{ uri: item.avatar_url }}>
            <Text style={{marginBottom: 10}}>
                {item.location}
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
      )
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
