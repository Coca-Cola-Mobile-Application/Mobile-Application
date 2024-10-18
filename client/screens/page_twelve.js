import React from "react";
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import InputTitle from "../components/inpuTitle";
import InputComponent from "../components/textInput";
import TextInputProfile from "../components/textInputProfile";
import Card from "../components/card";
import Topic from "../components/topic";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/button";
import axios from "axios";

export default function PageTwelve({ navigation }) {
  const BASE_URL = "http://10.0.2.2:3001"; //url of the mock json server

  const [isEditable, setIsEditable] = useState(false); // Flag to control edit mode

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

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

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

  //handle the edit button click
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
        isAccepted: isAccepted,
      });

      setIsEditable(false);

      console.log("Data updated successfully", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  //handle password reset button click
  const handlePasswordReset = async () => {
    try {
      if (oldPassword && newPassword && retypePassword) {
        if (oldPassword === password && newPassword === retypePassword) {
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
            password: newPassword,
            isAccepted: isAccepted,
          });

          setPassword(newPassword);

          console.log("Password updated successfully", response.data);
        } else if (oldPassword !== password && newPassword === retypePassword) {
          console.log("Old password is incorrect");
        } else if (newPassword !== retypePassword && oldPassword === password) {
          console.log("New password and retype password does not match");
        } else {
          console.log("Error updating password");
        }
      } else {
        console.log("Please fill all the fields");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    } finally {
      setOldPassword("");
      setNewPassword("");
      setRetypePassword("");
    }
  };

  const toggleEditable = () => {
    setIsEditable(!isEditable);
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputTitle>Security Information</InputTitle>
            <TouchableOpacity onPress={() => toggleEditable()}>
              <Icon name="pencil" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
          <Card>
            <TextInputProfile
              placeHolder="Telephone Number :"
              editable={isEditable}
              keyBoardType="default"
              value={mobile}
              onChangeText={(value) => setMobile(value)}
            />

            <TextInputProfile
              placeHolder="Email Address :"
              editable={isEditable}
              keyBoardType="default"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </Card>
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Save"
              buttonStyle={{ width: 150, marginBottom: 20 }} // Add this style to reduce the width of the button
              onPress={() => {
                handleEdit();
              }}
            ></CustomButton>
          </View>

          <InputTitle>Change Password</InputTitle>
          <Card>
            <TextInputProfile
              placeHolder="Old Password :"
              editable={true}
              keyBoardType="default"
              type="password"
              value={oldPassword}
              onChangeText={(value) => setOldPassword(value)}
            />

            <TextInputProfile
              placeHolder="New Password :"
              editable={true}
              keyBoardType="default"
              type="password"
              value={newPassword}
              onChangeText={(value) => setNewPassword(value)}
            />

            <TextInputProfile
              placeHolder="Retype Password :"
              editable={true}
              keyBoardType="default"
              type="password"
              value={retypePassword}
              onChangeText={(value) => setRetypePassword(value)}
            />
          </Card>
          <View style={{ alignItems: "center" }}>
            <CustomButton
              title="Save"
              buttonStyle={{ width: 150, marginBottom: 20 }} // Add this style to reduce the width of the button
              onPress={() => {
                handlePasswordReset();
              }}
            ></CustomButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
