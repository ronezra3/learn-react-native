import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeRouter, Route, Link } from "react-router-native";


import ListComp from './ListComp';
import Home from './Home';
import Contact from './Contact';



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
    <NativeRouter>
    <View style={styles.container}>

      <View style={styles.nav}>
        <Link to="/Home" underlayColor="#f0f4f7">
          <Text>Home</Text>
        </Link>
        <Link
          to="/contact"
          underlayColor="#f0f4f7"
          
        >
          
          <Text>Contact</Text>
        </Link>
        <Link
          to="/listcomp"
          underlayColor="#f0f4f7" >
          <Text>ListComp</Text>
        </Link>

      </View>

      <Route exact path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/listcomp" component={ListComp} />
    </View>
  </NativeRouter>

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
