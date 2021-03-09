import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BusinessDetail extends React.Component {
  render() {
    return (
      <View style={styles.plainView}>
        <Text style={styles.heading1}>{this.props.item.name}</Text>
        {/* <Text style={styles.heading3}>
          {item.location.address}
          {"\n"}
          {item.location.city}, {item.location.country}
        </Text> */}
      </View>
    )
  }
}

const screenPadding = 16;

const styles = StyleSheet.create({
  plainView: {
    flex: 1,
    padding: screenPadding,
  },
  heading1: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  heading3: {
    fontSize: 22
  }
});
