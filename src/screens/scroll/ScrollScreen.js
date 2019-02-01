import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import axios from 'axios';


export default class ScrollScreen extends React.Component {

    state = { albums: [] };

    componentWillMount() {
        console.log('componentWillMount');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => { 
                console.log(response);
                this.setState({ albums: response.data, loading: false }); 
            });
    }

    renderSliders() {
        return this.state.albums.map(a => <Image 
            key={a.title}
            style={styles.imageStyle}
            source={{ uri: a.image }}
        />);
    }

    render() {
        return (
        <ScrollView 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.scrollStyle}
        >
        { this.renderSliders() }
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: 'cover'
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});
