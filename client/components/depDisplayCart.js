import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DepDisplayCart({ detail, addUsersToAuthList, deleteUsersFromAuthList, selectedDepList }) {
    
    const isSelected = selectedDepList.includes(detail);

    const handleIDChangeOne = () => {
        addUsersToAuthList(detail); 
    };

    const handleIDChangeTwo = () => {
        deleteUsersFromAuthList(detail); 
    };

    return (
        <View style={styles.fullContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.topicText}>
                    {detail}
                </Text>
            </View>

            {
                isSelected ? (
                    <TouchableOpacity onPress={handleIDChangeTwo}>
                        <LinearGradient
                            colors={['#4751A0', '#4686A0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.addContainer}
                        >
                            <Text style={styles.addText}>
                                REMOVE
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleIDChangeOne}>
                        <LinearGradient
                            colors={['#4751A0', '#4686A0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.addContainer}
                        >
                            <Text style={styles.addText}>
                                ADD
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    fullContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        height: 80, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20, 
        borderColor: '#000080',
        backgroundColor: '#f9f9f9',
        elevation: 20,
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 1 },
    },
    topicText: {
        fontWeight: 'bold',
        fontSize: 16,  
        color: '#000', 
        textAlign: 'start'
    },
    addContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 80,  
        height: 50, 
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    addText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    textContainer: {      
    },
});
