import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';

export default function RegisterPage({ navigation }) {  // Accept navigation as a prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    Alert.alert('Success', `Name: ${name}, Email: ${email}`);
  };

  const handleNavigate = () => {
    navigation.navigate('Login');  // Navigate to the "Login" screen
  };

  return (
    <View style={styles.content}>
      {/* Top Section */}
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Welcome back to Coco-App</Text> 
        <Text style={styles.header_subText}>You have to sign in to continue</Text> 
      </View>

      <View style={styles.logo_container}>
        <Image source={require('../assets/image01.png')} style={styles.logo} />
      </View>

      {/* Form Section */}
      <View style={styles.form_container}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {/* Custom Submit Button */}
        <TouchableOpacity style={styles.submit_button} onPress={handleSubmit}>
          <Text style={styles.submit_button_text}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom_container}>
        <Text style={styles.header_subText}>Do you have an account? 
          <TouchableOpacity style={styles.linkButton} onPress={handleNavigate}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>  
        </Text> 
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
    marginTop: 30,
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
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submit_button_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom_container: {
    marginTop: 20,
  },
  linkButton: {
    marginLeft: 5,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
