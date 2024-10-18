import React from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import { useState, useEffect } from "react";
import ProfileCard from "../components/profileCard";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../styles/global";
import axios from "axios";

export default function PageThirteen({ navigation }) {

  const BASE_URL = "http://10.0.2.2:3001"; // URL of the mock JSON server
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user`);
        const data = response.data;
        setDisplayData(data);
        console.log(data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchData();

  }, []);

  // Filter data where isAccepted is false
  const filteredData = displayData.filter(user => user.isAccepted === false);

  return (
    <LinearGradient
      colors={["#4751A0", "#4686A0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={globalStyles.container}
    >
      <View style={[
        globalStyles.insideContainer,
        { paddingHorizontal: 20, paddingVertical: 30 },
      ]}>
        <ScrollView>
          {filteredData.map((user, index) => (
            <ProfileCard
              key={index}
              name={`${user.firstName} ${user.lastName}`}
              position={user.position}
              onPress={() => alert(`Profile Clicked: ${user.firstName} ${user.lastName}`)}
            />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
