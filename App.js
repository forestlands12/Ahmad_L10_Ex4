import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, SectionList, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const imageUrl = (cardNumber) =>
  'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + cardNumber + '-2x.png';

const datasource = [
  {
    title: 'Electric',
    icon: 'flash',
    bgColor: '#FFE600',
    textColor: '#7A5C00',
    data: [
      { key: 'Pikachu', card: 25 },
      { key: 'Voltorb', card: 100 },
    ],
  },
  {
    title: 'Water',
    icon: 'water',
    bgColor: '#7EC8E3',
    textColor: '#0B3C5D',
    data: [
      { key: 'Squirtle', card: 7 },
      { key: 'Psyduck', card: 54 },
    ],
  },
  {
    title: 'Fire',
    icon: 'flame',
    bgColor: '#FF9966',
    textColor: '#8B1E00',
    data: [
      { key: 'Charmander', card: 4 },
      { key: 'Growlithe', card: 58 },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 40,
    backgroundColor: 'white',
  },
  buttonBox: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  listStyle: {
    padding: 10,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  itemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lavender',
    borderWidth: 1,
    padding: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cardImage: {
    width: 150,
    height: 210,
    resizeMode: 'contain',
  },
});

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.itemBox}>
      <Text style={styles.itemText}>{item.key}</Text>
      <Image source={{ uri: imageUrl(item.card) }} style={styles.cardImage} />
    </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, icon, bgColor, textColor } }) => {
  return (
    <View style={[styles.headerBox, { backgroundColor: bgColor }]}>
      <Ionicons name={icon} size={20} color={textColor} />
      <Text style={[styles.headerText, { color: textColor }]}>{title.toUpperCase()}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        <Button title="Add Pokemon" />
      </View>
      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listStyle}
      />
    </View>
  );
};

export default App;
