import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function PageTen() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#4751A0", "#4686A0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={globalStyles.container}
    >
      <View
        style={[
          globalStyles.insideContainer,
          { paddingHorizontal: 25, paddingVertical: 30 },
        ]}
      >
        <LinearGradient
          colors={["#fff", "#f3f4f6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container}
        >
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual profile image
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Dhanushka</Text>
              <Text style={styles.email}>dhanu@test.com</Text>
            </View>
            <View style={styles.scoreSection}>
              <Icon name="diamond" size={20} color="#FF0066" />
              <Text style={styles.score}>335</Text>
            </View>
          </View>

          {/* Basic Information Section */}
          <TouchableOpacity style={styles.infoCard} onPress={() => navigation.navigate('Page Eleven')}>
            <View style={styles.infoRow}>
              <Icon name="user" size={20} color="#4686A0" />
              <Text style={styles.infoTitle}>
                Basic Information{"\n"}
                <Text style={styles.infoSubtitle}>
                  Name, NIC, Gender, DOB...
                </Text>
              </Text>
            </View>

            <Icon name="chevron-right" size={18} color="#4686A0" />
          </TouchableOpacity>

          {/* Security Information Section */}
          <TouchableOpacity style={styles.infoCard} onPress={() => navigation.navigate('Page Twelve')}>
            <View style={styles.infoRow}>
              <Icon name="lock" size={20} color="#4686A0" />
              <Text style={styles.infoTitle}>
                Security Information{"\n"}
                <Text style={styles.infoSubtitle}>
                  Email address, Telephone, Password...
                </Text>
              </Text>
            </View>

            <Icon name="chevron-right" size={18} color="#4686A0" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  scoreSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  score: {
    fontSize: 16,
    color: "#FF0066",
    marginLeft: 5,
  },
  infoCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,

    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // for shadow in Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // for shadow in iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  infoSubtitle: {
    fontSize: 12,
    color: "#999",
    marginLeft: 10,
  },
});
