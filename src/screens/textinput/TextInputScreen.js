import React from 'react';
import { View, StyleSheet } from 'react-native';


export default class TextInputScreen extends React.Component {
    render() {
        return (<View style={styles.containerStyle} />);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});
