import * as React from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import CompanyData from '../data.json'

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

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.name} onPress={() => navigation.navigate("CompanyDetail", { item: item })}>{item.name}</Text>
  </View>
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
    backgroundColor: '#ffffff',
    padding: 12
  },
  name: {
    fontSize: 24,
  },
});