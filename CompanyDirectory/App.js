import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, FlatList, StatusBar, StyleSheet, Text, Dimensions, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LineChart } from 'react-native-chart-kit';
import CompanyData from './data.json'

const Stack = createStackNavigator();
const screenWidth = Dimensions.get("window").width;
const screenPadding = 16;

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="ListView"
        component={ListView}
        options={{ title: 'Company Directory' }}
        />

        <Stack.Screen
        name="CompanyDetail"
        component={CompanyDetailView}
        options={{ title: "Company Profile" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ListView = ({ navigation }) => {
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
};

const CompanyDetailView = ({ navigation, route }) => {
  return (
    <View style={styles.plainView}>
      <Text style={styles.heading1}>{route.params.item.name}</Text>
      <Text style={styles.heading3}>
      {route.params.item.location.address}
      {"\n"}
      {route.params.item.location.city}, {route.params.item.location.country}
      </Text>

      <LineChart
        data={{
          labels: getChartLabels(route.params.item.revenue),
          datasets: [{data: getChartData(route.params.item.revenue)}]
        }}
        width={screenWidth-(screenPadding*2)} // from react-native
        height={220}
        chartConfig={chartConfig}
        fromZero={true}
        yAxisLabel="$"
        yAxisSuffix="m"
        yLabelsOffset={8}
        bezier
        style={{
          marginVertical: 40,
          borderRadius: 8
        }}
      />
    </View>
  );
};

function getChartLabels(data) {
  var labels = []
  for (let i = 0; i < data.length; i++) {
    var date = new Date(data[i].date);
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    labels.push(month + "/" + year.toString().substr(-2))
  }
  return labels
}

function getChartData(data) {
  var dataPoints = []
  for (let i = 0; i < data.length; i++) {
    dataPoints.push(data[i].value/1000000)
  }
  return dataPoints
}

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#f8f8f8',
  decimalPlaces:2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 12
  },
  name: {
    fontSize: 24,
  },
});

export default NavigationStack;
