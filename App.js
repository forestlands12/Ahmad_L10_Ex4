import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, SectionList, StyleSheet, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const datasource = [
  {
    title: 'Chengdu',
    region: 'West China',
    icon: 'flame',
    bgColor: '#C1121F',
    data: [
      { key: 'Mapo Tofu', desc: 'Soft tofu in spicy, numbing chilli bean sauce', image: require('./assets/food/mapo_tofu.jpg') },
      { key: 'Dan Dan Noodles', desc: 'Noodles with chilli oil and minced pork', image: require('./assets/food/dandan_noodles.jpg') },
      { key: 'Kung Pao Chicken', desc: 'Stir-fried chicken with peanuts and dried chilli', image: require('./assets/food/kungpao_chicken.jpg') },
    ],
  },
  {
    title: "Xi'an",
    region: 'West China',
    icon: 'business',
    bgColor: '#9C6644',
    data: [
      { key: 'Roujiamo', desc: 'Chinese burger with slow-cooked shredded meat', image: require('./assets/food/roujiamo.jpg') },
      { key: 'Biangbiang Noodles', desc: 'Thick hand-pulled belt noodles with chilli', image: require('./assets/food/biangbiang_noodles.jpg') },
      { key: 'Liangpi', desc: 'Cold skin noodles with vinegar and chilli', image: require('./assets/food/liangpi.jpg') },
    ],
  },
  {
    title: 'Guangzhou',
    region: 'South China',
    icon: 'restaurant',
    bgColor: '#2A9D8F',
    data: [
      { key: 'Har Gow', desc: 'Steamed shrimp dumplings, a dim sum classic', image: require('./assets/food/har_gow.jpg') },
      { key: 'Char Siu', desc: 'Sweet and sticky Cantonese BBQ pork', image: require('./assets/food/char_siu.jpg') },
      { key: 'Wonton Noodles', desc: 'Egg noodles in broth with shrimp wontons', image: require('./assets/food/wonton_noodles.jpg') },
    ],
  },
  {
    title: 'Shenzhen',
    region: 'South China',
    icon: 'boat',
    bgColor: '#264653',
    data: [
      { key: 'Yong Tau Foo', desc: 'Hakka tofu stuffed with fish paste', image: require('./assets/food/yong_tau_foo.jpg') },
      { key: 'Claypot Rice', desc: 'Rice cooked in a clay pot with sausage', image: require('./assets/food/claypot_rice.jpg') },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 40,
    backgroundColor: '#FFF8F0',
  },
  banner: {
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: '#C1121F',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD60A',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 2,
  },
  buttonBox: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#F1D9C2',
  },
  listStyle: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    marginTop: 14,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  regionTag: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  regionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1D9C2',
  },
  foodImage: {
    width: 90,
    height: 70,
    borderRadius: 8,
  },
  textBox: {
    flex: 1,
    marginRight: 12,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D2C2E',
  },
  foodDesc: {
    fontSize: 13,
    color: '#7A6563',
    marginTop: 2,
  },
});

const renderItem = ({ item, section }) => {
  return (
    <TouchableOpacity
      style={styles.itemBox}
      onPress={() => Alert.alert(item.key, item.desc + '\n\nTry it in ' + section.title + '!')}
    >
      <View style={styles.textBox}>
        <Text style={styles.foodName}>{item.key}</Text>
        <Text style={styles.foodDesc}>{item.desc}</Text>
      </View>
      <Image source={item.image} style={styles.foodImage} />
    </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, region, icon, bgColor } }) => {
  return (
    <View style={[styles.headerBox, { backgroundColor: bgColor }]}>
      <View style={styles.headerLeft}>
        <Ionicons name={icon} size={22} color="white" />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.regionTag}>
        <Text style={styles.regionText}>{region}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>China Food Trail</Text>
        <Text style={styles.subtitle}>Famous dishes by city</Text>
      </View>
      <View style={styles.buttonBox}>
        <Button title="Add Dish" color="#C1121F" />
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
