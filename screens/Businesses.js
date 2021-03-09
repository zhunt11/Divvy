import * as React from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CompanyData from '../data.json'
import { useNavigation } from '@react-navigation/native';

export default class Businesses extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
      data={CompanyData.sort((a, b) => a.name.localeCompare(b.name))}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorView}
      keyExtractor={item => item.id}
      />
      </SafeAreaView>
    );
  }
}

const screenPadding = 16;

const renderItem = ({ item }) => (
  <Item item={item} />
);

function createItem(item) {
  const navigation = useNavigation();
  return  (
    <View style={styles.item}>
      <Text style={styles.name} onPress={() => navigation.navigate("Profile", { item: item })}>{item.name}</Text>
    </View>
  )
}
const Item = ({ item }) => (
  createItem(item)
);

const ItemSeparatorView = () => {
  return (
    <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 12
  },
  name: {
    fontSize: 24,
  },
});
