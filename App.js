import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {




  const [text, setText] = React.useState('Useless Placeholder');


  function fn() {
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={inputValue => { setText(inputValue) }}
        value={text}
      />

      <Image source={require('./cat.jpg')} style={styles.image} />
      <Button title="click" onPress={fn} />
      <View>
        <Text>Hello</Text>
      </View>
      <Text>Open up App.js to start working on your app!!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',

    },

    image: {
      height: 100, width: 100
    }
  }
);
