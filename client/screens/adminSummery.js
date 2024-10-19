import React from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, Text } from 'react-native';
import {
  BarChart,
  PieChart, // Imported PieChart from 'react-native-chart-kit'
  LineChart,
} from 'react-native-chart-kit';

// Get the screen width for the chart
const screenWidth = Dimensions.get("window").width;

// Define the chart style
const graphStyle = {
  // marginVertical: 8,
  borderRadius: 0,
};

// Define the chart configuration
const chartConfig = {
  backgroundGradientFrom: "#60100B",
  backgroundGradientTo: "#60100B",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

function AdminSummary() {
  // Example data for the bar chart
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
    console.log('Clicked value:', value, 'Label:', label);
    alert(`You clicked ${label}: ${value}`);
  };

  const handlePieSlicePress = (value, label) => {
    console.log('Clicked value:', value, 'Label:', label);
    alert(`You clicked ${label}: ${value}`);
  };

  return (
    <View style={styles.container}>
      {/* Replaced <h2> with <Text> */}
      <View style={styles.title}>
        <Text style={styles.title_head}>Dashboard</Text>
      </View>

      <View style={styles.barGraphSection}>
        <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={380}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />

        {/* Overlaying TouchableOpacities on each bar */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: screenWidth,
            height: 380,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {data.datasets[0].data.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: screenWidth / data.labels.length, height: '100%' }}
              onPress={() => handleBarPress(value, data.labels[index])}
            >
              {/* <Text style={{ textAlign: 'center', marginTop: 360 }}>
              {data.labels[index]}
            </Text> */}
            </TouchableOpacity>
          ))}
        </View>

      </View>
      <View style={styles.pieChartSection}>
        <PieChart
          data={dataPie}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[10, 0]} // Adjusted center alignment
          absolute
        />

        {/* Overlaying TouchableOpacities on each slice */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: screenWidth - 40,
            height: 220,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
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
    marginBottom: 20, // Added margin between charts
    marginTop: 20, // Adjusted positive margin for spacing
  },

  pieChartSection: {
    alignItems: "center",
    marginTop: 30, // Added margin for spacing
  },

  title: {
    marginBottom: 0,
    alignItems: 'center', // Center the title
    // backgroundColor:"red",
    marginTop: -30,
    height: 100,
  },

  title_head: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: "600",
    fontFamily: "Roboto, sans-serif",  // updated to a professional font
    marginTop: 10,
    paddingTop: 20,
    color: "#E3242B",
    // textDecorationLine:"underline"
  }

});

export default AdminSummary;
