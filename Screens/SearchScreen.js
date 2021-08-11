import React from 'react';
import { Text, View } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Facebook</Text>
          <Text style={{textAlign:'center', fontSize:30,height:500}}>Buzz</Text>

        </View>
      );
    }
  }