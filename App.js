import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2020/09/01/06/10/lake-5534341_1280.jpg',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Card List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
  },
  cardTitle: {
    fontSize: 16,
    padding: 10,
  },
});

export default App;
