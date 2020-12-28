import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);




export default function App() {

  const [repos, setRepos] = useState([])


  useEffect(async () => {
    const res = await fetch('https://api.github.com/users/ronezra3/repos')
    const readyResponse = await res.json()

    setRepos(readyResponse)


  }, [])

  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={repos}
        renderItem={renderItem}
        keyExtractor={xx => xx.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
