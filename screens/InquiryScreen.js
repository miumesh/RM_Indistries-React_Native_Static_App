import React, {Component}from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';

class InquiryScreen extends Component {
  state = {
    typedText: '',
    typedDescription: ''
  }

  onLoginClicked = () => {
    if (this.state.typedText == '' || this.state.typedDescription == ''){
      alert('Please fill all the details');
      return;
    }
    else {
    this.setState({
      typedText: '',
      typedDescription: ''
    })
    Alert.alert("Message", "Data Submitted. Thank You!");
  }
}
  render() {
    return (
      <View>
        <TextInput 
        style={ {
                height: 40,
                margin: 20,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1
            } }
        value = {this.state.typedText}
        keyboardType='email-address'
        placeholder='Enter your email'
        placeholderTextColor='red'
        onChangeText={(text) => {this.setState(() => {
              return {
                typedText: text
              };
          })}}
        />
        <TextInput
                style={{height: 100,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                      }}
                multiline={true}
                value = {this.state.typedDescription}
                placeholder='Enter your message'
                placeholderTextColor='red'
                borderBottomColor='green'
                borderBottomWidth={3}
                borderLeftColor='green'
                borderLeftWidth={3}
                borderRightColor='green'
                borderRightWidth={3}
                editable={true}
                returnKeyType='done'
                onChangeText={(text) => {this.setState(() => {
                    return {
                          typedDescription: text
                    };
                })}}

            />
            <TouchableOpacity style={styles.button} onPress={() => this.onLoginClicked()}>
                <Text style={styles.textStyle}>Submit</Text>
            </TouchableOpacity>
        </View>
      
      
    );
  }
}

export default InquiryScreen;

InquiryScreen.navigationOptions = {
  title: 'Inquiry Form',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize:20,
    color: '#ffffff',
    textAlign: 'center'
    },  
    button: {
    padding: 10,
    backgroundColor: '#202646',
    borderRadius:5,
    margin: 20
    }
});