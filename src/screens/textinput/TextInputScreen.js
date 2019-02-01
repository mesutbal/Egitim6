import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


export default class TextInputScreen extends React.Component {
    state = {  
        hatavar: false,
        kullaniciadi: ''
    }

    render() {
        return (
        <View style={styles.containerStyle}>
            <TextInput 
                label="Kullanıcı Adı"
                mode="outlined"
                style={styles.textStyle}
                value={this.state.kullaniciadi}
                onChangeText={kullaniciadi => this.setState({ kullaniciadi })}
            />
            <TextInput 
                error={this.state.hatavar}
                placeholder="Kullanıcı Adınızı Giriniz"
                mode="flat"
                value={this.state.kullaniciadi}
                style={styles.textStyle}
            />
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
