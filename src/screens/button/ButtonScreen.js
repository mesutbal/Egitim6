import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';


export default class ButtonScreen extends React.Component {
    state = {  
        hatavar: false,
        kullaniciadi: '',
        goster: true
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
            <Snackbar 
                visible={this.state.goster}
                onDismiss={() => this.setState({ goster: false })}
                duration={3000}
                action={{
                    label: 'Tamam',
                    onPress: () => {

                    }
                }}
            >
                React Native !
            </Snackbar>
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
