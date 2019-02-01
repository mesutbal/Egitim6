import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';


export default class ButtonScreen extends React.Component {
    state = {  
        hatavar: false,
        kullaniciadi: ''
    }

    buttonClicked() {
        Alert.alert('React Native', 'Buton Tıklandı');
    }

    render() {
        return (
        <View style={styles.containerStyle}>
            <Button 
                icon="android" 
                mode="contained" 
                style={styles.textStyle} 
                onPress={() => { this.buttonClicked(); }}
                loading
            >
                Android
            </Button>
            <Button icon="android" mode="outlined" style={styles.textStyle}>Android</Button>
            <Button icon="android" mode="text" style={styles.textStyle}>Android</Button>
        </View>);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 50
    },
    textStyle: {
        marginBottom: 20
    }
});
