import React from 'react';

import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const renderItem = ({item}) => (
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

const styles = StyleSheet.create({
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
export default renderItem;
