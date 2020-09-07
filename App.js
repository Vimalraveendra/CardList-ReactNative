import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';

import Config from 'react-native-config';
import renderItem from './Components/RenderItem';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://pixabay.com/api/?key=${Config.API_KEY}&q=yellow+nature&image_type=photo`;
      const response = await fetch(url);
      const result = await response.json();
      setItems(result.hits);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CardListView</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;
