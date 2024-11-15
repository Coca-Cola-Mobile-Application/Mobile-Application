import React from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, Text } from 'react-native';
import {
  BarChart,
  PieChart,
  LineChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const graphStyle = {
  borderRadius: 0,
};

const chartConfig = {
  backgroundGradientFrom: "#60100B",
  backgroundGradientTo: "#60100B",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

function AdminSummary() {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const dataPie = [
    {
      name: "- Accept",
      population: 10,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "- Pending",
      population: 15,
      color: "#000",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "- Deleted",
      population: 20,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const handleBarPress = (value, label) => {
    alert(`You clicked ${label}: ${value}`);
  };

  const handlePieSlicePress = (value, label) => {
    alert(`You clicked ${label}: ${value}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_head}>Dashboard</Text>
      </View>

      <View style={[styles.barGraphSection, styles.shadow]}>
        <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={380}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
        
        <View style={styles.overlayContainer}>
          {data.datasets[0].data.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: screenWidth / data.labels.length, height: '100%' }}
              onPress={() => handleBarPress(value, data.labels[index])}
            />
          ))}
        </View>
      </View>

      <View style={[styles.pieChartSection, styles.shadow]}>
        <PieChart
          data={dataPie}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[10, 0]}
          absolute
        />
        <View style={styles.overlayContainer}>
          {dataPie.map((slice, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: (screenWidth - 40) / dataPie.length, height: '100%' }}
              onPress={() => handlePieSlicePress(slice.population, slice.name)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60100B",
    justifyContent: "center",
  },

  barGraphSection: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },

  pieChartSection: {
    alignItems: "center",
    marginTop: 30,
  },

  title: {
    alignItems: 'center',
    marginTop: -30,
    height: 100,
  },

  title_head: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: "600",
    fontFamily: "Roboto, sans-serif",
    marginTop: 10,
    padding: 20,
    color: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },

  // shadow: {
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 4 },
  //   shadowOpacity: 1,
  //   shadowRadius: 5,
  //   elevation: 5,
  //   backgroundColor: '#E3242B', // needed for shadow to show up on Android
  //   borderRadius: 0, // adds a subtle rounded corner
  // },

  overlayContainer: {
    position: 'absolute',
    top: 0,
    width: screenWidth,
    height: 380,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AdminSummary;
