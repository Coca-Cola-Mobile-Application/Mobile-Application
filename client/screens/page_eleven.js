import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import InputTitle from "../components/inpuTitle";
import InputComponent from "../components/textInput";
import TextInputProfile from "../components/textInputProfile";
import Card from "../components/card";
import Topic from "../components/topic";

export default function PageEleven({ navigation }) {
  return (
    <LinearGradient
      colors={["#4751A0", "#4686A0"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={globalStyles.container}
    >
      <View style={globalStyles.insideContainer}>
        <ScrollView>
          <InputTitle>Basic Information</InputTitle>
          <Card>
            <TextInputProfile
              placeHolder="First Name"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="Last Name"
              editable={true}
              keyBoardType="default"
            />
            <TextInputProfile
              placeHolder="NIC"
              editable={true}
              keyBoardType="default"
            />
            <TextInputProfile
              placeHolder="Date of Birth"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="Gender"
              editable={true}
              keyBoardType="default"
            />
          </Card>

          <InputTitle>Secondary Information</InputTitle>
          <Card>
            <TextInputProfile
              placeHolder="Address Line 01"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="Address Line 02"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="City"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="District"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="Height"
              editable={true}
              keyBoardType="default"
            />

            <TextInputProfile
              placeHolder="Weight"
              editable={true}
              keyBoardType="default"
            />
          </Card>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
