import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';


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

  const [selectedValue, setSelectedValue] = useState("java");



  const serviceItems = repos.map((repo, i) => {
    
    return <Picker.Item key={repo.name} value={repo.name} label={repo.name} />
  });


  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}

        style={{ height: 50, width: 150 }}

        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >

        <Picker.Item label="Java" value="java" />

        <Picker.Item label="JavaScript" value="js" />
        {serviceItems}
      </Picker>


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
