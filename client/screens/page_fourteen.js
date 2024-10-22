import React from "react";
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import InputTitle from "../components/inpuTitle";
import InputComponent from "../components/textInput";
import TextInputProfile from "../components/textInputProfile";
import Card from "../components/card";
import Topic from "../components/topic";
import CustomButton from "../components/button";
import axios from "axios";

export default function PageFourteen({ navigation }) {
  const BASE_URL = "http://10.0.2.2:3001"; //url of the mock json server

  const [position, setPosition] = useState("Height Management Position");
  const [department, setDepartment] = useState("Height Management Department");

  const [firstName, setFirstName] = useState("Dhanushka");
  const [lastName, setLastName] = useState("Perera");
  const [nic, setNic] = useState("199612345678");
  const [dob, setDob] = useState("1996-12-31");
  const [gender, setGender] = useState("Male");

  const [addressLine01, setAddressLine01] = useState("No. 123");
  const [addressLine02, setAddressLine02] = useState("Galle Road");
  const [city, setCity] = useState("Colombo");
  const [district, setDistrict] = useState("Colombo");
  const [height, setHeight] = useState("5.8");
  const [weight, setWeight] = useState("70");

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [password, setPassword] = useState("password");

  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/3`); // Assuming your mock server has users and id=1
        const data = response.data;

        // Update state with fetched data
        setPosition(data.position);
        setDepartment(data.department);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setNic(data.nic);
        setDob(data.dob);
        setGender(data.gender);
        setAddressLine01(data.addressLine01);
        setAddressLine02(data.addressLine02);
        setCity(data.city);
        setDistrict(data.district);
        setHeight(parseInt(data.height, 10)); // Convert to integer
        setWeight(parseInt(data.weight, 10)); // Convert to integer
        setMobile(data.mobile);
        setEmail(data.email);
        setPassword(data.password);
        setIsAccepted(data.isAccepted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //handle accept button
  const handleAccept = async () => {
    try {
      setIsAccepted(true);
      const response = await axios.put(`${BASE_URL}/user/3`, {
        position: position,
        department: department,
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        dob: dob,
        gender: gender,
        addressLine01: addressLine01,
        addressLine02: addressLine02,
        city: city,
        district: district,
        height: height,
        weight: weight,
        mobile: mobile,
        email: email,
        password: password,
        isAccepted: isAccepted,
      });

      if (response.status === 200) {
        alert("Accepted successfully");
      }
    } catch (error) {
      console.error("Error accepting data:", error);
    }
  };

  //handle reject button
  const handleReject = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/user/3`);

      if (response.status === 200) {
        alert("Rejected successfully");
      }

      const responsePost = await axios.post(`${BASE_URL}/deleted_user`, {
        position: position,
        department: department,
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        dob: dob,
        gender: gender,
        addressLine01: addressLine01,
        addressLine02: addressLine02,
        city: city,
        district: district,
        height: height,
        weight: weight,
        mobile: mobile,
        email: email,
        password: password,
        isAccepted: isAccepted,
      });
    } catch (error) {
      console.error("Error rejecting data:", error);
    }
  };

  return (
    <LinearGradient
      colors={["#4751A0", "#4686A0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={globalStyles.container}
    >
      <View style={globalStyles.insideContainer}>
        <ScrollView>
          {/* Adding edit button next to Position Information */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle>Position Information</InputTitle>
          </View>

          <Card>
            <TextInputProfile
              placeHolder="Position :"
              editable={false}
              keyBoardType="default"
              value={position}
            />

            <TextInputProfile
              placeHolder="Department :"
              editable={false}
              keyBoardType="default"
              value={department}
            />
          </Card>

          {/* Adding edit button next to Basic Information */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle>Basic Information</InputTitle>
          </View>

          <Card>
            <TextInputProfile
              placeHolder="First Name :"
              editable={false}
              keyBoardType="default"
              value={firstName}
            />
            <TextInputProfile
              placeHolder="Last Name :"
              editable={false}
              keyBoardType="default"
              value={lastName}
            />
            <TextInputProfile
              placeHolder="NIC :"
              editable={false}
              keyBoardType="default"
              value={nic}
            />
            <TextInputProfile
              placeHolder="Date of Birth :"
              editable={false}
              keyBoardType="default"
              value={dob}
            />
            <TextInputProfile
              placeHolder="Gender :"
              editable={false}
              keyBoardType="default"
              value={gender}
            />
          </Card>

          {/* Adding edit button next to Secondary Information */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle>Secondary Information</InputTitle>
          </View>

          <Card>
            <TextInputProfile
              placeHolder="Address Line 01 :"
              editable={false}
              keyBoardType="default"
              value={addressLine01}
            />
            <TextInputProfile
              placeHolder="Address Line 02 :"
              editable={false}
              keyBoardType="default"
              value={addressLine02}
            />
            <TextInputProfile
              placeHolder="City :"
              editable={false}
              keyBoardType="default"
              value={city}
            />
            <TextInputProfile
              placeHolder="District :"
              editable={false}
              keyBoardType="default"
              value={district}
            />
            <TextInputProfile
              placeHolder="Height :"
              editable={false}
              keyBoardType="default"
              value={height}
            />
            <TextInputProfile
              placeHolder="Weight :"
              editable={false}
              keyBoardType="default"
              value={weight}
            />
          </Card>

          {/* Adding edit button next to Secondary Information */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle>Security Information</InputTitle>
          </View>
          <Card>
            <TextInputProfile
              placeHolder="Telephone Number :"
              editable={false}
              keyBoardType="default"
              value={mobile}
            />

            <TextInputProfile
              placeHolder="Email Address :"
              editable={false}
              keyBoardType="default"
              value={email}
            />

            <TextInputProfile
              placeHolder="Password :"
              editable={false}
              keyBoardType="default"
              type="password"
              value={password}
            />
          </Card>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <CustomButton
              title="Reject"
              buttonStyle={{ width: 100, backgroundColor: "#ff0000" }}
              onPress={() => {
                handleReject();
              }}
            />
            <CustomButton
              title="Accept"
              buttonStyle={{ width: 100, backgroundColor: "#28a745" }}
              onPress={() => {
                handleAccept();
              }}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
