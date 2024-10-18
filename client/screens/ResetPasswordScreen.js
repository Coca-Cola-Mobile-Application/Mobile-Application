import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../styles/global";

export default function ResetPasswordScreen({navigation}) {

  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    Alert.alert('Success', `Name: ${name}, Pw: ${newPassword}`);
  };

  const handleForgetNavigate = async()=>{
    // console.log("Forget Password");
    navigation.navigate("forgetPassword")
  }

  return (
    <View style={styles.content}>
      {/* Top Section */}
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Reset Password Page</Text> 
        <Text style={styles.header_subText}>Enter Your New Password</Text> 
      </View>

      <View style={styles.logo_container}>
        <Image source={require('../assets/image01.png')} style={styles.logo} />
      </View>

      {/* Form Section */}
      <View style={styles.form_container}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />       
        {/* Custom Submit Button */}
        <TouchableOpacity style={styles.submit_button} onPress={handleSubmit}>
          <Text style={styles.submit_button_text}>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',      
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  header_container: {
    marginBottom: 30,
    alignItems: 'center',
  },

  header_text: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  header_subText: {
    color: '#666',
    fontSize: 16,
  },

  logo_container: {
    marginTop: 50,
  },

  form_container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginTop: 50,
  },

  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },

  submit_button: {
    backgroundColor: '#3498db',  // Blue background for the button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  submit_button_text: {
    color: '#fff',              // White text
    fontSize: 16,
    fontWeight: 'bold',
  },

  Forget_pw:{
    color: '#000',  // Blue text
    fontSize: 12,
    textAlign: 'right',
  }


});
