import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Config from 'react-native-config';

const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{
          uri: item.webformatURL,
        }}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>{item.tags}</Text>
    </TouchableOpacity>
  );
};

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
    marginTop: 40,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '5%',
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    padding: 10,
    textTransform: 'uppercase',
  },
});

export default App;
