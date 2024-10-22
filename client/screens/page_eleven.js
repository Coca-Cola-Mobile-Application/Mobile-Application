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

export default function PageEleven({ navigation }) {
  const BASE_URL = "http://10.0.2.2:3001"; //url of the mock json server

  const [isEditablePosition, setIsEditablePosition] = useState(false); // Flag to control edit mode
  const [isEditableBasic, setIsEditableBasic] = useState(false); // Flag to control edit mode
  const [isEditableSecondary, setIsEditableSecondary] = useState(false); // Flag to control edit mode

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
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        setHeight(parseInt(data.height, 10));  // Convert to integer
        setWeight(parseInt(data.weight, 10));  // Convert to integer
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

  //to handle the edit button click
  const toggleEditable = (section) => {
    switch (section) {
      case "position":
        setIsEditablePosition(!isEditablePosition);
        break;
      case "basic":
        setIsEditableBasic(!isEditableBasic);
        break;
      case "secondary":
        setIsEditableSecondary(!isEditableSecondary);
        break;
      default:
        break;
    }
  };

  //to handle the save button click
  const handleEdit = async () => {
    try {
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
        isAccepted: isAccepted
      });

      setIsEditablePosition(false);
      setIsEditableBasic(false);
      setIsEditableSecondary(false);

      console.log("Data updated successfully", response.data);
    }
    catch (error) {
      console.error("Error updating data:", error);
    }
  }
  


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
            <TouchableOpacity onPress={() => toggleEditable("position")}>
              <Icon name="pencil" size={20} color="#000000" />
            </TouchableOpacity>
          </View>

          <Card>
            <TextInputProfile
              placeHolder="Position :"
              editable={isEditablePosition}
              keyBoardType="default"
              value={position}
              onChangeText={(value) => setPosition(value)}
            />

            <TextInputProfile
              placeHolder="Department :"
              editable={isEditablePosition}
              keyBoardType="default"
              value={department}
              onChangeText={(value) => setDepartment(value)}
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
            <TouchableOpacity onPress={() => toggleEditable("basic")}>
              <Icon name="pencil" size={20} color="#000000" />
            </TouchableOpacity>
          </View>

          <Card>
            <TextInputProfile
              placeHolder="First Name :"
              editable={isEditableBasic}
              keyBoardType="default"
              value={firstName}
              onChangeText={(value) => setFirstName(value)}
            />
            <TextInputProfile
              placeHolder="Last Name :"
              editable={isEditableBasic}
              keyBoardType="default"
              value={lastName}
              onChangeText={(value) => setLastName(value)}
            />
            <TextInputProfile
              placeHolder="NIC :"
              editable={isEditableBasic}
              keyBoardType="default"
              value={nic}
              onChangeText={(value) => setNic(value)}
            />
            <TextInputProfile
              placeHolder="Date of Birth :"
              editable={isEditableBasic}
              keyBoardType="default"
              value={dob}
              onChangeText={(value) => setDob(value)}
            />
            <TextInputProfile
              placeHolder="Gender :"
              editable={isEditableBasic}
              keyBoardType="default"
              value={gender}
              onChangeText={(value) => setGender(value)}
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
            <TouchableOpacity onPress={() => toggleEditable("secondary")}>
              <Icon name="pencil" size={20} color="#000000" />
            </TouchableOpacity>
          </View>

          <Card>
            <TextInputProfile
              placeHolder="Address Line 01 :"
              editable={isEditableSecondary}
              keyBoardType="default"
              value={addressLine01}
              onChangeText={(value) => setAddressLine01(value)}
            />
            <TextInputProfile
              placeHolder="Address Line 02 :"
              editable={isEditableSecondary}
              keyBoardType="default"
              value={addressLine02}
              onChangeText={(value) => setAddressLine02(value)}
            />
            <TextInputProfile
              placeHolder="City :"
              editable={isEditableSecondary}
              keyBoardType="default"
              value={city}
              onChangeText={(value) => setCity(value)}
            />
            <TextInputProfile
              placeHolder="District :"
              editable={isEditableSecondary}
              keyBoardType="default"
              value={district}
              onChangeText={(value) => setDistrict(value)}
            />
            <TextInputProfile
              placeHolder="Height :"
              editable={isEditableSecondary}
              keyBoardType="numeric"
              value={height}
              onChangeText={(value) => setHeight(value)}
            />
            <TextInputProfile
              placeHolder="Weight :"
              editable={isEditableSecondary}
              keyBoardType="numeric"
              value={weight}
              onChangeText={(value) => setWeight(value)}
            />
          </Card>

          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Save"
              buttonStyle={{ width: 150, marginBottom: 20 }} // Add this style to reduce the width of the button
              onPress={() => {handleEdit()}}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
