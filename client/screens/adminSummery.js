import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import {
  BarChart,
} from 'react-native-chart-kit';

// Get the screen width for the chart
const screenWidth = Dimensions.get("window").width;

// Define the chart style
const graphStyle = {
  marginVertical: 8,
  borderRadius: 16
};

// Define the chart configuration
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

export default function AdminSummery() {
  // Example data for the bar chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  return (
    <View style={styles.barGraphSection}>
      <BarChart
        style={graphStyle}
        data={data}
        width={screenWidth - 40} // Adjust width to fit with padding
        height={300} // Fixed height for the chart
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30} // Rotate the labels on the X axis
      />
    </View>
  );
}

const styles = StyleSheet.create({
  barGraphSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop:-30,
    paddingBottom:20,
  },
});
